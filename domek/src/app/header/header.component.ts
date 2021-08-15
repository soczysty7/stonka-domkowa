import { LyTheme2, Placement } from '@alyle/ui';
import { LyDrawer, LyDrawerMode } from '@alyle/ui/drawer';
import { LyIconService } from '@alyle/ui/icon';
import { Component, ChangeDetectionStrategy, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {AppStateService} from '../services/app-state.service';
import {Subscription, zip} from 'rxjs';

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
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('drawer01') drawer!: LyDrawer;
  links = ['/about', '/news', '/place', '/contact'];
  pageNames = ['Domek', 'Aktualności', 'Krynica', 'Kontakt']
  elementPosition: any;
  activeLink = this.links[0];
  hasBackdrop: boolean = true;
  mode = 'over' as LyDrawerMode;
  position = 'before' as Placement;
  isDrawerToggled = false;
  public subscriptions = new Subscription();
  public contentHeight = '0px';
  public headerHeight = '0px';
  public contentWithoutHeader = '0px';
  public drawerWidth = 190

  readonly classes = this._theme.addStyleSheet(styles);
  constructor(
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
          this.contentWithoutHeader = (h[1] - 2 * h[0] + 32).toString() + 'px';
        }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public toggleDrawer(): void {
    this.drawer.toggle();
    this.isDrawerToggled = !this.isDrawerToggled;
  }

  public containerClick(event: any): void {
    const hasClickedBackdrop = (event.target as HTMLElement).className.includes('LyDrawerContent-backdrop');
    if(!hasClickedBackdrop) { return; }
    this.isDrawerToggled = !this.isDrawerToggled;
  }
}
