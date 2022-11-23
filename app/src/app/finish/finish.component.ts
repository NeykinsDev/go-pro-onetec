import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.attente3s();
    }, 3000);
  }

  retourDebut(){
    this.router.navigate(['start'])
  }

  attente3s(){
    this.router.navigate(['start'])
  }


}
