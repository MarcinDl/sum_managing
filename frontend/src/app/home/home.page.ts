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

  lecturesSummary$ :Observable<any[]>;
  actualTime: any;
  room106=false;
  room107=false
  room108=false;
  room111=false;
  room112=false;
  room113=false;
  room114=false;
  room117=false;
  room201=false;
  room204=false;
  room206=false;
  room208=false;
  room210=false;
  room211=false;
  room213=false;
  room219=false;
  room220=false;
  room221=false;
  room222=false;
  room223=false;
  roomsCDiSM = [this.room106,this.room107,this.room108,this.room111,this.room112,this.room113,this.room114,this.room117]
  roomsNumberCDiSM = [106,107,108,111,112,113,117];

  constructor(
    private http:HttpClient
  ) {
    let today = new Date();

    let hh = String(today.getHours()).padStart(2, '0');
    let mm = String(today.getMinutes()).padStart(2, '0');
    this.actualTime = hh+":"+mm;
  }
  ngOnInit(){
    this.lecturesSummary$ = this.http.get<any>("http://localhost:3000/api").pipe(map( result => result.sort(this.sortByStartime)))
    this.lecturesSummary$.subscribe( res => {
      for (let lectur of res){
        console.log(lectur)
        if (this.actualTime > lectur.startTime && this.actualTime < lectur.endTime) {

          console.log("lectur.startTime", lectur.startTime,"lectur.endTime", lectur.endTime, "lectur.room", lectur.room)

          if (lectur.room == 106){
            this.room106 = true;
          }
          if (lectur.room == 107){
            this.room107 = true;
          }
          if (lectur.room == 108){
            this.room108 = true;
          }
          if (lectur.room == 111){
            this.room111 = true;
          }
          if (lectur.room == 113){
            this.room113 = true;
          }
          if (lectur.room == 114){
            this.room114 = true;
          }
          if (lectur.room == 117){
            this.room117 = true;
          }
          if (lectur.room == 201){
            this.room201 = true;
          }
          if (lectur.room == 204){
            this.room204 = true;
          }
          if (lectur.room == 206){
            this.room206 = true;
          }
          if (lectur.room == 208){
            this.room208 = true;
          }
          if (lectur.room == 210){
            this.room210 = true;
          }
          if (lectur.room == 211){
            this.room211= true;
          }
          if (lectur.room == 213){
            this.room213 = true;
          }
          if (lectur.room == 219){
            this.room219 = true;
          }
          if (lectur.room == 220){
            this.room220 = true;
          }
          if (lectur.room == 221){
            this.room221 = true;
          }
          if (lectur.room == 222){
            this.room221 = true;
          }
          if (lectur.room == 223){
            this.room223 = true;
          }


        }

      }
    });
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
