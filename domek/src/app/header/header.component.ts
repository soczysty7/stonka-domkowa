import { LyTheme2, Placement } from '@alyle/ui';
import { LyDrawer, LyDrawerMode } from '@alyle/ui/drawer';
import { LyIconService } from '@alyle/ui/icon';
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
    padding: '1em'
  }
});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // animations: []
})
export class HeaderComponent {
  @ViewChild('drawer01') drawer!: LyDrawer;
  links = ['/about', '/news', '/place', '/contact'];
  pageNames = ['Domek', 'Aktualności', 'Krynica', 'Kontakt']  
  elementPosition: any;
  activeLink = this.links[0];
  hasBackdrop: boolean = true;
  mode = 'over' as LyDrawerMode;
  position = 'before' as Placement;
  isDrawerToggled = false;

  readonly classes = this._theme.addStyleSheet(styles);
  constructor(
    private _theme: LyTheme2,
    icon: LyIconService,
    sanitizer: DomSanitizer,
  ) {
    icon.setSvg('menu', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/menu'));
  }

  public toggleDrawer(): void {
    this.drawer.toggle();
    this.isDrawerToggled = !this.isDrawerToggled;
  }

  public containerClick(event: any): void {
    const hasClickedBackdrop = (event.target as HTMLElement).className === 'LyDrawerContent-backdrop-ap';
    if(!hasClickedBackdrop) { return; }
    this.isDrawerToggled = !this.isDrawerToggled;
  }
}