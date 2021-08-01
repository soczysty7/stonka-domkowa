import { LyTheme2 } from '@alyle/ui';
import { LyIconService } from '@alyle/ui/icon';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const styles = ({
  grow: {
    flexGrow: 1
  },
  icon: {
    marginAfter: '.5em'
  },
});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // animations: []
})
export class HeaderComponent {
  links = ['/about', '/news', '/place', '/contact'];
  pageNames = ['Domek', 'Aktualności', 'Krynica', 'Kontakt']  
  elementPosition: any;
  activeLink = this.links[0];  

  readonly classes = this._theme.addStyleSheet(styles);
  constructor(
    private _theme: LyTheme2,
    icon: LyIconService,
    sanitizer: DomSanitizer,
  ) {
    icon.setSvg('menu', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/menu'));
  }

}