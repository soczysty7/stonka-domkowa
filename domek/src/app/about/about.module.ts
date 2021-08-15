import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { CommonComponentsModule } from '../common/common-components.module';
import {LyCarouselModule} from '@alyle/ui/carousel';
import { LyGridModule } from '@alyle/ui/grid';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    LyCarouselModule,
    LyGridModule,
    CommonComponentsModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
