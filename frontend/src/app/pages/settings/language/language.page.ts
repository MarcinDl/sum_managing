import { Component, OnInit } from '@angular/core';
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(
    private menu:MenuController
  ) {
    // this.menu.close('custom');

   }

  ngOnInit() {
  }

  openMenu(){
    alert("ddd")
    // this.menu.enable(true, 'custom');
    this.menu.open('custom')
  }

  ionViewWillLeave(){
    this.menu.close('custom');
  }

}
