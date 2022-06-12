import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  openElement: HTMLElement;

  constructor() {
     this.openElement = document.getElementById("mySidenav")!;

    }

    ngOnInit(): void {
    }

    openNav() {
      this.openElement.style.width = "100%";
   }
   
}
