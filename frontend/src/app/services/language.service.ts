import { Injectable, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translate:TranslateService,

  ) { }


  selected = '';
  initialLanguage = localStorage.getItem("choosenLang") || this.translate.getBrowserLang() ;
  setInitialAppLanguage(){

    if (this.proba == ''){
      this.translate.setDefaultLang(this.initialLanguage);
    } else {
      this.translate.setDefaultLang("choosenLang")
    }
  }

  proba:any = '';
  setLanguage(lng){
    this.translate.use(lng);
    localStorage.setItem("choosenLang",lng)
  }


}
