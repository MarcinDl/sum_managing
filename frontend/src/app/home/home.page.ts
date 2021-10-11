import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lecturesSummary = [];
  lecturesSummary$ :Observable<any[]>;
  constructor(
    private http:HttpClient
  ) {}

  ngOnInit(){
    this.lecturesSummary$ = this.http.get<any>("http://localhost:3000/api")
    console.log("this.lecuresSummary$",this.lecturesSummary$)
  }

}
