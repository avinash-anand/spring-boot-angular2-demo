import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Greeting } from '../models/greeting';
import { GreetingService } from '../service/greeting.service';

@Component({
  moduleId: module.id,
  selector: 'rest-data',
  templateUrl: '../view/rest-data.html',
  providers: [GreetingService]
})

export class GreetingComponent implements OnInit {
  greeting: Greeting;

  constructor(private service: GreetingService) { }

  displayGreeting() {
    this.service.getGreeting().then(data => {
    this.greeting = data;
  });
  }

  ngOnInit(): void {
    this.displayGreeting();
  }

}