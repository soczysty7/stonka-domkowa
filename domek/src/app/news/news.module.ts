import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { CommonComponentsModule } from '../common/common-components.module';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    CommonComponentsModule
  ],
  declarations: [NewsComponent]
})
export class NewsModule { }
