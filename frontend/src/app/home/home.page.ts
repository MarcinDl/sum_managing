import { Component } from '@angular/core';
import { ApiDataService } from '../services/api-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  wypisanieDanych:any;
  constructor(
    private apiData:ApiDataService
  ) {}

  ngOnInit(){
    this.apiData.getApiData().subscribe( res => {

      for (let re of Object.values(res)){
        // console.log(re)
        // for (let r of re){
        //   console.log(r)
        // }
        this.wypisanieDanych = re;
      }
    })
  }
}
