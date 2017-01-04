import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { GreetingComponent } from './components/greeting.component'
import { GreetingService } from './service/greeting.service'

@NgModule({
  imports:      [ BrowserModule , HttpModule ],
  declarations: [ AppComponent, GreetingComponent ],
  providers: [ GreetingService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }