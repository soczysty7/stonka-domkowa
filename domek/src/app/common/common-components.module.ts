import { SectionCardComponent } from './section-card/section-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaperComponent} from "./paper/paper.component";
import {LyTypographyModule} from "@alyle/ui/typography";
import {LyCarouselModule} from '@alyle/ui/carousel';
import { LyExpansionIconModule } from '@alyle/ui';
import { LyExpansionModule } from '@alyle/ui/expansion';
import { LyGridModule } from '@alyle/ui/grid';
import { LyButtonModule } from '@alyle/ui/button';
import { HeadingPhotoComponent } from './heading-photo/heading-photo.component';
import { NiceExpansionPanelComponent } from './nice-expansion-panel/nice-expansion-panel.component';


@NgModule({
  imports: [
    CommonModule,
    LyTypographyModule,
    LyExpansionIconModule,
    LyExpansionModule,
    LyCarouselModule,
    LyGridModule,
    LyButtonModule
  ],
  declarations: [
    SectionCardComponent,
    PaperComponent,
    HeadingPhotoComponent,
    NiceExpansionPanelComponent
  ],
  exports: [
    LyGridModule,
    HeadingPhotoComponent,
    NiceExpansionPanelComponent,
    SectionCardComponent,
    PaperComponent
  ]
})
export class CommonComponentsModule { }
