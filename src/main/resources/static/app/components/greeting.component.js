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
var greeting_service_1 = require("../service/greeting.service");
var GreetingComponent = (function () {
    function GreetingComponent(service) {
        this.service = service;
    }
    GreetingComponent.prototype.displayGreeting = function () {
        var _this = this;
        this.service.getGreeting().then(function (data) { return _this.greeting = data; });
    };
    GreetingComponent.prototype.ngOnInit = function () {
        this.displayGreeting();
    };
    return GreetingComponent;
}());
GreetingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rest-data',
        templateUrl: '../view/rest-data.html',
        providers: [greeting_service_1.GreetingService]
    }),
    __metadata("design:paramtypes", [greeting_service_1.GreetingService])
], GreetingComponent);
exports.GreetingComponent = GreetingComponent;
//# sourceMappingURL=greeting.component.js.map