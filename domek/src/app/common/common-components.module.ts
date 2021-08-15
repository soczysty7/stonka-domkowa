import { SectionCardComponent } from './section-card/section-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaperComponent} from "./paper/paper.component";
import {LyTypographyModule} from "@alyle/ui/typography";

@NgModule({
  imports: [
    CommonModule,
    LyTypographyModule
  ],
  declarations: [
    SectionCardComponent,
    PaperComponent
  ],
  exports: [
    SectionCardComponent,
    PaperComponent
  ]
})
export class CommonComponentsModule { }
