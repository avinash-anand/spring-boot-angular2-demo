import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { GreetingService } from './greeting/greeting.service'
import { GreetingComponent } from './greeting/greeting.component'
import { AppComponent }  from './app.component';

// const appRoutes: Routes = [
//   { path: 'login', component: LoginComponent }
// ]

@NgModule({
  imports:      [ BrowserModule , HttpModule ],
  declarations: [ AppComponent, GreetingComponent ],
  providers: [ GreetingService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }