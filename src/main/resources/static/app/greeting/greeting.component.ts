import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Greeting } from './greeting';
import { GreetingService } from './greeting.service';

@Component({
  moduleId: module.id,
  selector: 'rest-data',
  templateUrl: './rest-data.html',
  providers: [GreetingService]
})

export class GreetingComponent implements OnInit {
  greeting: Greeting;

  constructor(private service: GreetingService) { }

  displayGreeting() {
    this.service.getGreeting().then(data => this.greeting = data);
  }

  ngOnInit(): void {
    this.displayGreeting();
  }

}