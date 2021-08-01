import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { CommonComponentsModule } from '../common/common-components.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    CommonComponentsModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
