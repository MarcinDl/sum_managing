import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdismPageRoutingModule } from './cdism-routing.module';

import { CdismPage } from './cdism.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdismPageRoutingModule,
    SharedModuleModule,
    TranslateModule
  ],
  declarations: [CdismPage]
})
export class CdismPageModule {}
