import {Component, HostListener, OnInit} from '@angular/core';
import { StyleRenderer, ThemeVariables, lyl, WithStyles } from '@alyle/ui';
import {AppStateService} from './services/app-state.service';
import * as AOS from 'aos';

const STYLES = (theme: ThemeVariables) => ({
  $global: lyl `{
    body {
      background-color: ${theme.background.default}
      color: ${theme.text.default}
      font-family: ${theme.typography.fontFamily}
      margin: 0
      direction: ${theme.direction}
    }
  }`,
  root: lyl `{
    display: block
  }`
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    StyleRenderer
  ]
})
export class AppComponent implements WithStyles, OnInit {
  readonly classes = this.sRenderer.renderSheet(STYLES, true);
  public title = 'domek';
  constructor(
    readonly sRenderer: StyleRenderer,
    private appState: AppStateService
  ) { }

  public ngOnInit() {
    AOS.init();
    this.appState.scaleWindowHeight(window.innerHeight);
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: any): void {
    this.appState.scaleWindowHeight(event.target.innerHeight)
  }
}
