import { Component, OnInit, Input } from '@angular/core';

interface ImageMeta {
  image: string;
  thumbImage: string;
  alt: string;
  title: string;
}

export type Images = ImageMeta[];

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.css'],
})
export class SectionCardComponent implements OnInit {

  ngOnInit() {
  }
}