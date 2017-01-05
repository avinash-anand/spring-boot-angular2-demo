"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var greeting_1 = require("../models/greeting");
var GreetingService = (function () {
    function GreetingService(http) {
        this.http = http;
        this.greetingUrl = 'api/greeting'; // URL to web api
    }
    GreetingService.prototype.getGreeting = function () {
        return this.http.get(this.greetingUrl)
            .toPromise()
            .then(function (response) {
            console.log("hello - " + JSON.stringify(response.json));
            var greeting = new greeting_1.Greeting(response.json().data.id, response.json().data.content);
            return greeting;
        })
            .catch(this.handleError);
    };
    GreetingService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return GreetingService;
}());
GreetingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GreetingService);
exports.GreetingService = GreetingService;
//# sourceMappingURL=greeting.service.js.map