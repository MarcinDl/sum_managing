import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LanguageService } from './services/language.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform:Platform,
    private languageService:LanguageService,
    private menu:MenuController
  ) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then( () => {
      this.languageService.setInitialAppLanguage();
    })
  }



  ngOnInit() {
  }

  openMenu(){
    // alert("ddd")
    this.menu.enable(true, 'custom');
    this.menu.open('custom')
  }



}
