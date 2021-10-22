import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefaultPageRoutingModule } from './default-routing.module';

import { DefaultPage } from './default.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefaultPageRoutingModule,
    TranslateModule,
    SharedModuleModule
  ],
  declarations: [DefaultPage]
})
export class DefaultPageModule {}
