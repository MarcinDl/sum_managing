import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiDataService } from './services/api-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ShortlecturenamePipe } from './pipes/shortlecturename.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/','.json')
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SharedModuleModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader, useFactory: (createTranslateLoader), deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ApiDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
