import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  maPhoto:any;
  constructor(private httpClient:HttpClient, private router:Router, public dataService:DataService) {
    this.httpClient
    .get<any>(environment.apiUrl+this.dataService.picture)
    .subscribe(
      (data)=>{this.dataService = data
        console.log(data);
      }

    );
  }

  ngOnInit(): void {
    this.maPhoto = environment.apiUrl+this.dataService.picture;
  }

  goFinish(){
    this.router.navigate(['finish']);
  }
  retry(){
    this.router.navigate(['start']);
  }
}
