import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LocationComponent } from './components/location/location.component';
import { MenuComponent } from './components/menu/menu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [ 
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'location', component: LocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload' // Added to handle page refreshes
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [WelcomeComponent, AboutComponent, MenuComponent, LocationComponent, NavComponent]