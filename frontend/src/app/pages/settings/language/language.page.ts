import { Component, OnInit } from '@angular/core';
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";
import { MenuController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(
    private menu:MenuController,
    private langService:LanguageService
  ) {
    // this.menu.close('custom');

   }

  ngOnInit() {
  }

  openMenu(){
    // this.menu.enable(true, 'custom');
    this.menu.open('custom')
  }

  ionViewWillLeave(){
    this.menu.close('custom');
  }
  languageVal = this.langService.initialLanguage;

  onItemChange(){
    this.langService.setLanguage(this.languageVal)
  }

}
