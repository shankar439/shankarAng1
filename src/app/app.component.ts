import { Component } from '@angular/core';
import { apiService } from './service/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shankarAng';
  helloData:any=null;
  welcomeData:any=null;
  homeData:any=null;

  constructor( private apiService:apiService){}

  getHello(){
    let data=null;
    this.apiService.getHello().subscribe((res)=>{
      // this.helloData=res;
      this.helloData=res.data;
      console.log(this.helloData,res)
      data=res;
    })
    if(data == null){
      this.helloData="Api Not Working"
    }
  }
  getWelcome(){
    let data=null;
    this.apiService.getData().subscribe((res)=>{
      // this.welcomeData=res;
      this.welcomeData=res.data;
      console.log(this.helloData,res)
      data=res;

    })
    if(data == null){
      this.welcomeData="Api Not Working"
    }
  }
  getHome(){
    let data=null;
    this.apiService.seprateURL().subscribe((res)=>{
      // this.homeData=res;
      this.helloData=res.data;
      console.log(this.helloData,res)
      data=res;

    })
    if(data == null){
      this.homeData="Api Not Working"
    }
  }
}
