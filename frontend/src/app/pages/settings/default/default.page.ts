import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-default',
  templateUrl: './default.page.html',
  styleUrls: ['./default.page.scss'],
})
export class DefaultPage implements OnInit {

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
