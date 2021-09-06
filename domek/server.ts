import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
//@ts-ignore
import { Blob } from "blob-polyfill";

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
const domino = require('domino');
const fs = require('fs');
const path = require('path');

// Use the browser index.html as template for the mock window
const distFolder = join(process.cwd(), 'dist/domek/browser');
const indexHtmlName = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index.html';
const template = fs.readFileSync(path.join(distFolder, indexHtmlName)).toString();

// Shim for the global window and document objects.
const win = domino.createWindow(template);
win.URL = { createObjectURL: () => ({})};
win.document = { createElement: () => ({})};
global['window'] = win;
global['document'] = win.document;
//@ts-ignore
global["branch"] = null;
//@ts-ignore
global["object"] = win.object;
global["HTMLElement"] = win.HTMLElement;
global["navigator"] = win.navigator;
global['Blob'] = Blob;

export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/domek/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
