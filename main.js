(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/clients-list/clients-list.component */ "./src/app/components/clients-list/clients-list.component.ts");
/* harmony import */ var _components_clients_list_client_show_client_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/clients-list/client-show/client-show.component */ "./src/app/components/clients-list/client-show/client-show.component.ts");
/* harmony import */ var _components_clients_list_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/clients-list/client-form/client-form.component */ "./src/app/components/clients-list/client-form/client-form.component.ts");
/* harmony import */ var _components_phones_phones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/phones/phones.component */ "./src/app/components/phones/phones.component.ts");
/* harmony import */ var _components_phones_phones_form_phones_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/phones/phones-form/phones-form.component */ "./src/app/components/phones/phones-form/phones-form.component.ts");









var routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'clients', component: _components_clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientsListComponent"] },
    { path: 'clients/show/:id', component: _components_clients_list_client_show_client_show_component__WEBPACK_IMPORTED_MODULE_5__["ClientShowComponent"] },
    { path: 'clients/form', component: _components_clients_list_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_6__["ClientFormComponent"] },
    { path: 'clients/form/:id', component: _components_clients_list_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_6__["ClientFormComponent"] },
    { path: 'clients/show/:pesel', component: _components_clients_list_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_6__["ClientFormComponent"] },
    { path: 'phones', component: _components_phones_phones_component__WEBPACK_IMPORTED_MODULE_7__["PhonesComponent"] },
    { path: 'phones/form', component: _components_phones_phones_form_phones_form_component__WEBPACK_IMPORTED_MODULE_8__["PhonesFormComponent"] },
    { path: 'phones/form/:id', component: _components_phones_phones_form_phones_form_component__WEBPACK_IMPORTED_MODULE_8__["PhonesFormComponent"] },
    { path: 'clients/show/:idklienta', component: _components_phones_phones_form_phones_form_component__WEBPACK_IMPORTED_MODULE_8__["PhonesFormComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/clients-list/clients-list.component */ "./src/app/components/clients-list/clients-list.component.ts");
/* harmony import */ var _components_clients_list_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/clients-list/client-form/client-form.component */ "./src/app/components/clients-list/client-form/client-form.component.ts");
/* harmony import */ var _components_clients_list_client_show_client_show_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/clients-list/client-show/client-show.component */ "./src/app/components/clients-list/client-show/client-show.component.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_phones_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/phones.service */ "./src/app/services/phones.service.ts");
/* harmony import */ var _components_phones_phones_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/phones/phones.component */ "./src/app/components/phones/phones.component.ts");
/* harmony import */ var _components_phones_phones_show_phones_show_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/phones/phones-show/phones-show.component */ "./src/app/components/phones/phones-show/phones-show.component.ts");
/* harmony import */ var _components_phones_phones_form_phones_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/phones/phones-form/phones-form.component */ "./src/app/components/phones/phones-form/phones-form.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_7__["ClientsListComponent"],
                _components_clients_list_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_8__["ClientFormComponent"],
                _components_clients_list_client_show_client_show_component__WEBPACK_IMPORTED_MODULE_9__["ClientShowComponent"],
                _components_phones_phones_component__WEBPACK_IMPORTED_MODULE_12__["PhonesComponent"],
                _components_phones_phones_show_phones_show_component__WEBPACK_IMPORTED_MODULE_13__["PhonesShowComponent"],
                _components_phones_phones_form_phones_form_component__WEBPACK_IMPORTED_MODULE_14__["PhonesFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [
                _services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"],
                _services_phones_service__WEBPACK_IMPORTED_MODULE_11__["PhonesService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/clients-list/client-form/client-form.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clients-list/client-form/client-form.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy1saXN0L2NsaWVudC1mb3JtL2NsaWVudC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/clients-list/client-form/client-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/clients-list/client-form/client-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"save()\">\r\n  <label>Imię:</label>\r\n  <input type=\"text\" name=\"imie\" required [(ngModel)]=\"client.imie\" /><br />\r\n  <label>Nazwisko:</label>\r\n  <input type=\"text\" name=\"nazwisko\" required [(ngModel)]=\"client.nazwisko\" /><br />\r\n  <label>PESEL:</label>\r\n  <input type=\"text\" name=\"pesel\" required [(ngModel)]=\"client.pesel\" /><br />\r\n  <label>Adres zamieszkania:</label>\r\n  <input type=\"text\" name=\"adres_zam\" required [(ngModel)]=\"client.adres_zam\" /><br />\r\n  <label>Adres kontaktowy:</label>\r\n  <input type=\"text\" name=\"adres_kon\" required [(ngModel)]=\"client.adres_kon\" /><br />\r\n  <label>Telefon:</label>\r\n  <input type=\"text\" name=\"telefon\" required [(ngModel)]=\"client.telefon\" /><br />\r\n  <label>Adres E-Mail:</label>\r\n  <input type=\"text\" name=\"email\" required [(ngModel)]=\"client.email\" />\r\n  <br /><br />\r\n  <button>Zapisz!</button>\r\n</form>"

/***/ }),

/***/ "./src/app/components/clients-list/client-form/client-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/clients-list/client-form/client-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClientFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFormComponent", function() { return ClientFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Klient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Klient */ "./src/app/models/Klient.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ClientFormComponent = /** @class */ (function () {
    function ClientFormComponent(clientService, router, route) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.subscriptions = [];
        this.client = new _models_Klient__WEBPACK_IMPORTED_MODULE_2__["Klient"]();
    }
    ClientFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (data) {
            console.log(data);
            if (data.has('id')) {
                _this.client.id = parseInt(data.get('id'), 10);
                _this.getClient();
            }
        });
    };
    ClientFormComponent.prototype.getClient = function () {
        var _this = this;
        this.subscriptions.push(this.clientService.getClient(this.client.id).subscribe(function (data) {
            _this.client = data;
        }, function (error) {
            console.log(error);
        }));
    };
    ClientFormComponent.prototype.save = function () {
        var _this = this;
        console.log(this.client);
        this.subscriptions.push(this.clientService.postClient(this.client).subscribe(function (data) {
            console.log('Powodzenie: ', data);
            _this.router.navigate(['clients']);
        }, function (error) {
            console.log(error);
        }));
    };
    ClientFormComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (x) { return x.unsubscribe(); });
    };
    ClientFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-form',
            template: __webpack_require__(/*! ./client-form.component.html */ "./src/app/components/clients-list/client-form/client-form.component.html"),
            styles: [__webpack_require__(/*! ./client-form.component.css */ "./src/app/components/clients-list/client-form/client-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ClientFormComponent);
    return ClientFormComponent;
}());



/***/ }),

/***/ "./src/app/components/clients-list/client-show/client-show.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clients-list/client-show/client-show.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy1saXN0L2NsaWVudC1zaG93L2NsaWVudC1zaG93LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/clients-list/client-show/client-show.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/clients-list/client-show/client-show.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"searchClient()\">\r\n  <label>Podaj PESEL</label>\r\n  <input type=\"text\" name=\"pesel\" required [(ngModel)]=\"pesel\" /><br />\r\n  <button>Szukaj</button>\r\n</form>\r\n\r\n<br/><br/>\r\n\r\n<table border=\"1\">\r\n<th>\r\n    Id\r\n</th>\r\n<th>\r\n    Imię\r\n</th>\r\n<th>\r\n    Nazwisko\r\n</th>\r\n<th>\r\n    PESEL\r\n</th>\r\n<th>\r\n    Adres zameldowania\r\n</th>\r\n<th>\r\n    Adres korespondencyjny\r\n</th>\r\n<th>\r\n    Telefon kontaktowy\r\n</th>\r\n<th>\r\n    e-mail\r\n</th>\r\n<tr *ngFor=\"let client of clients\"> -->\r\n    <!--wykonuje się pętla dla listy lists (nazwa taka jak w KlienciResource) -->\r\n    <td>{{ client.id }}</td>\r\n    <td>{{ client.imie }}</td>\r\n    <td>{{ client.nazwisko }}</td>\r\n    <td>{{ client.pesel }}</td>\r\n    <td>{{ client.adres_zam }}</td>\r\n    <td>{{ client.adres_kon }}</td>\r\n    <td>{{ client.telefon }}</td>\r\n    <td>{{ client.email }}</td>\r\n    <td><button [routerLink]=\"['form', client.id]\"> Edytuj </button></td>\r\n    <td><button (click)=\"deleteClient(client.id)\"> Usuń </button></td>\r\n</tr>\r\n</table>"

/***/ }),

/***/ "./src/app/components/clients-list/client-show/client-show.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/clients-list/client-show/client-show.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClientShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientShowComponent", function() { return ClientShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientShowComponent = /** @class */ (function () {
    function ClientShowComponent() {
    }
    ClientShowComponent.prototype.ngOnInit = function () {
    };
    ClientShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-show',
            template: __webpack_require__(/*! ./client-show.component.html */ "./src/app/components/clients-list/client-show/client-show.component.html"),
            styles: [__webpack_require__(/*! ./client-show.component.css */ "./src/app/components/clients-list/client-show/client-show.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientShowComponent);
    return ClientShowComponent;
}());



/***/ }),

/***/ "./src/app/components/clients-list/clients-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/clients-list/clients-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy1saXN0L2NsaWVudHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/clients-list/clients-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/clients-list/clients-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"searchClient(pesel)\">\r\n    <label>Podaj PESEL</label>\r\n    <input type=\"text\" name=\"pesel\" required [(ngModel)]=\"pesel\" />\r\n    <button>Szukaj</button>\r\n  </form>\r\n  <br/>\r\n<button (click)=\"getAllClients()\">Pokaż wszystko</button>\r\n<button routerLink=\"form\">Dodaj</button>\r\n  <br/><br/>\r\n  <table border=\"1\">\r\n  <th>\r\n      Id\r\n  </th>\r\n  <th>\r\n      Imię\r\n  </th>\r\n  <th>\r\n      Nazwisko\r\n  </th>\r\n  <th>\r\n      PESEL\r\n  </th>\r\n  <th>\r\n      Adres zameldowania\r\n  </th>\r\n  <th>\r\n      Adres korespondencyjny\r\n  </th>\r\n  <th>\r\n      Telefon kontaktowy\r\n  </th>\r\n  <th>\r\n      e-mail\r\n  </th>\r\n  <tr *ngFor=\"let client of clients\">\r\n      <!--wykonuje się pętla dla listy lists (nazwa taka jak w KlienciResource)-->\r\n      <td>{{ client.id }}</td>\r\n      <td>{{ client.imie }}</td>\r\n      <td>{{ client.nazwisko }}</td>\r\n      <td>{{ client.pesel }}</td>\r\n      <td>{{ client.adres_zam }}</td>\r\n      <td>{{ client.adres_kon }}</td>\r\n      <td>{{ client.telefon }}</td>\r\n      <td>{{ client.email }}</td>\r\n      <td><button [routerLink]=\"['form', client.id]\"> Edytuj </button></td>\r\n      <td><button (click)=\"deleteClient(client.id)\"> Usuń </button></td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/clients-list/clients-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/clients-list/clients-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClientsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsListComponent", function() { return ClientsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ClientsListComponent = /** @class */ (function () {
    function ClientsListComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
        this.title = 'crm-front';
        this.clients = [];
        this.subscriptions = [];
    }
    ClientsListComponent.prototype.ngOnInit = function () {
        this.getAllClients();
    };
    ClientsListComponent.prototype.getAllClients = function () {
        var _this = this;
        this.subscriptions.push(this.clientService.getAllClients().subscribe(function (data) {
            _this.clients = data;
        }, function (error) {
            console.error(error);
        }));
    };
    ClientsListComponent.prototype.addClient = function () { };
    ClientsListComponent.prototype.deleteClient = function (id) {
        var _this = this;
        if (confirm("Czy chcesz usun\u0105\u0107 klienta o id=" + id + "?")) {
            this.subscriptions.push(this.clientService.deleteClient(id).subscribe(function (data) {
                console.log('Powodzenie: ', data);
                _this.getAllClients();
            }, function (error) {
                console.log(error);
            }));
        }
    };
    ClientsListComponent.prototype.searchClient = function (pesel) {
        var _this = this;
        this.subscriptions.push(this.clientService.searchClient(pesel).subscribe(function (data) {
            _this.clients = data;
        }, function (error) {
            console.error(error);
        }));
    };
    ClientsListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (x) { return x.unsubscribe(); });
    };
    ClientsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients-list',
            template: __webpack_require__(/*! ./clients-list.component.html */ "./src/app/components/clients-list/clients-list.component.html"),
            styles: [__webpack_require__(/*! ./clients-list.component.css */ "./src/app/components/clients-list/clients-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ClientsListComponent);
    return ClientsListComponent;
}());



/***/ }),

/***/ "./src/app/components/phones/phones-form/phones-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/phones/phones-form/phones-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVzL3Bob25lcy1mb3JtL3Bob25lcy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/phones/phones-form/phones-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/phones/phones-form/phones-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"save()\">\r\n    <label>Numer</label>\r\n    <input type=\"text\" name=\"imie\" required [(ngModel)]=\"phone.numer\" /><br />\r\n    <label>Postpaid</label>\r\n    <input type=\"text\" name=\"nazwisko\" required [(ngModel)]=\"phone.postpaid\" /><br />\r\n    <label>Stan konta</label>\r\n    <input type=\"text\" name=\"pesel\" required [(ngModel)]=\"phone.stan_konta\" /><br />\r\n    <label>Darmowe rozmowy</label>\r\n    <input type=\"text\" name=\"adres_zam\" required [(ngModel)]=\"phone.darmowe_rozmowy\" /><br />\r\n    <label>Darmowe smsy</label>\r\n    <input type=\"text\" name=\"adres_kon\" required [(ngModel)]=\"phone.darmowe_smsy\" /><br />\r\n    <label>Darmowy internet</label>\r\n    <input type=\"text\" name=\"telefon\" required [(ngModel)]=\"phone.darmowy_internet\" /><br />\r\n    <label>Id klienta</label>\r\n    <input type=\"text\" name=\"id_klienta\" required [(ngModel)]=\"phone.id_klienta\" /><br />\r\n    <br /><br />\r\n    <button>Zapisz!</button>\r\n  </form>"

/***/ }),

/***/ "./src/app/components/phones/phones-form/phones-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/phones/phones-form/phones-form.component.ts ***!
  \************************************************************************/
/*! exports provided: PhonesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesFormComponent", function() { return PhonesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Telefony__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Telefony */ "./src/app/models/Telefony.ts");
/* harmony import */ var _services_phones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/phones.service */ "./src/app/services/phones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PhonesFormComponent = /** @class */ (function () {
    function PhonesFormComponent(phonesService, router, route) {
        this.phonesService = phonesService;
        this.router = router;
        this.route = route;
        this.subscriptions = [];
        this.phone = new _models_Telefony__WEBPACK_IMPORTED_MODULE_2__["Telefony"]();
    }
    PhonesFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (data) {
            console.log(data);
            if (data.has('id')) {
                _this.phone.id = parseInt(data.get('id'), 10);
                _this.getPhones();
            }
        });
    };
    PhonesFormComponent.prototype.getPhones = function () {
        var _this = this;
        this.subscriptions.push(this.phonesService.getPhone(this.phone.id).subscribe(function (data) {
            _this.phone = data;
        }, function (error) {
            console.log(error);
        }));
    };
    PhonesFormComponent.prototype.save = function () {
        var _this = this;
        console.log(this.phone);
        this.subscriptions.push(this.phonesService.postPhone(this.phone).subscribe(function (data) {
            console.log('Powodzenie: ', data);
            _this.router.navigate(['phones']);
        }, function (error) {
            console.log(error);
        }));
    };
    PhonesFormComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (x) { return x.unsubscribe(); });
    };
    PhonesFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-phones-form',
            template: __webpack_require__(/*! ./phones-form.component.html */ "./src/app/components/phones/phones-form/phones-form.component.html"),
            styles: [__webpack_require__(/*! ./phones-form.component.css */ "./src/app/components/phones/phones-form/phones-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_phones_service__WEBPACK_IMPORTED_MODULE_3__["PhonesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PhonesFormComponent);
    return PhonesFormComponent;
}());



/***/ }),

/***/ "./src/app/components/phones/phones-show/phones-show.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/phones/phones-show/phones-show.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVzL3Bob25lcy1zaG93L3Bob25lcy1zaG93LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/phones/phones-show/phones-show.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/phones/phones-show/phones-show.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"searchPhones(id)\">\r\n    <label>Podaj ID klienta</label>\r\n    <input type=\"text\" name=\"id\" required [(ngModel)]=\"id\" />\r\n    <button>Szukaj</button>\r\n  </form>\r\n  \r\n  <br/><br/>\r\n  <table border=\"1\">\r\n      <th>\r\n          Id\r\n      </th>\r\n  <th>\r\n      Numer\r\n  </th>\r\n  <th>\r\n      Postpaid\r\n  </th>\r\n  <th>\r\n      Stan Konta\r\n  </th>\r\n  <th>\r\n     Darmowe rozmowy\r\n  </th>\r\n  <th>\r\n      Darmowe smsy\r\n  </th>\r\n  <th>\r\n      Darmowy internet\r\n  </th>\r\n  <th>\r\n      Id Klienta\r\n  </th>\r\n  \r\n  <tr *ngFor=\"let phone of phones\">\r\n      <td>{{ phone.id }}</td>\r\n      <td>{{ phone.numer }}</td>\r\n      <td>{{ phone.postpaid }}</td>\r\n      <td>{{ phone.stan_konta }}</td>\r\n      <td>{{ phone.darmowe_rozmowy }}</td>\r\n      <td>{{ phone.darmowe_smsy }}</td>\r\n      <td>{{ phone.darmowy_internet }}</td>\r\n      <td>{{ phone.idklienta }}</td>\r\n      <td><button [routerLink]=\"['form', phone.numer]\"> Edytuj </button></td>\r\n      <td><button (click)=\"deletePhone(phone.numer)\"> Usuń </button></td>\r\n  </tr>\r\n  </table>"

/***/ }),

/***/ "./src/app/components/phones/phones-show/phones-show.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/phones/phones-show/phones-show.component.ts ***!
  \************************************************************************/
/*! exports provided: PhonesShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesShowComponent", function() { return PhonesShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhonesShowComponent = /** @class */ (function () {
    function PhonesShowComponent() {
    }
    PhonesShowComponent.prototype.ngOnInit = function () {
    };
    PhonesShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-phones-show',
            template: __webpack_require__(/*! ./phones-show.component.html */ "./src/app/components/phones/phones-show/phones-show.component.html"),
            styles: [__webpack_require__(/*! ./phones-show.component.css */ "./src/app/components/phones/phones-show/phones-show.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PhonesShowComponent);
    return PhonesShowComponent;
}());



/***/ }),

/***/ "./src/app/components/phones/phones.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/phones/phones.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmVzL3Bob25lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/phones/phones.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/phones/phones.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"searchPhones(id)\">\r\n  <label>Podaj ID klienta</label>\r\n  <input type=\"text\" name=\"id\" required [(ngModel)]=\"id\" />\r\n  <button>Szukaj</button>\r\n</form>\r\n<button (click)=\"getAllPhones()\">Pokaż wszystko</button>\r\n<button routerLink=\"form\">Dodaj</button>\r\n<br/>\r\n<br/><br/>\r\n<table border=\"1\">\r\n    <th>\r\n        Id\r\n    </th>\r\n<th>\r\n    Numer\r\n</th>\r\n<th>\r\n    Postpaid\r\n</th>\r\n<th>\r\n    Stan Konta\r\n</th>\r\n<th>\r\n   Darmowe rozmowy\r\n</th>\r\n<th>\r\n    Darmowe smsy\r\n</th>\r\n<th>\r\n    Darmowy internet\r\n</th>\r\n<th>\r\n    Id Klienta\r\n</th>\r\n\r\n<tr *ngFor=\"let phone of phones\">\r\n    <td>{{ phone.id }}</td>\r\n    <td>{{ phone.numer }}</td>\r\n    <td>{{ phone.postpaid }}</td>\r\n    <td>{{ phone.stan_konta }}</td>\r\n    <td>{{ phone.darmowe_rozmowy }}</td>\r\n    <td>{{ phone.darmowe_smsy }}</td>\r\n    <td>{{ phone.darmowy_internet }}</td>\r\n    <td>{{ phone.id_klienta }}</td>\r\n    <td><button [routerLink]=\"['form', phone.id]\"> Edytuj </button></td>\r\n    <td><button (click)=\"deletePhones(phone.id)\"> Usuń </button></td>\r\n</tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/phones/phones.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/phones/phones.component.ts ***!
  \*******************************************************/
/*! exports provided: PhonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesComponent", function() { return PhonesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_phones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/phones.service */ "./src/app/services/phones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PhonesComponent = /** @class */ (function () {
    function PhonesComponent(phonesService, router) {
        this.phonesService = phonesService;
        this.router = router;
        this.title = 'crm-front';
        this.phones = [];
        this.subscriptions = [];
    }
    PhonesComponent.prototype.ngOnInit = function () {
        this.getAllPhones();
    };
    PhonesComponent.prototype.getAllPhones = function () {
        var _this = this;
        this.subscriptions.push(this.phonesService.getAllPhones().subscribe(function (data) {
            _this.phones = data;
        }, function (error) {
            console.error(error);
        }));
    };
    PhonesComponent.prototype.addPhones = function () { };
    PhonesComponent.prototype.deletePhones = function (id) {
        var _this = this;
        if (confirm("Czy chcesz usun\u0105\u0107 numer?")) {
            this.subscriptions.push(this.phonesService.deletePhone(id).subscribe(function (data) {
                console.log('Powodzenie: ', data);
                _this.getAllPhones();
            }, function (error) {
                console.log(error);
            }));
        }
    };
    PhonesComponent.prototype.searchPhones = function (idklienta) {
        var _this = this;
        this.subscriptions.push(this.phonesService.searchByClientId(idklienta).subscribe(function (data) {
            _this.phones = data;
        }, function (error) {
            console.error(error);
        }));
    };
    PhonesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (x) { return x.unsubscribe(); });
    };
    PhonesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-phones',
            template: __webpack_require__(/*! ./phones.component.html */ "./src/app/components/phones/phones.component.html"),
            styles: [__webpack_require__(/*! ./phones.component.css */ "./src/app/components/phones/phones.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_phones_service__WEBPACK_IMPORTED_MODULE_2__["PhonesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PhonesComponent);
    return PhonesComponent;
}());



/***/ }),

/***/ "./src/app/configs/globalVariables.ts":
/*!********************************************!*\
  !*** ./src/app/configs/globalVariables.ts ***!
  \********************************************/
/*! exports provided: serverURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverURL", function() { return serverURL; });
//export const serverURL = 'http://localhost:8080/';
var serverURL = 'http://ec2-18-222-131-19.us-east-2.compute.amazonaws.com:8080';


/***/ }),

/***/ "./src/app/models/Klient.ts":
/*!**********************************!*\
  !*** ./src/app/models/Klient.ts ***!
  \**********************************/
/*! exports provided: Klient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Klient", function() { return Klient; });
var Klient = /** @class */ (function () {
    function Klient() {
    }
    return Klient;
}());



/***/ }),

/***/ "./src/app/models/Telefony.ts":
/*!************************************!*\
  !*** ./src/app/models/Telefony.ts ***!
  \************************************/
/*! exports provided: Telefony */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Telefony", function() { return Telefony; });
var Telefony = /** @class */ (function () {
    function Telefony() {
    }
    return Telefony;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_globalVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/globalVariables */ "./src/app/configs/globalVariables.ts");




var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.server = _configs_globalVariables__WEBPACK_IMPORTED_MODULE_3__["serverURL"];
        this.allClientsURL = this.server + 'klienci/all';
        this.postClientURL = this.server + 'klienci/add';
        this.getClientURL = this.server + 'klienci/searchbyid/{id}';
        this.deleteClientURL = this.server + 'klienci/delete/{id}';
        this.searchClientURL = this.server + 'klienci/searchbypesel/{pesel}';
    }
    ClientService.prototype.getAllClients = function () {
        return this.http.get(this.allClientsURL);
    };
    ClientService.prototype.postClient = function (client) {
        return this.http.post(this.postClientURL, client);
    };
    ClientService.prototype.getClient = function (id) {
        var url = this.getClientURL.replace('{id}', id.toString());
        return this.http.get(url);
    };
    ClientService.prototype.deleteClient = function (id) {
        var url = this.deleteClientURL.replace('{id}', id.toString());
        return this.http.delete(url);
    };
    ClientService.prototype.searchClient = function (pesel) {
        var url = this.searchClientURL.replace('{pesel}', pesel.toString());
        return this.http.get(url);
    };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/phones.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/phones.service.ts ***!
  \********************************************/
/*! exports provided: PhonesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesService", function() { return PhonesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_globalVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/globalVariables */ "./src/app/configs/globalVariables.ts");




var PhonesService = /** @class */ (function () {
    function PhonesService(http) {
        this.http = http;
        this.server = _configs_globalVariables__WEBPACK_IMPORTED_MODULE_3__["serverURL"];
        this.allPhoneURL = this.server + 'telefon/all';
        this.postPhoneURL = this.server + 'telefon/add';
        this.getIdURL = this.server + 'telefon/searchbyid/{id}';
        this.deletePhoneURL = this.server + 'telefon/delete/{id}';
        this.searchByClientIdURL = this.server + 'telefon/searchbyidklienta/{idklienta}';
    }
    PhonesService.prototype.getAllPhones = function () {
        return this.http.get(this.allPhoneURL);
    };
    PhonesService.prototype.postPhone = function (phone) {
        return this.http.post(this.postPhoneURL, phone);
    };
    PhonesService.prototype.getPhone = function (id) {
        var url = this.getIdURL.replace('{id}', id.toString());
        return this.http.get(url);
    };
    PhonesService.prototype.deletePhone = function (id) {
        var url = this.deletePhoneURL.replace('{id}', id.toString());
        return this.http.delete(url);
    };
    PhonesService.prototype.searchByClientId = function (idklienta) {
        var url = this.searchByClientIdURL.replace('{idklienta}', idklienta.toString());
        return this.http.get(url);
    };
    PhonesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PhonesService);
    return PhonesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Paulina\Desktop\angular\crm-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map