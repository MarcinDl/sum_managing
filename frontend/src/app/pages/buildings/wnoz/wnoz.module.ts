import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WnozPageRoutingModule } from './wnoz-routing.module';

// import { WnozPage } from './wnoz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WnozPageRoutingModule
  ],
  // declarations: [WnozPage]
})
export class WnozPageModule {}
