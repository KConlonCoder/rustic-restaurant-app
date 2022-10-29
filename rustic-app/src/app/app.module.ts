import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavComponent } from './components/nav/nav.component';
// import { AboutComponent } from './components/about/about.component';
// import { MenuComponent } from './components/menu/menu.component';
// import { LocationComponent } from './components/location/location.component';
// import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    // NavComponent,
    // AboutComponent,
    // MenuComponent,
    // LocationComponent,
    // WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
