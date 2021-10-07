import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiDataService } from '../services/api-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lecturesSummary = [];
  lecturesSummary$ :Observable<any[]>;
  constructor(
    private apiData:ApiDataService,
    private http:HttpClient
  ) {}

  ngOnInit(){
    this.lecturesSummary$ = this.http.get<any>("http://localhost:3000/api")
    console.log("this.lecuresSummary$",this.lecturesSummary$)
  }


  clickShow(){
    this.apiData.getApiData().subscribe( res => {
      console.log(res)
      for (let re in res){
        // console.log(res[re].start)
        if (re){
          this.lecturesSummary.push(res[re])
        }
      }
      this.lecturesSummary = [res];
    })
  }
}
