import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-wnoz',
  templateUrl: './wnoz.page.html',
  styleUrls: ['./wnoz.page.scss'],
})
export class WnozPage implements OnInit {

  constructor(
    private menu:MenuController
  ) { }

  ngOnInit() {
  }

  openMenu(){
    this.menu.enable(true, 'custom');
    this.menu.open('custom')
  }

}
