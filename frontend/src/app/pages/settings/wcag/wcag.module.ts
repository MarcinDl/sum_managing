import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WcagPageRoutingModule } from './wcag-routing.module';

import { WcagPage } from './wcag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WcagPageRoutingModule
  ],
  declarations: [WcagPage]
})
export class WcagPageModule {}
