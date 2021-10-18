import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ShortlecturenamePipe } from '../pipes/shortlecturename.pipe';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModuleModule,
    TranslateModule
  ],
  declarations: [HomePage, ShortlecturenamePipe],
  exports: []
})
export class HomePageModule {}
