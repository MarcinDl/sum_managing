import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WcagPageRoutingModule } from './wcag-routing.module';

import { WcagPage } from './wcag.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WcagPageRoutingModule,
    TranslateModule,
    SharedModuleModule
  ],
  declarations: [WcagPage]
})
export class WcagPageModule {}
