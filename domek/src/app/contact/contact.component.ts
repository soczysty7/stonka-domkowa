import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { LyIconService } from '@alyle/ui/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LyTheme2 } from '@alyle/ui';
import { isPlatformBrowser } from '@angular/common';

const styles = ({
  returnIcon: {
    fontSize: '16px'
  }
});

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  readonly classes = this._theme.addStyleSheet(styles);
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private _theme: LyTheme2,
    icon: LyIconService,
    sanitizer: DomSanitizer,
  ) {
    icon.setSvg('home', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/home'));
  }
  public domekPosition: [number, number] = [20.9567, 49.4235];

  public readonly locale = {
    'FullscreenControl.Enter': 'Przejście do trybu pełnoekranowego',
    'FullscreenControl.Exit': 'Wyjście z trybu pełnoekranowego',
    'GeolocateControl.FindMyLocation': 'Znajdź moje położenie',
    'GeolocateControl.LocationNotAvailable': 'Lokalizacja jest niedostępna',
    'LogoControl.Title': 'Mapa',
    'NavigationControl.ResetBearing': 'Resetuj kompas',
    'NavigationControl.ZoomIn': 'Przybliż',
    'NavigationControl.ZoomOut': 'Oddal',
    'ScaleControl.Feet': 'ф',
    'ScaleControl.Meters': 'm',
    'ScaleControl.Kilometers': 'km',
    'ScaleControl.Miles': 'mil',
    'ScaleControl.NauticalMiles': 'nmil',
  };

  public isNotOnServer = true;

  public ngOnInit() {
    this.isNotOnServer = isPlatformBrowser(this.platformId)
  }

  public centerMap(): void {
    this.domekPosition = [20.9567, 49.4235];
  }
}