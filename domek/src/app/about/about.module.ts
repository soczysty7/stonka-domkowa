import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { CommonComponentsModule } from '../common/common-components.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    CommonComponentsModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
