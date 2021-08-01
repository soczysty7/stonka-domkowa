import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceRoutingModule } from './place-routing.module';
import { PlaceComponent } from './place.component';
import { CommonComponentsModule } from '../common/common-components.module';

@NgModule({
  imports: [
    CommonModule,
    PlaceRoutingModule,
    CommonComponentsModule
  ],
  declarations: [PlaceComponent]
})
export class PlaceModule { }
