import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translate:TranslateService
  ) { }


  selected = '';

  setInitialAppLanguage(){
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
  }

  getLanguages(){
    return [
      { text: 'Polish', value: 'pl'},
      { text: 'English', value: 'en'},
      { text: 'German', value: 'de'},
      { text: 'Ukrainian', value: 'ukr'},
    ]
  }

  setLanguage(lng){
    this.translate.use(lng);
    this.selected  = lng;
  }
}
