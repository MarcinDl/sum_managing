import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WnozPageRoutingModule } from './wnoz-routing.module';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

import { WnozPage } from './wnoz.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WnozPageRoutingModule,
    SharedModuleModule,
    TranslateModule
  ],
  declarations: [WnozPage]
})
export class WnozPageModule {}
