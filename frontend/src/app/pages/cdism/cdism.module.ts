import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdismPageRoutingModule } from './cdism-routing.module';

import { CdismPage } from './cdism.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdismPageRoutingModule
  ],
  declarations: [CdismPage]
})
export class CdismPageModule {}
