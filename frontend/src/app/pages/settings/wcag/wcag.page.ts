import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-wcag',
  templateUrl: './wcag.page.html',
  styleUrls: ['./wcag.page.scss'],
})
export class WcagPage implements OnInit {

  constructor(
    private menu:MenuController
  ) { }

  ngOnInit() {
  }

  openMenu(){
    alert('dds')
    // this.menu.enable(true, 'custom');
    this.menu.open('custom')
  }

  ionViewWillLeave(){
    this.menu.close('custom');
  }
}
