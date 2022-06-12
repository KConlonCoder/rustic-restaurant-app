import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
  }

  // @HostListener('document:click', ['$event']) documentClickEvent($event: MouseEvent) {
  //   console.log('Through HostListener - Click Event Details: ', $event)

  //   ///////////////////////////////////////
  //   // MOBILE NAVIGATION
  //   ///////////////////////////////////////

  //   /* Set the width of the side navigation to 250px */
  //   document.getElementById("menu-icon").addEventListener('click', openNav)

  //   function openNav() {
  //       document.getElementById("mySidenav").style.width = "100%";
  //     }
      
  //     /* Set the width of the side navigation to 0 */
  //     function closeNav() {
  //       document.getElementById("mySidenav").style.width = "0";
  //     }

  // }



  title = 'rustic-app';
}
