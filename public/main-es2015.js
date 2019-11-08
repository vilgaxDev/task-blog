(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./posts/posts.module": "./src/app/posts/posts.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-dashboard/post-dashboard.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-dashboard/post-dashboard.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <mat-accordion>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Create a Post\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div>\r\n        <input type=\"file\" name=\"file\" id=\"file\" (change)=\"uploadImage($event)\">\r\n        <div [hidden] = \"!uploadPercent\">\r\n          <mat-progress-bar mode=\"determinate\" value=\"{{uploadPercent | async}}\"></mat-progress-bar>\r\n        </div> \r\n        <div [hidden] = \"!image\">\r\n          <img [src]=\"image || '//:0'\">\r\n        </div>\r\n      </div>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Post Title\" [(ngModel)]=\"title\">\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Add content\" [(ngModel)]=\"content\" rows=\"10\"></textarea>\r\n      </mat-form-field>\r\n      <br>\r\n      <button mat-raised-button color=\"accent\" (click)=\"createPost()\"\r\n        [disabled]=\"!title || !content || !image\">{{buttonText}}</button>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-detail/post-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-detail/post-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"post\">\r\n  <div [hidden]=\"!editing\">\r\n    <mat-card>\r\n      <h2>Update Post</h2>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Post Title\" [(ngModel)]=\"post.title\">\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Add content\" [(ngModel)]=\"post.content\" rows=\"10\"></textarea>\r\n      </mat-form-field>\r\n      <br>\r\n      <button mat-raised-button color=\"accent\" (click)=\"updatePost()\">Save</button>\r\n      <button mat-button (click)=\"editing=false\">Cancel</button>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div [hidden]=\"editing\">\r\n    <mat-card>\r\n      <img src=\"{{post.image}}\" alt=\"{{post.title}}\">\r\n      <p>Posted by: {{post.author}} on {{post.published.toDate() | date: 'fullDate'}}</p>\r\n      <mat-card-content>\r\n        <h2>{{post.title}}</h2>\r\n        <p> {{post.content}}</p>\r\n      </mat-card-content>\r\n      <mat-card-actions align=\"end\" *ngIf=\"auth.currentUserId === post.authorId\">\r\n        <button mat-icon-button (click)=\"editing=true\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"delete()\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-list/post-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-list/post-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div *ngFor=\" let post of posts | async\">\r\n    <h2 routerLink=\"{{post.id}}\">{{post.title}}</h2>\r\n    <h4>{{post.content}}</h4>\r\n</div> -->\r\n\r\n<section>\r\n    <mat-card *ngFor=\" let post of posts | async\">\r\n        <mat-card-content routerLink=\"{{post.id}}\">\r\n            <img src=\"{{post.image}}\" alt=\"{{post.title}}\">\r\n            <h2>{{post.title}}</h2>\r\n            <p><small>By: {{post.author}} <br>~{{post.published.toDate() | date: 'fullDate'}}</small></p>\r\n        </mat-card-content>\r\n        <mat-card-actions align=\"end\" *ngIf=\"auth.currentUserId === post.authorId\">\r\n            <button mat-icon-button (click)=\"delete(post.id)\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span routerLink=\"/blog\">Kenb task</span>\r\n    <span class=\"spacer\"></span>\r\n    <div *ngIf=\"auth.afAuth.authState | async as user; else showLogin\">\r\n            <span>Hello {{user.displayName}}</span>\r\n            <button mat-raised-button color=\"accent\" \r\n            routerLink=\"/dashboard\">New Post</button>\r\n            <button mat-button (click)=\"auth.logout()\">Logout</button>\r\n    </div>\r\n    <ng-template #showLogin>\r\n      <button mat-button (click)=\"auth.login()\">Google Login</button>\r\n    </ng-template>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full' },
    { path: '', loadChildren: './posts/posts.module#PostsModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ng-blog';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _posts_posts_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./posts/posts.module */ "./src/app/posts/posts.module.ts");




// FireBase Imports










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _posts_posts_module__WEBPACK_IMPORTED_MODULE_13__["PostsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        this.authState = null;
        this.afAuth.authState.subscribe(data => this.authState = data);
    }
    get authenticated() {
        return this.authState !== null;
    }
    get currentUserId() {
        return this.authenticated ? this.authState.uid : null;
    }
    login() {
        console.log("called Login..");
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider()).then(res => console.log(res)).catch(err => {
            console.log("Error Occured");
            console.log(err);
        });
    }
    logout() {
        console.log("called Logout");
        this.afAuth.auth.signOut();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
], AuthService);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");




let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");









let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/posts/post-dashboard/post-dashboard.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/posts/post-dashboard/post-dashboard.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  max-width: 700px;\n  margin: 2em auto;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nimg {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1kYXNoYm9hcmQvRDpcXHByb2plY3RzXFxzaG9wIHNva29cXEFuZ3VsYXItQmxvZy1BcHAvc3JjXFxhcHBcXHBvc3RzXFxwb3N0LWRhc2hib2FyZFxccG9zdC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3RzL3Bvc3QtZGFzaGJvYXJkL3Bvc3QtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1kYXNoYm9hcmQvcG9zdC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIG1hcmdpbjogMmVtIGF1dG87XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsInNlY3Rpb24ge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDJlbSBhdXRvO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/posts/post-dashboard/post-dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/posts/post-dashboard/post-dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: PostDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDashboardComponent", function() { return PostDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");






let PostDashboardComponent = class PostDashboardComponent {
    constructor(auth, postService, storage) {
        this.auth = auth;
        this.postService = postService;
        this.storage = storage;
        this.image = null;
        this.buttonText = 'Create Post';
    }
    ngOnInit() {
    }
    createPost() {
        const data = {
            title: this.title,
            content: this.content,
            image: this.image,
            published: new Date(),
            author: this.auth.authState.displayName || this.auth.authState.email,
            authorId: this.auth.currentUserId
        };
        this.postService.create(data);
        this.title = '';
        this.content = '';
        this.image = '';
        // TODO: Display a SnackBar
        this.buttonText = 'Post Created';
        setTimeout(() => (this.buttonText = "Create Post"), 3000);
    }
    uploadImage(event) {
        const file = event.target.files[0];
        const path = `posts/${file.name}`;
        if (file.type.split('/')[0] !== 'image') {
            return alert('Only Image Files');
        }
        else {
            const task = this.storage.upload(path, file);
            const ref = this.storage.ref(path);
            this.uploadPercent = task.percentageChanges();
            console.log('Image uploaded!');
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
                this.downloadURL = ref.getDownloadURL();
                this.downloadURL.subscribe(url => (this.image = url));
            }))
                .subscribe();
        }
    }
};
PostDashboardComponent.ctorParameters = () => [
    { type: src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }
];
PostDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-dashboard',
        template: __webpack_require__(/*! raw-loader!./post-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-dashboard/post-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./post-dashboard.component.scss */ "./src/app/posts/post-dashboard/post-dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
], PostDashboardComponent);



/***/ }),

/***/ "./src/app/posts/post-detail/post-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/posts/post-detail/post-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin: 10px auto;\n  max-width: 700px;\n}\n\nimg {\n  width: 100%;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1kZXRhaWwvRDpcXHByb2plY3RzXFxzaG9wIHNva29cXEFuZ3VsYXItQmxvZy1BcHAvc3JjXFxhcHBcXHBvc3RzXFxwb3N0LWRldGFpbFxccG9zdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3RzL3Bvc3QtZGV0YWlsL3Bvc3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxufSIsIm1hdC1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIG1heC13aWR0aDogNzAwcHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/posts/post-detail/post-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-detail/post-detail.component.ts ***!
  \************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");





let PostDetailComponent = class PostDetailComponent {
    constructor(route, postService, auth, router) {
        this.route = route;
        this.postService = postService;
        this.auth = auth;
        this.router = router;
        this.editing = false;
    }
    ngOnInit() {
        let pst = this.getPost();
        console.log(this);
    }
    getPost() {
        const id = this.route.snapshot.paramMap.get('id');
        return this.postService.getPostData(id)
            .subscribe(data => this.post = data);
    }
    delete() {
        const id = this.route.snapshot.paramMap.get('id');
        this.postService.delete(id);
        this.router.navigate(['/blog']);
    }
    updatePost() {
        const id = this.route.snapshot.paramMap.get('id');
        const formData = {
            title: this.post.title,
            content: this.post.content
        };
        this.postService.update(id, formData);
        this.editing = false;
    }
};
PostDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-detail',
        template: __webpack_require__(/*! raw-loader!./post-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-detail/post-detail.component.html"),
        styles: [__webpack_require__(/*! ./post-detail.component.scss */ "./src/app/posts/post-detail/post-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
        src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], PostDetailComponent);



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 100%;\n}\n\nsection {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-auto-rows: auto;\n  grid-gap: 10px;\n  max-width: 95%;\n  margin: 0 auto;\n}\n\nmat-card {\n  margin: 10px 0;\n  max-width: 700px;\n}\n\nmat-card-content:focus {\n  outline: none;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L0Q6XFxwcm9qZWN0c1xcc2hvcCBzb2tvXFxBbmd1bGFyLUJsb2ctQXBwL3NyY1xcYXBwXFxwb3N0c1xccG9zdC1saXN0XFxwb3N0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3RzL3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsMWZyKSk7XHJcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm1hdC1jYXJke1xyXG4gICAgbWFyZ2luOjEwcHggMDtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbn1cclxubWF0LWNhcmQtY29udGVudDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbn0iLCJpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbm1hdC1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIG1heC13aWR0aDogNzAwcHg7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");




let PostListComponent = class PostListComponent {
    constructor(postService, auth) {
        this.postService = postService;
        this.auth = auth;
        this.posts = this.postService.getPosts();
    }
    ngOnInit() {
    }
    delete(id) {
        this.postService.delete(id);
    }
};
PostListComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-list',
        template: __webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-list/post-list.component.html"),
        styles: [__webpack_require__(/*! ./post-list.component.scss */ "./src/app/posts/post-list/post-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
        src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], PostListComponent);



/***/ }),

/***/ "./src/app/posts/post.service.ts":
/*!***************************************!*\
  !*** ./src/app/posts/post.service.ts ***!
  \***************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");




let PostService = class PostService {
    constructor(afs) {
        this.afs = afs;
        this.postsCollection = this.afs.collection('posts', ref => ref.orderBy('published', 'desc'));
    }
    getPosts() {
        return this.postsCollection.snapshotChanges().
            map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        });
    }
    getPostData(id) {
        this.postDoc = this.afs.doc(`posts/${id}`);
        return this.postDoc.valueChanges();
    }
    getPost(id) {
        return this.afs.doc(`posts/${id}`);
    }
    create(data) {
        this.postsCollection.add(data);
    }
    delete(id) {
        return this.getPost(id).delete();
    }
    update(id, formData) {
        return this.getPost(id).update(formData);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
], PostService);



/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_dashboard_post_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-dashboard/post-dashboard.component */ "./src/app/posts/post-dashboard/post-dashboard.component.ts");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "./src/app/posts/post-detail/post-detail.component.ts");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    { path: 'blog', component: _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_5__["PostListComponent"] },
    { path: 'blog/:id', component: _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailComponent"] },
    { path: 'dashboard', component: _post_dashboard_post_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["PostDashboardComponent"] },
];
let PostsModule = class PostsModule {
};
PostsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_post_dashboard_post_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["PostDashboardComponent"], _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_5__["PostListComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        providers: [
            _post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]
        ]
    })
], PostsModule);



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto;\n}\n\nspan:focus {\n  outline: none;\n  border: 0;\n}\n\nspan {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9EOlxccHJvamVjdHNcXHNob3Agc29rb1xcQW5ndWxhci1CbG9nLUFwcC9zcmNcXGFwcFxcc2hhcmVkXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2Vye1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuc3Bhbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgIC8vIGN1cnNvcjogXHJcbn1cclxuc3BhbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuc3Bhbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMDtcbn1cblxuc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        ]
    })
], SharedModule);



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
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyALejUJcRLkDR3kXX2vsIphWqjgBiLon74",
        authDomain: "blogcms-2e0a0.firebaseapp.com",
        databaseURL: "https://blogcms-2e0a0.firebaseio.com",
        projectId: "blogcms-2e0a0",
        storageBucket: "blogcms-2e0a0.appspot.com",
        messagingSenderId: "29974059279",
        appId: "1:29974059279:web:c25d912b938728d724067a",
        measurementId: "G-CV25NMFD2B"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\shop soko\Angular-Blog-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map