"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HubComponent = void 0;
var core_1 = require("@angular/core");
var HubComponent = /** @class */ (function () {
    function HubComponent(even, router, serve) {
        this.even = even;
        this.router = router;
        this.serve = serve;
        this.hubarray = [];
        this.hubarraydata = [];
        this.valuestring = [];
    }
    HubComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.even.gethub().subscribe(function (res) {
            // console.log(res),
            _this.hubarray = res;
        }, function (err) { return console.log(err); });
        // this.serve.eventname.subscribe(
        //   res=>
        //   {
        //     this.hubarraydata=res;
        //   }
        // )
    };
    HubComponent.prototype.orderevent = function () {
        this.router.navigate(['/login']);
    };
    HubComponent.prototype.callbookticket = function (value) {
        // console.log(value);
        this.valuestring = value;
        this.serve.eventname.next(value);
    };
    HubComponent = __decorate([
        core_1.Component({
            selector: 'app-hub',
            templateUrl: './hub.component.html',
            styleUrls: ['./hub.component.css']
        })
    ], HubComponent);
    return HubComponent;
}());
exports.HubComponent = HubComponent;
