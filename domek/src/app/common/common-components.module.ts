import { SectionCardComponent } from './section-card/section-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaperComponent} from "./paper/paper.component";
import {LyTypographyModule} from "@alyle/ui/typography";
import {LyCarouselModule} from '@alyle/ui/carousel';
import { LyGridModule } from '@alyle/ui/grid';
import { HeadingPhotoComponent } from './heading-photo/heading-photo.component';


@NgModule({
  imports: [
    CommonModule,
    LyTypographyModule,
    LyCarouselModule,
    LyGridModule
  ],
  declarations: [
    SectionCardComponent,
    PaperComponent,
    HeadingPhotoComponent
  ],
  exports: [
    HeadingPhotoComponent,
    SectionCardComponent,
    PaperComponent
  ]
})
export class CommonComponentsModule { }
