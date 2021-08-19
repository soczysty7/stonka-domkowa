import { Component, ChangeDetectionStrategy } from '@angular/core';
import {StyleRenderer, lyl, ThemeVariables} from '@alyle/ui';

const STYLES = () => {
  return {
    carousel: () => lyl `{
      margin: auto
      // responsive
      // max-width: 100vh
      height: 50vh
      min-height: 220px
      max-height: 320px
    }`,
    carouselItem: () => lyl `{
      display: flex
      text-align: center
      justify-content: flex-end
      align-items: center
      height: 100%
      flex-direction: column
      padding: 1em 1em 48px
      box-sizing: border-box
      color: #fff
    }`,
    gridItem: () => lyl `{
      display: flex
      align-items: center
      width: 350px
      padding-left: 10px
      padding-right: 10px
    }`
  };
};

@Component({
  selector: 'app-heading-photo',
  templateUrl: './heading-photo.component.html',
  styleUrls: ['./heading-photo.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  providers: [
    StyleRenderer
  ]
})
export class HeadingPhotoComponent {

  readonly classes = this.sRenderer.renderSheet(STYLES);
  items = [
    {
      title: 'Domek nad Kryniczanką',
      img: '../assets/foto/domek-min.JPG'
    },
    {
      title: 'Wnętrze Domku',
      img: '../assets/foto/inside-min.JPG'
    },
    {
      title: 'Domek z perspektywą',
      img: '../assets/foto/perspective-min.JPG'
    }
  ];

  public articles = Array(8).fill(1);

  constructor(
    private sRenderer: StyleRenderer
  ) { }
}

