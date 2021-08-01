import { SectionCardComponent } from './section-card/section-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SectionCardComponent,
  ],
  exports: [
    SectionCardComponent,
  ]
})
export class CommonComponentsModule { }
