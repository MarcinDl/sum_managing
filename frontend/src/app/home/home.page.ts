import { Component } from '@angular/core';
import { ApiDataService } from '../services/api-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lecturesSummary:any = [];
  constructor(
    private apiData:ApiDataService
  ) {}

  ngOnInit(){
    this.apiData.getApiData().subscribe( res => {
      console.log(res)

      for (let re in res){
        console.log(res[re].start)
        this.lecturesSummary.push(res[re].start)
      }
      // this.lecturesSummary = [res];

    })
  }
}
