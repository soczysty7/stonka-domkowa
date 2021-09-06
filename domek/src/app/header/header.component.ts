import { LyTheme2, Placement } from '@alyle/ui';
import { LyDrawer, LyDrawerMode } from '@alyle/ui/drawer';
import { LyIconService } from '@alyle/ui/icon';
import { Component, ChangeDetectionStrategy, ViewChild, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {AppStateService} from '../services/app-state.service';
import {fromEvent, Subscription, zip} from 'rxjs';
import {throttleTime, distinctUntilChanged, tap, map} from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

const styles = ({
  grow: {
    flexGrow: 1
  },
  icon: {
    marginAfter: '.5em'
  },
  drawerContainer: {
    height: '270px',
    transform: 'translate3d(0,0,0)'
  },
  drawerContent: {
    padding: '16px'
  },
  iconLarge: {
    fontSize: '50px'
  }
});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // animations: []
})
export class HeaderComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('drawer01') public drawer!: LyDrawer;
  public links = ['/about', '/news', '/place', '/contact'];
  public pageNames = ['Domek', 'Aktualności', 'Krynica', 'Kontakt']
  public elementPosition: any;
  public activeLink = this.links[0];
  public hasBackdrop: boolean = true;
  public mode = 'over' as LyDrawerMode;
  public position = 'before' as Placement;
  public isDrawerToggled = false;
  public subscriptions = new Subscription();
  public selectedRoutePageMargin = '0px';
  public contentHeight = '0px';
  public headerHeight = '0px';
  public drawerWidth = 190
  public isTransparent = true;

  readonly classes = this._theme.addStyleSheet(styles);
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    private changeDetecotor: ChangeDetectorRef,
    private appState: AppStateService,
    private _theme: LyTheme2,
    icon: LyIconService,
    sanitizer: DomSanitizer,
  ) {
    icon.setSvg('home', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/home'));
  }

  public ngOnInit(): void {
    this.subscriptions.add(
      zip(this.appState.getHeaderHeight$(), this.appState.getContentHeight$())
        .subscribe((h: number[]) => {
          this.headerHeight = h[0].toString() + 'px';
          this.contentHeight = h[1].toString() + 'px';
        }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) { return; }
    const content = this.document.querySelector('#content') as HTMLElement;
    this.elementPosition = content.scrollTop;
    const scroll$ = fromEvent(content, 'scroll').pipe(
      throttleTime(10),
      map(() => 10 > content.scrollTop),
      distinctUntilChanged(),
      tap(() => this.changeDetecotor.markForCheck()),
    ).subscribe((s: boolean) => this.isTransparent = s);
    this.subscriptions.add(scroll$);
  }

  public toggleDrawer(): void {
    this.drawer.toggle();
    this.isDrawerToggled = !this.isDrawerToggled;
  }

  public containerClick(event: any): void {
    const hasClickedBackdrop = (event.target as HTMLElement).className.includes('at');
    if(!hasClickedBackdrop) { return; }
    this.isDrawerToggled = !this.isDrawerToggled;
  }
}
