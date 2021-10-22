import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cdism',
  templateUrl: './cdism.page.html',
  styleUrls: ['./cdism.page.scss'],
})
export class CdismPage implements OnInit {


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
