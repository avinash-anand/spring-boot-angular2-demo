import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Greeting } from '../models/greeting';

@Injectable()
export class GreetingService {

    private greetingUrl = 'api/greeting';  // URL to web api

    constructor(private http: Http) { }

    getGreeting(): Promise<Greeting> {
        return this.http.get(this.greetingUrl)
            .toPromise()
            .then(response => {
                console.log("hello - " + JSON.stringify(response.json));
                let greeting: Greeting = new Greeting(response.json().data.id, response.json().data.content);
                return greeting;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}