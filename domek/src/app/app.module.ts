import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LyTabsModule } from '@alyle/ui/tabs';

import { LyTypographyModule } from '@alyle/ui/typography';
import { LyCommonModule } from '@alyle/ui';

// Gestures
import {
  HAMMER_GESTURE_CONFIG,
  HammerModule
} from '@angular/platform-browser';

/** Import Alyle UI */
import {
  LyTheme2,
  StyleRenderer,
  LY_THEME,
  LY_THEME_NAME,
  LyHammerGestureConfig
} from '@alyle/ui';

/** Import the component modules */
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyGridModule } from '@alyle/ui/grid';
import { LyIconModule } from '@alyle/ui/icon';
import { LyBadgeModule } from '@alyle/ui/badge';

/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    LyGridModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Add components
    LyButtonModule,
    LyToolbarModule,
    LyIconModule,
    // ...
    // Gestures
    HammerModule,
    AppRoutingModule,
    CommonModule,
    LyTabsModule,
    LyCommonModule,
    LyTypographyModule,
    CommonModule,
    LyBadgeModule,
  ],
  /** Add themes */
  providers: [
    [ LyTheme2 ],
    [ StyleRenderer ],
    // Theme that will be applied to this module
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
    // Gestures
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
