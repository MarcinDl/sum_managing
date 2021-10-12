import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map,  } from 'rxjs/operators';


import { CupertinoPane, CupertinoSettings } from "cupertino-pane";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lecturesSummary = [];
  lecturesSummary$ :Observable<any[]>;
  actualTime: any;
  constructor(
    private http:HttpClient
  ) {
    let today = new Date();

    let mm = String(today.getHours()).padStart(2, '0'); //January is 0!
    let ss = String(today.getMinutes()).padStart(2, '0'); //January is 0!
    console.log(mm+":"+ss)
    this.actualTime = mm+":"+ss
  }


  ngOnInit(){
    this.lecturesSummary$ = this.http.get<any>("http://localhost:3000/api").pipe(map( result => result.sort(this.sortByStartime)))
    console.log("this.lecuresSummary$",this.lecturesSummary$)

    this.openPane()
  }

  sortByStartime = (a, b) => {
    const nameA = a.startTime;
    const nameB = b.startTime;
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  }

  openPane() {
    const myPane = new CupertinoPane(
      ".cupertino-pane", // Pane container selector
      {
        parentElement: "ion-content", // Parent container
        breaks: {
          middle: { enabled: true, height: 100 },
          bottom: { enabled: true, height: 20 }
        },
        bottomClose: true
      }
    );
    myPane.present({ animate: true });
  }
}
