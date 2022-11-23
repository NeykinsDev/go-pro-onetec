import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.services';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @ViewChild('video') videoElement!: ElementRef;

  countdown:number=5;

  interval:any;
  loader=true;
  flag=0;

  title:string="";
  waiting:string="";
  retry:string="";
  shootStr:string="";

  constructor(private renderer :Renderer2, private httpClient: HttpClient,private router:Router, public dataService:DataService) {
    this.flag=0;
    this.httpClient
  }


  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(){
    this.interval = setInterval(()=>{
      if(this.countdown > 0){
        this.countdown --;
      }
    }, 1000);
    this.priseDeVideo();
  }

  goValidation(){
    this.router.navigate(['validation']);
  }


  // handleError(error:any) {
  //   console.log('Error: ', error);
  // }

  priseDeVideo(){
    this.httpClient
    .get(environment.apiUrl + 'script.php')
    .subscribe(
        (data)=>{
            this.dataService.picture = data;
            console.log(data);
        },

    );
  }

  ngOnDestroy(): void{
    clearInterval(this.interval);
  }
}
