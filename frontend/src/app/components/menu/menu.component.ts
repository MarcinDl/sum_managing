import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  goToCDiSM(){
    this.router.navigate(['cdism'])
  }
  goToWNoZ(){
    this.router.navigate(['wnoz'])
  }
  goToLanguage(){
    this.router.navigate(['language'])
  }
  goToWCAG(){
    this.router.navigate(['wcag'])
  }
  goToDefault(){
    this.router.navigate(['default'])
  }
}
