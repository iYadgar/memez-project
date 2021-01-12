(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adapters/auth.adapter.ts":
/*!******************************************!*\
  !*** ./src/app/adapters/auth.adapter.ts ***!
  \******************************************/
/*! exports provided: AuthAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAdapter", function() { return AuthAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_ajax_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-ajax.adapter */ "./src/app/adapters/base-ajax.adapter.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

//region imports




//endregion
class AuthAdapter extends _base_ajax_adapter__WEBPACK_IMPORTED_MODULE_2__["BaseAjaxAdapter"] {
    constructor(http) {
        super(http);
    }
    isAuthenticated() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.request('isAuthenticated');
        });
    }
    getCurrentUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.request('currentuser');
        });
    }
}
AuthAdapter.ɵfac = function AuthAdapter_Factory(t) { return new (t || AuthAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthAdapter, factory: AuthAdapter.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/adapters/base-ajax.adapter.ts":
/*!***********************************************!*\
  !*** ./src/app/adapters/base-ajax.adapter.ts ***!
  \***********************************************/
/*! exports provided: BaseAjaxAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAjaxAdapter", function() { return BaseAjaxAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

class BaseAjaxAdapter {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'http://ec2-3-139-87-172.us-east-2.compute.amazonaws.com:4000/api';
    }
    request(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http
                .get(`${this.BASE_URL}/${path}`, { withCredentials: true })
                .toPromise();
        });
    }
    post(path, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http
                .post(`${this.BASE_URL}/${path}`, body, { withCredentials: true })
                .toPromise();
        });
    }
    delete(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http
                .delete(`${this.BASE_URL}/${path}`)
                .toPromise();
        });
    }
    update(path, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http
                .put(`${this.BASE_URL}/${path}`, body)
                .toPromise();
        });
    }
    listenToEvent(event_name, fn) {
        return;
    }
    stopListeningToEvent(event_name) {
        return;
    }
}


/***/ }),

/***/ "./src/app/adapters/base-socket-adapter.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/adapters/base-socket-adapter.service.ts ***!
  \*********************************************************/
/*! exports provided: BaseSocketAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSocketAdapter", function() { return BaseSocketAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "../../node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "../../node_modules/uuid/dist/esm-browser/index.js");

//region imports




//endregion
const URL = 'http://ec2-3-139-87-172.us-east-2.compute.amazonaws.com:4000';
class BaseSocketAdapter {
    constructor() {
        // @ts-ignore
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(URL, { transports: ['websocket'], upgrade: false });
        this.socket.on("connect", () => {
            console.log("SOCKET CONNECTED!!");
        });
        this.socket.on("reconnect", () => {
            console.log("SOCKET RECONNECTED!!");
        });
        this.socket.on("disconnect", () => {
            console.log("SOCKET DISCONNECTED :(");
        });
    }
    request(event_name, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const req_id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
                if (this.socket && this.socket.connected) {
                    console.log(`client: sendMessage emitting event_name ${event_name} with id ${req_id} with data`, data);
                    this.socket.emit(event_name, JSON.stringify(data), req_id);
                    let emitter;
                    const fn = (res_data, request_id) => {
                        if (request_id !== req_id) {
                            return;
                        }
                        resolve(res_data);
                        emitter.off(event_name, fn);
                    };
                    emitter = this.socket.on(event_name, fn);
                }
                else {
                    console.log("SocketAPI: no sockets connected...");
                }
            });
        });
    }
    listenToEvent(event_name, fn) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.socket && this.socket.on(event_name, fn);
        });
    }
    stopListeningToEvent(event_name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.socket && this.socket.off(event_name);
        });
    }
}
BaseSocketAdapter.ɵfac = function BaseSocketAdapter_Factory(t) { return new (t || BaseSocketAdapter)(); };
BaseSocketAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BaseSocketAdapter, factory: BaseSocketAdapter.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BaseSocketAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/adapters/like.adapter.ts":
/*!******************************************!*\
  !*** ./src/app/adapters/like.adapter.ts ***!
  \******************************************/
/*! exports provided: LikeAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeAdapter", function() { return LikeAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_socket_adapter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-socket-adapter.service */ "./src/app/adapters/base-socket-adapter.service.ts");

//region imports



//endregion
class LikeAdapter {
    constructor(socketAdapter) {
        this.socketAdapter = socketAdapter;
        window['likeAdapter'] = this;
    }
    getPostLikes(post_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.socketAdapter.request(`getPostLikes`, { post_id });
        });
    }
    createLike(likeData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.socketAdapter.request('createLike', likeData);
        });
    }
    unlike(likeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.socketAdapter.request(`unlike`, { id: likeId });
        });
    }
    getLikes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.socketAdapter.request('getLikes');
        });
    }
    getUserLikes(user_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.socketAdapter.request(`getUserLikes`, { user_id });
        });
    }
}
LikeAdapter.ɵfac = function LikeAdapter_Factory(t) { return new (t || LikeAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_base_socket_adapter_service__WEBPACK_IMPORTED_MODULE_2__["BaseSocketAdapter"])); };
LikeAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LikeAdapter, factory: LikeAdapter.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LikeAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _base_socket_adapter_service__WEBPACK_IMPORTED_MODULE_2__["BaseSocketAdapter"] }]; }, null); })();


/***/ }),

/***/ "./src/app/adapters/login.adapter.ts":
/*!*******************************************!*\
  !*** ./src/app/adapters/login.adapter.ts ***!
  \*******************************************/
/*! exports provided: LoginAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdapter", function() { return LoginAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_ajax_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-ajax.adapter */ "./src/app/adapters/base-ajax.adapter.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

//region imports




//endregion
class LoginAdapter extends _base_ajax_adapter__WEBPACK_IMPORTED_MODULE_2__["BaseAjaxAdapter"] {
    constructor(http) {
        super(http);
        window['loginAdapter'] = this;
    }
    login(loginDetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.post('login', loginDetails);
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.request('logout');
        });
    }
}
LoginAdapter.ɵfac = function LoginAdapter_Factory(t) { return new (t || LoginAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LoginAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginAdapter, factory: LoginAdapter.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/adapters/post.adapter.ts":
/*!******************************************!*\
  !*** ./src/app/adapters/post.adapter.ts ***!
  \******************************************/
/*! exports provided: PostAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAdapter", function() { return PostAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_socket_adapter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-socket-adapter.service */ "./src/app/adapters/base-socket-adapter.service.ts");

//region imports



//endregion
class PostAdapter {
    constructor(socketAdapter) {
        this.socketAdapter = socketAdapter;
        window['PostAdapter'] = this;
    }
    getPosts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.socketAdapter.request('getPosts');
        });
    }
    createPost(user_id, content, postMeme) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('postAdapter');
            console.log(content, 'content');
            return this.socketAdapter.request('createPost', {
                user_id: user_id,
                content: content,
                postMeme: postMeme
            });
        });
    }
    deletePost(post_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.socketAdapter.request('deletePost', { id: post_id });
        });
    }
    updatePostContent(post_id, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.socketAdapter.request("updatePost", { id: post_id, content });
        });
    }
}
PostAdapter.ɵfac = function PostAdapter_Factory(t) { return new (t || PostAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_base_socket_adapter_service__WEBPACK_IMPORTED_MODULE_2__["BaseSocketAdapter"])); };
PostAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PostAdapter, factory: PostAdapter.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _base_socket_adapter_service__WEBPACK_IMPORTED_MODULE_2__["BaseSocketAdapter"] }]; }, null); })();


/***/ }),

/***/ "./src/app/adapters/upload.adapter.ts":
/*!********************************************!*\
  !*** ./src/app/adapters/upload.adapter.ts ***!
  \********************************************/
/*! exports provided: UploadAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAdapter", function() { return UploadAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_ajax_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-ajax.adapter */ "./src/app/adapters/base-ajax.adapter.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class UploadAdapter extends _base_ajax_adapter__WEBPACK_IMPORTED_MODULE_2__["BaseAjaxAdapter"] {
    constructor(http) {
        super(http);
    }
    uploadPhoto(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.post('uploadphoto', file);
        });
    }
}
UploadAdapter.ɵfac = function UploadAdapter_Factory(t) { return new (t || UploadAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UploadAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UploadAdapter, factory: UploadAdapter.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/adapters/user.adapter.ts":
/*!******************************************!*\
  !*** ./src/app/adapters/user.adapter.ts ***!
  \******************************************/
/*! exports provided: UserAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdapter", function() { return UserAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_socket_adapter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-socket-adapter.service */ "./src/app/adapters/base-socket-adapter.service.ts");

//region imports



//endregion
class UserAdapter {
    constructor(socketAdapter) {
        this.socketAdapter = socketAdapter;
        window['UserAdapter'] = this;
    }
    getUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.socketAdapter.request('getUsers');
        });
    }
    createNewUser(userName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.socketAdapter.request('createUser', userName);
        });
    }
    updateUserPhoto(user_id, avatarUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.socketAdapter.request(`updateUserPhoto`, { id: user_id, avatar: avatarUrl });
        });
    }
}
UserAdapter.ɵfac = function UserAdapter_Factory(t) { return new (t || UserAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_base_socket_adapter_service__WEBPACK_IMPORTED_MODULE_2__["BaseSocketAdapter"])); };
UserAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserAdapter, factory: UserAdapter.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _base_socket_adapter_service__WEBPACK_IMPORTED_MODULE_2__["BaseSocketAdapter"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _views_feed_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/feed/feed.component */ "./src/app/views/feed/feed.component.ts");
/* harmony import */ var _views_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user-profile/user-profile.component */ "./src/app/views/user-profile/user-profile.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/sign-up/sign-up.component */ "./src/app/views/sign-up/sign-up.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
//region imports









//endregion
const routes = [
    {
        path: '',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    },
    {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'feed',
        component: _views_feed_feed_component__WEBPACK_IMPORTED_MODULE_2__["FeedComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    },
    {
        path: 'profile',
        component: _views_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    },
    {
        path: 'signup',
        component: _views_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _views_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/layout/layout.component */ "./src/app/views/layout/layout.component.ts");
/* harmony import */ var _views_feed_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/feed/feed.component */ "./src/app/views/feed/feed.component.ts");
/* harmony import */ var _views_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user-profile/user-profile.component */ "./src/app/views/user-profile/user-profile.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _views_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/layout/navbar/navbar.component */ "./src/app/views/layout/navbar/navbar.component.ts");
/* harmony import */ var _components_post_box_post_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/post-box/post-box.component */ "./src/app/components/post-box/post-box.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_like_dialog_box_like_dialog_box_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/like-dialog-box/like-dialog-box.component */ "./src/app/components/like-dialog-box/like-dialog-box.component.ts");
/* harmony import */ var _views_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/sign-up/sign-up.component */ "./src/app/views/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/profile-img/profile-img.component */ "./src/app/components/profile-img/profile-img.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _components_post_dialog_box_post_dialog_box_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/post-dialog-box/post-dialog-box.component */ "./src/app/components/post-dialog-box/post-dialog-box.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _components_post_img_dialog_post_img_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/post-img-dialog/post-img-dialog.component */ "./src/app/components/post-img-dialog/post-img-dialog.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _components_post_edit_dialog_post_edit_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/post-edit-dialog/post-edit-dialog.component */ "./src/app/components/post-edit-dialog/post-edit-dialog.component.ts");
//region imports




























//endregion
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_views_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            mobx_angular__WEBPACK_IMPORTED_MODULE_8__["MobxAngularModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_views_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        _views_feed_feed_component__WEBPACK_IMPORTED_MODULE_4__["FeedComponent"],
        _views_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
        _components_post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"],
        _views_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _components_post_box_post_box_component__WEBPACK_IMPORTED_MODULE_10__["PostBoxComponent"],
        _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _components_like_dialog_box_like_dialog_box_component__WEBPACK_IMPORTED_MODULE_14__["LikeDialogBoxComponent"],
        _views_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__["SignUpComponent"],
        _components_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_17__["ProfileImgComponent"],
        _components_post_dialog_box_post_dialog_box_component__WEBPACK_IMPORTED_MODULE_22__["PostDialogBoxComponent"],
        _components_post_img_dialog_post_img_dialog_component__WEBPACK_IMPORTED_MODULE_24__["PostImgDialogComponent"],
        _components_post_edit_dialog_post_edit_dialog_component__WEBPACK_IMPORTED_MODULE_26__["PostEditDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        mobx_angular__WEBPACK_IMPORTED_MODULE_8__["MobxAngularModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _views_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
                    _views_feed_feed_component__WEBPACK_IMPORTED_MODULE_4__["FeedComponent"],
                    _views_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
                    _components_post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"],
                    _views_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                    _components_post_box_post_box_component__WEBPACK_IMPORTED_MODULE_10__["PostBoxComponent"],
                    _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                    _components_like_dialog_box_like_dialog_box_component__WEBPACK_IMPORTED_MODULE_14__["LikeDialogBoxComponent"],
                    _views_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__["SignUpComponent"],
                    _components_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_17__["ProfileImgComponent"],
                    _components_post_dialog_box_post_dialog_box_component__WEBPACK_IMPORTED_MODULE_22__["PostDialogBoxComponent"],
                    _components_post_img_dialog_post_img_dialog_component__WEBPACK_IMPORTED_MODULE_24__["PostImgDialogComponent"],
                    _components_post_edit_dialog_post_edit_dialog_component__WEBPACK_IMPORTED_MODULE_26__["PostEditDialogComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    mobx_angular__WEBPACK_IMPORTED_MODULE_8__["MobxAngularModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]
                ],
                providers: [],
                bootstrap: [_views_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/like-dialog-box/like-dialog-box.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/like-dialog-box/like-dialog-box.component.ts ***!
  \*************************************************************************/
/*! exports provided: LikeDialogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeDialogBoxComponent", function() { return LikeDialogBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
//region imports




function LikeDialogBoxComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const like_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](like_r4.user_id.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](like_r4.created);
} }
//endregion
class LikeDialogBoxComponent {
    constructor(likes) {
        this.likes = likes;
        window['likeDialogBox'] = this;
    }
    ngOnInit() {
    }
}
LikeDialogBoxComponent.ɵfac = function LikeDialogBoxComponent_Factory(t) { return new (t || LikeDialogBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
LikeDialogBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LikeDialogBoxComponent, selectors: [["mem-dialog-box"]], decls: 2, vars: 1, consts: [[1, "liked-user-list"], ["class", "liked-user", 4, "ngFor", "ngForOf"], [1, "liked-user"], [1, "like-user-name"], [1, "like-timestamp"]], template: function LikeDialogBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LikeDialogBoxComponent_li_1_Template, 5, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.likes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL2NvbXBvbmVudHMvbGlrZS1kaWFsb2ctYm94L2xpa2UtZGlhbG9nLWJveC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LikeDialogBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mem-dialog-box',
                templateUrl: './like-dialog-box.component.html',
                styleUrls: ['./like-dialog-box.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/post-box/post-box.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/post-box/post-box.component.ts ***!
  \***********************************************************/
/*! exports provided: PostBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostBoxComponent", function() { return PostBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
//region imports


//endregion
class PostBoxComponent {
    constructor() {
        this.newPost = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imgUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    postToFeed(val) {
        this.newPost.emit(val);
    }
    onImgUpload(uploadEvent) {
        this.imgUpload.emit(uploadEvent);
    }
}
PostBoxComponent.ɵfac = function PostBoxComponent_Factory(t) { return new (t || PostBoxComponent)(); };
PostBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostBoxComponent, selectors: [["mem-post-box"]], inputs: { currentUserPhoto: "currentUserPhoto", postImgUrl: "postImgUrl" }, outputs: { newPost: "newPost", imgUpload: "imgUpload" }, decls: 10, vars: 0, consts: [[1, "post-box"], [1, "post-box-input"], [1, "post-meme-input"], ["type", "text", "placeholder", "write something...", 1, "post-input", "post-box-input-input"], ["post_input", ""], ["type", "file", "id", "upload-btn", "hidden", "", 3, "change"], ["for", "upload-btn", 1, "upload-btn"], ["src", "./assets/svg's/up-arrow.svg", 1, "upload-img"], [1, "post-box-btn", "btn", 3, "click"]], template: function PostBoxComponent_Template(rf, ctx) { if (rf & 1) {
        const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostBoxComponent_Template_input_change_5_listener($event) { return ctx.onImgUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostBoxComponent_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.postToFeed(_r70.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " POST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1ib3gvcG9zdC1ib3guY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mem-post-box',
                templateUrl: './post-box.component.html',
                styleUrls: ['./post-box.component.css']
            }]
    }], function () { return []; }, { newPost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], imgUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], currentUserPhoto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], postImgUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/post-dialog-box/post-dialog-box.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/post-dialog-box/post-dialog-box.component.ts ***!
  \*************************************************************************/
/*! exports provided: PostDialogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDialogBoxComponent", function() { return PostDialogBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");







function PostDialogBoxComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PostDialogBoxComponent {
    constructor(dialogRef, url) {
        this.dialogRef = dialogRef;
        this.url = url;
    }
    ngOnInit() {
    }
    close(value) {
        this.dialogRef.close(value);
    }
}
PostDialogBoxComponent.ɵfac = function PostDialogBoxComponent_Factory(t) { return new (t || PostDialogBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
PostDialogBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostDialogBoxComponent, selectors: [["mem-post-dialog-box"]], decls: 8, vars: 0, consts: [[1, "post-dialog-box-wrapper"], ["floatLabel", "auto"], ["matInput", "", "placeholder", "write something...", "id", "dialog-input", "type", "text", 1, "post-input", "post-dialog-input"], ["post_input", ""], ["class", "post-img-wrapper", 4, "mobxAutorun"], [1, "post-box-btn", "btn", 3, "click"], [1, "post-img-wrapper"], [1, "post-img", 3, "src"]], template: function PostDialogBoxComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostDialogBoxComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDialogBoxComponent_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.close(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " POST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], mobx_angular__WEBPACK_IMPORTED_MODULE_4__["MobxAutorunDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1kaWFsb2ctYm94L3Bvc3QtZGlhbG9nLWJveC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDialogBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mem-post-dialog-box',
                templateUrl: './post-dialog-box.component.html',
                styleUrls: ['./post-dialog-box.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/post-edit-dialog/post-edit-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/post-edit-dialog/post-edit-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: PostEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditDialogComponent", function() { return PostEditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");






class PostEditDialogComponent {
    constructor(dialogRef, post) {
        this.dialogRef = dialogRef;
        this.post = post;
    }
    ngOnInit() {
    }
    close(value) {
        this.dialogRef.close(value);
    }
}
PostEditDialogComponent.ɵfac = function PostEditDialogComponent_Factory(t) { return new (t || PostEditDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
PostEditDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostEditDialogComponent, selectors: [["mem-post-edit-dialog"]], decls: 6, vars: 1, consts: [["floatLabel", "auto"], ["matInput", "", "placeholder", "write something...", "id", "dialog-input", "type", "text", 1, "post-input", "post-dialog-input"], ["post_input", ""], [1, "post-box-btn", "btn", 3, "click"]], template: function PostEditDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostEditDialogComponent_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.close(_r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " POST\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.post.content, "\n   ");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1lZGl0LWRpYWxvZy9wb3N0LWVkaXQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostEditDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mem-post-edit-dialog',
                templateUrl: './post-edit-dialog.component.html',
                styleUrls: ['./post-edit-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/post-img-dialog/post-img-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/post-img-dialog/post-img-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: PostImgDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostImgDialogComponent", function() { return PostImgDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");



class PostImgDialogComponent {
    constructor(memeUrl) {
        this.memeUrl = memeUrl;
    }
    ngOnInit() {
    }
}
PostImgDialogComponent.ɵfac = function PostImgDialogComponent_Factory(t) { return new (t || PostImgDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
PostImgDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostImgDialogComponent, selectors: [["mem-post-img-dialog"]], decls: 2, vars: 1, consts: [[1, "post-img-wrapper"], [1, "post-img", 3, "src"]], template: function PostImgDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.memeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1pbWctZGlhbG9nL3Bvc3QtaW1nLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostImgDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mem-post-img-dialog',
                templateUrl: './post-img-dialog.component.html',
                styleUrls: ['./post-img-dialog.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "../../node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile-img/profile-img.component */ "./src/app/components/profile-img/profile-img.component.ts");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
//region imports







function PostComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r50.post.postedBy.name, " ");
} }
function PostComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.onPostEdit(ctx_r56.post); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_6_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.onPostDeleted(ctx_r58.post); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r52.post.content, " ");
} }
function PostComponent_div_13_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r59.post.postMeme, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.onImgClick(ctx_r60.post.postMeme); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_div_13_img_1_Template, 1, 1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.post.postMeme);
} }
function PostComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_ng_container_15_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.onPostLiked(ctx_r62.post); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "favorite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current-user-liked", ctx_r54.post.likedByCurrentUser);
} }
function PostComponent_ng_container_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_ng_container_16_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r65.onDashboardClicked(ctx_r65.post); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r64.post.likes_amount, " ");
} }
function PostComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_ng_container_16_div_1_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.post.likes_amount);
} }
//endregion
class PostComponent {
    constructor() {
        this.postDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.postLiked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dashboardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imgClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.postDate = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.post.created).format('DD.MM.YYYY');
        this.postTime = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.post.created).format('HH:mm');
    }
    //event handler function
    onPostDeleted(val) {
        this.postDeleted.emit(val);
    }
    onPostLiked(post) {
        this.postLiked.emit(post);
    }
    onDashboardClicked(post) {
        this.dashboardClicked.emit(post);
    }
    onImgClick(postMeme) {
        this.imgClicked.emit(postMeme);
    }
    onPostEdit(post) {
        this.editClicked.emit(post);
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["mem-post"]], inputs: { post: "post", currentUser: "currentUser" }, outputs: { postDeleted: "postDeleted", postLiked: "postLiked", dashboardClicked: "dashboardClicked", imgClicked: "imgClicked", editClicked: "editClicked" }, decls: 17, vars: 4, consts: [[1, "post-wrapper"], [1, "post-profile"], [1, "post-avatar"], [3, "url"], ["class", "post-user-name", 4, "mobxAutorun"], [1, "delete-and-date"], ["class", "post-update-dashboards", 4, "ngIf"], [1, "post-date-time"], [1, "post-date"], [1, "post-time"], ["class", "post-content", 4, "mobxAutorun"], ["class", "post-img-wrapper", 3, "click", 4, "mobxAutorun"], [1, "like-dashboard"], [4, "mobxAutorun"], [1, "post-user-name"], [1, "post-update-dashboards"], [1, "edit-btn", 3, "click"], [1, "edit-btn"], [1, "post-content"], [1, "post-img-wrapper", 3, "click"], ["class", "post-img", 3, "src", 4, "ngIf"], [1, "post-img", 3, "src"], [1, "like-btn"], [1, "like-icon", 3, "click"], ["class", "likes-amount", 3, "click", 4, "ngIf"], [1, "likes-amount", 3, "click"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mem-profile-img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostComponent_div_6_Template, 7, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PostComponent_div_12_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostComponent_div_13_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PostComponent_ng_container_15_Template, 4, 2, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PostComponent_ng_container_16_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.post.postedBy.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser._id === ctx.post.postedBy._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.postDate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.postTime, " ");
    } }, directives: [_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_2__["ProfileImgComponent"], mobx_angular__WEBPACK_IMPORTED_MODULE_3__["MobxAutorunDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mem-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css'],
            }]
    }], function () { return []; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], postDeleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], postLiked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dashboardClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], imgClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], editClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/profile-img/profile-img.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/profile-img/profile-img.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImgComponent", function() { return ProfileImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
//region imports



function ProfileImgComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} }
function ProfileImgComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r73.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
//endregion
class ProfileImgComponent {
    constructor() {
        this.imgClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onImgClick(imgUrl) {
        this.imgClicked.emit(imgUrl);
    }
}
ProfileImgComponent.ɵfac = function ProfileImgComponent_Factory(t) { return new (t || ProfileImgComponent)(); };
ProfileImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileImgComponent, selectors: [["mem-profile-img"]], inputs: { url: "url" }, outputs: { imgClicked: "imgClicked" }, decls: 3, vars: 2, consts: [[1, "avatar", 3, "click"], ["class", "avatar-img", "src", "https://storage.googleapis.com/memez-photos/temp-profile.svg", 4, "ngIf"], ["class", "avatar-img", 3, "src", 4, "ngIf"], ["src", "https://storage.googleapis.com/memez-photos/temp-profile.svg", 1, "avatar-img"], [1, "avatar-img", 3, "src"]], template: function ProfileImgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileImgComponent_Template_div_click_0_listener() { return ctx.onImgClick(ctx.url); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileImgComponent_img_1_Template, 1, 0, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileImgComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1pbWcvcHJvZmlsZS1pbWcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileImgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mem-profile-img',
                templateUrl: './profile-img.component.html',
                styleUrls: ['./profile-img.component.css']
            }]
    }], function () { return []; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imgClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _stores_views_auth_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/views/auth.store */ "./src/app/stores/views/auth.store.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

//region imports




//endregion
class AuthGuardService {
    constructor(authStore, router) {
        this.authStore = authStore;
        this.router = router;
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const auth = yield this.authStore.isAuthenticated();
            if (!auth) {
                yield this.router.navigateByUrl('login');
                return auth;
            }
            return auth;
        });
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_stores_views_auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _stores_views_auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/stores/entities/like.store.ts":
/*!***********************************************!*\
  !*** ./src/app/stores/entities/like.store.ts ***!
  \***********************************************/
/*! exports provided: LikeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeStore", function() { return LikeStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../root.store */ "./src/app/stores/root.store.ts");
/* harmony import */ var _adapters_like_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../adapters/like.adapter */ "./src/app/adapters/like.adapter.ts");

//region imports






//endregion
class LikeStore {
    constructor(root, likeAdapter) {
        this.root = root;
        this.likeAdapter = likeAdapter;
        this.currentUserLikes = [];
        window['likeStore'] = this;
        this.root.likeStore = this;
        Object(mobx__WEBPACK_IMPORTED_MODULE_3__["reaction"])(() => this.root.ps.posts, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let currentUser = this.root.log.currentUser;
            if (currentUser) {
                yield this.getCurrentUserLikes(currentUser._id);
                this.currentUserLikes.map(like => {
                    return this.root.ps.posts.map(post => {
                        post.likedByCurrentUser = post.postedBy._id === like.user_id._id;
                        !post.likes_amount ? post.likedByCurrentUser = false : post.likedByCurrentUser = true;
                        return post;
                    });
                });
            }
            else {
                this.currentUserLikes = [];
            }
        }), { fireImmediately: false });
    }
    getCurrentUserLikes(user_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.currentUserLikes = yield this.likeAdapter.getUserLikes(user_id);
        });
    }
    createLike(post) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const likeInput = {
                user_id: this.root.log.currentUser._id,
                post_id: post._id
            };
            return this.likeAdapter.createLike(likeInput);
        });
    }
    unlike(like_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.likeAdapter.unlike(like_id);
        });
    }
    handleLike(post) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const postLikes = yield this.root.likeStore.getPostLikes(post._id), found = postLikes.find(like => like.user_id._id === this.root.log.currentUser._id);
            try {
                if (found) {
                    const likeToDelete = yield this.unlike(found._id), index = this.currentUserLikes.indexOf(found);
                    this.currentUserLikes.splice(index, 1);
                    post.likes_amount = likeToDelete.postLikeCount;
                    post.likedByCurrentUser = false;
                }
                else {
                    const newLike = yield this.createLike(post);
                    console.log(newLike, 'newLike');
                    post.likes_amount = newLike.postLikeCount;
                    post.likedByCurrentUser = true;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getPostLikes(post_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.likeAdapter.getPostLikes(post_id);
        });
    }
    checkedLikedPosts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.root.ps.posts.forEach(post => {
                this.currentUserLikes.forEach(like => {
                    if (post._id === like.post_id) {
                        post.likedByCurrentUser = true;
                    }
                });
            });
        });
    }
}
LikeStore.ɵfac = function LikeStore_Factory(t) { return new (t || LikeStore)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_root_store__WEBPACK_IMPORTED_MODULE_4__["RootStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_adapters_like_adapter__WEBPACK_IMPORTED_MODULE_5__["LikeAdapter"])); };
LikeStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LikeStore, factory: LikeStore.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], LikeStore.prototype, "currentUserLikes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], LikeStore.prototype, "getCurrentUserLikes", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], LikeStore.prototype, "createLike", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], LikeStore.prototype, "unlike", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], LikeStore.prototype, "handleLike", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], LikeStore.prototype, "getPostLikes", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], LikeStore.prototype, "checkedLikedPosts", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LikeStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _root_store__WEBPACK_IMPORTED_MODULE_4__["RootStore"] }, { type: _adapters_like_adapter__WEBPACK_IMPORTED_MODULE_5__["LikeAdapter"] }]; }, { currentUserLikes: [], getCurrentUserLikes: [], createLike: [], unlike: [], handleLike: [], getPostLikes: [], checkedLikedPosts: [] }); })();


/***/ }),

/***/ "./src/app/stores/entities/post.store.ts":
/*!***********************************************!*\
  !*** ./src/app/stores/entities/post.store.ts ***!
  \***********************************************/
/*! exports provided: PostStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostStore", function() { return PostStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _components_post_dialog_box_post_dialog_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/post-dialog-box/post-dialog-box.component */ "./src/app/components/post-dialog-box/post-dialog-box.component.ts");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _components_post_img_dialog_post_img_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post-img-dialog/post-img-dialog.component */ "./src/app/components/post-img-dialog/post-img-dialog.component.ts");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../root.store */ "./src/app/stores/root.store.ts");
/* harmony import */ var _adapters_post_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../adapters/post.adapter */ "./src/app/adapters/post.adapter.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

//region imports









//endregion
class PostStore {
    constructor(root, postAdapter, dialog) {
        this.root = root;
        this.postAdapter = postAdapter;
        this.dialog = dialog;
        this.posts = [];
        this.root.ps = this; //self-registration at root store
        window['postStore'] = this;
        Object(mobx__WEBPACK_IMPORTED_MODULE_4__["reaction"])(() => this.postContent, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.createPost(this.postContent);
        }));
        this.listenToUpdates();
    }
    get userPosts() {
        return this.posts
            .filter(post => post.postedBy._id === this.root.log.currentUser._id);
    }
    get filteredPosts() {
        return this.root.fs.searchTerm ? this.posts.filter((post) => {
            return post.content.includes(this.root.fs.searchTerm) || post.postedBy.name.includes(this.root.fs.searchTerm);
        }) : this.posts;
    }
    listenToUpdates() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.postAdapter
                .socketAdapter
                .listenToEvent('postsUpdate', posts => {
                this.posts = posts;
            });
        });
    }
    getPosts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.posts = yield this
                .postAdapter
                .getPosts();
        });
    }
    createPost(content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.root.ups.loading = true;
            yield this.postAdapter.createPost(this.root.log.currentUser._id, content, this.postImgUrl);
            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.getPosts();
                this.root.ups.loading = false;
            }), 3000);
        });
    }
    deletePost(post) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.root.ups.loading = true;
            yield this.postAdapter.deletePost(post._id);
            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.getPosts();
                this.root.ups.loading = false;
            }), 1500);
        });
    }
    onImgPost(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.root.ups.loading = true;
            this.uploadEvent = event;
            this.postImgUrl = yield this.root.ups.onFileUpload(this.uploadEvent);
            this.root.ups.loading = false;
            yield this.handleDialog();
        });
    }
    handleDialog() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialogRef = this.dialog.open(_components_post_dialog_box_post_dialog_box_component__WEBPACK_IMPORTED_MODULE_3__["PostDialogBoxComponent"], { data: this.postImgUrl });
            this.postContent = yield dialogRef.afterClosed().toPromise();
            console.log(this.postContent);
        });
    }
    openImgDialog(memeUrl) {
        this.dialog.open(_components_post_img_dialog_post_img_dialog_component__WEBPACK_IMPORTED_MODULE_5__["PostImgDialogComponent"], { data: memeUrl });
    }
    updatePostContent(post_id, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.postAdapter.updatePostContent(post_id, content);
        });
    }
}
PostStore.ɵfac = function PostStore_Factory(t) { return new (t || PostStore)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_root_store__WEBPACK_IMPORTED_MODULE_6__["RootStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_adapters_post_adapter__WEBPACK_IMPORTED_MODULE_7__["PostAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
PostStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PostStore, factory: PostStore.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], PostStore.prototype, "posts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], PostStore.prototype, "postImgUrl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], PostStore.prototype, "uploadEvent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], PostStore.prototype, "postContent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["computed"]
], PostStore.prototype, "userPosts", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["computed"]
], PostStore.prototype, "filteredPosts", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], PostStore.prototype, "getPosts", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], PostStore.prototype, "createPost", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], PostStore.prototype, "deletePost", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], PostStore.prototype, "onImgPost", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], PostStore.prototype, "handleDialog", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], PostStore.prototype, "updatePostContent", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _root_store__WEBPACK_IMPORTED_MODULE_6__["RootStore"] }, { type: _adapters_post_adapter__WEBPACK_IMPORTED_MODULE_7__["PostAdapter"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, { posts: [], postImgUrl: [], uploadEvent: [], postContent: [], userPosts: [], filteredPosts: [], getPosts: [], createPost: [], deletePost: [], onImgPost: [], handleDialog: [], updatePostContent: [] }); })();


/***/ }),

/***/ "./src/app/stores/entities/user.store.ts":
/*!***********************************************!*\
  !*** ./src/app/stores/entities/user.store.ts ***!
  \***********************************************/
/*! exports provided: UserStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStore", function() { return UserStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../root.store */ "./src/app/stores/root.store.ts");
/* harmony import */ var _adapters_user_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../adapters/user.adapter */ "./src/app/adapters/user.adapter.ts");
/* harmony import */ var _upload_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../upload.store */ "./src/app/stores/upload.store.ts");

//region imports






/*import {MOCK_USERS}         from '../../../../../../../../shared/mock/MOCK_USERS';*/
//endregion
class UserStore {
    constructor(root, userAdapter, uploadStore) {
        this.root = root;
        this.userAdapter = userAdapter;
        this.uploadStore = uploadStore;
        /*useMock: boolean = false;*/
        this.users = [];
        this.root.us = this;
        window['userStore'] = this;
    }
    getUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.users = yield this
                .userAdapter
                .getUsers();
        });
    }
    onProfilePictureUpload(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.root.ups.loading = true;
            this.avatarUrl = yield this.root.ups.onFileUpload(event);
            if (this.root.log.currentUser) {
                console.log('working');
                this.root.log.currentUser.avatar = this.avatarUrl;
                const res = yield this.updateProfilePicture();
                this.root.ups.loading = false;
                console.log(res);
            }
            this.root.ups.loading = false;
        });
    }
    updateProfilePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userAdapter.updateUserPhoto(this.root.log.currentUser._id, this.avatarUrl);
        });
    }
}
UserStore.ɵfac = function UserStore_Factory(t) { return new (t || UserStore)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_root_store__WEBPACK_IMPORTED_MODULE_3__["RootStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_adapters_user_adapter__WEBPACK_IMPORTED_MODULE_4__["UserAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_upload_store__WEBPACK_IMPORTED_MODULE_5__["UploadStore"])); };
UserStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserStore, factory: UserStore.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], UserStore.prototype, "users", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], UserStore.prototype, "avatarUrl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], UserStore.prototype, "getUsers", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], UserStore.prototype, "onProfilePictureUpload", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], UserStore.prototype, "updateProfilePicture", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _root_store__WEBPACK_IMPORTED_MODULE_3__["RootStore"] }, { type: _adapters_user_adapter__WEBPACK_IMPORTED_MODULE_4__["UserAdapter"] }, { type: _upload_store__WEBPACK_IMPORTED_MODULE_5__["UploadStore"] }]; }, { users: [], avatarUrl: [], getUsers: [], onProfilePictureUpload: [], updateProfilePicture: [] }); })();


/***/ }),

/***/ "./src/app/stores/root.store.ts":
/*!**************************************!*\
  !*** ./src/app/stores/root.store.ts ***!
  \**************************************/
/*! exports provided: RootStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStore", function() { return RootStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/lib/mobx.module.js");
//region imports



//endregion
class RootStore {
    constructor() {
        window['root'] = this;
        window['js'] = data => Object(mobx__WEBPACK_IMPORTED_MODULE_1__["toJS"])(data, { recurseEverything: true });
    }
}
RootStore.ɵfac = function RootStore_Factory(t) { return new (t || RootStore)(); };
RootStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RootStore, factory: RootStore.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/stores/upload.store.ts":
/*!****************************************!*\
  !*** ./src/app/stores/upload.store.ts ***!
  \****************************************/
/*! exports provided: UploadStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadStore", function() { return UploadStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _adapters_upload_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/upload.adapter */ "./src/app/adapters/upload.adapter.ts");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root.store */ "./src/app/stores/root.store.ts");






class UploadStore {
    constructor(uploadAdapter, root) {
        this.uploadAdapter = uploadAdapter;
        this.root = root;
        this.loading = false;
        this.formData = new FormData();
        this.root.ups = this;
    }
    onFileUpload(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedFile = event.target.files[0];
            this.formData.append('file', this.selectedFile, this.selectedFile.name);
            try {
                this.uploadUrl = yield this.uploadAdapter.uploadPhoto(this.formData);
                return this.uploadUrl;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
UploadStore.ɵfac = function UploadStore_Factory(t) { return new (t || UploadStore)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_adapters_upload_adapter__WEBPACK_IMPORTED_MODULE_3__["UploadAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_root_store__WEBPACK_IMPORTED_MODULE_4__["RootStore"])); };
UploadStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UploadStore, factory: UploadStore.ɵfac, providedIn: "root" });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], UploadStore.prototype, "uploadUrl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], UploadStore.prototype, "selectedFile", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], UploadStore.prototype, "loading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], UploadStore.prototype, "onFileUpload", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _adapters_upload_adapter__WEBPACK_IMPORTED_MODULE_3__["UploadAdapter"] }, { type: _root_store__WEBPACK_IMPORTED_MODULE_4__["RootStore"] }]; }, { uploadUrl: [], selectedFile: [], loading: [], onFileUpload: [] }); })();


/***/ }),

/***/ "./src/app/stores/views/auth.store.ts":
/*!********************************************!*\
  !*** ./src/app/stores/views/auth.store.ts ***!
  \********************************************/
/*! exports provided: AuthStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStore", function() { return AuthStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../root.store */ "./src/app/stores/root.store.ts");
/* harmony import */ var _adapters_auth_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../adapters/auth.adapter */ "./src/app/adapters/auth.adapter.ts");

//region imports





//endregion
class AuthStore {
    constructor(root, authAdapter) {
        this.root = root;
        this.authAdapter = authAdapter;
        window['authStore'] = this;
        this.root.as = this;
        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.getCurrentUser();
            }
            catch (e) {
                console.log(e, 'e');
            }
        }))();
    }
    isAuthenticated() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.authAdapter.isAuthenticated();
        });
    }
    getCurrentUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.root.log.currentUser = yield this.authAdapter.getCurrentUser();
        });
    }
}
AuthStore.ɵfac = function AuthStore_Factory(t) { return new (t || AuthStore)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_root_store__WEBPACK_IMPORTED_MODULE_3__["RootStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_adapters_auth_adapter__WEBPACK_IMPORTED_MODULE_4__["AuthAdapter"])); };
AuthStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthStore, factory: AuthStore.ɵfac, providedIn: "root" });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], AuthStore.prototype, "getCurrentUser", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _root_store__WEBPACK_IMPORTED_MODULE_3__["RootStore"] }, { type: _adapters_auth_adapter__WEBPACK_IMPORTED_MODULE_4__["AuthAdapter"] }]; }, { getCurrentUser: [] }); })();


/***/ }),

/***/ "./src/app/stores/views/feed.store.ts":
/*!********************************************!*\
  !*** ./src/app/stores/views/feed.store.ts ***!
  \********************************************/
/*! exports provided: FeedStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedStore", function() { return FeedStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "../../node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _components_like_dialog_box_like_dialog_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/like-dialog-box/like-dialog-box.component */ "./src/app/components/like-dialog-box/like-dialog-box.component.ts");
/* harmony import */ var _components_post_edit_dialog_post_edit_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post-edit-dialog/post-edit-dialog.component */ "./src/app/components/post-edit-dialog/post-edit-dialog.component.ts");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../root.store */ "./src/app/stores/root.store.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

//region imports








//endregion
class FeedStore {
    constructor(root, dialog) {
        this.root = root;
        this.dialog = dialog;
        window['feedStore'] = this;
        this.root.fs = this;
    }
    get dateFormattedLikes() {
        return this.postLikes.map(like => {
            return {
                _id: like._id,
                created: dayjs__WEBPACK_IMPORTED_MODULE_1__(like.created).format('DD.MM.YYYY'),
                user_id: like.user_id,
                post_id: like.post_id
            };
        });
    }
    handLikesleDialog(post) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.postLikes = yield this.root.likeStore.getPostLikes(post._id);
            this.dialog.open(_components_like_dialog_box_like_dialog_box_component__WEBPACK_IMPORTED_MODULE_4__["LikeDialogBoxComponent"], { data: this.dateFormattedLikes });
        });
    }
    onSearch(value) {
        setTimeout(() => {
            this.searchTerm = value;
        }, 750);
    }
    handleEditPostDialog(post) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialogRef = this.dialog.open(_components_post_edit_dialog_post_edit_dialog_component__WEBPACK_IMPORTED_MODULE_5__["PostEditDialogComponent"], { data: post }), postNewContent = yield dialogRef.afterClosed().toPromise();
            this.root.ups.loading = true;
            yield this.root.ps.updatePostContent(post._id, postNewContent);
            post.content = postNewContent;
            this.root.ups.loading = false;
        });
    }
}
FeedStore.ɵfac = function FeedStore_Factory(t) { return new (t || FeedStore)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_root_store__WEBPACK_IMPORTED_MODULE_6__["RootStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
FeedStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FeedStore, factory: FeedStore.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_3__["observable"]
], FeedStore.prototype, "postLikes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_3__["observable"]
], FeedStore.prototype, "searchTerm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_3__["computed"]
], FeedStore.prototype, "dateFormattedLikes", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_3__["action"]
], FeedStore.prototype, "handLikesleDialog", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_3__["action"]
], FeedStore.prototype, "onSearch", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_3__["action"]
], FeedStore.prototype, "handleEditPostDialog", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FeedStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _root_store__WEBPACK_IMPORTED_MODULE_6__["RootStore"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, { postLikes: [], searchTerm: [], dateFormattedLikes: [], handLikesleDialog: [], onSearch: [], handleEditPostDialog: [] }); })();


/***/ }),

/***/ "./src/app/stores/views/layout.store.ts":
/*!**********************************************!*\
  !*** ./src/app/stores/views/layout.store.ts ***!
  \**********************************************/
/*! exports provided: LayoutStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutStore", function() { return LayoutStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../root.store */ "./src/app/stores/root.store.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

//region imports




//endregion
class LayoutStore {
    constructor(root, router) {
        this.root = root;
        this.router = router;
        this.root.ls = this;
        window['layoutStore'] = this;
    }
    routeToFeed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('feed');
        });
    }
    routeToProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('profile');
        });
    }
}
LayoutStore.ɵfac = function LayoutStore_Factory(t) { return new (t || LayoutStore)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_root_store__WEBPACK_IMPORTED_MODULE_2__["RootStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LayoutStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LayoutStore, factory: LayoutStore.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: "root" }]
    }], function () { return [{ type: _root_store__WEBPACK_IMPORTED_MODULE_2__["RootStore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/stores/views/login.store.ts":
/*!*********************************************!*\
  !*** ./src/app/stores/views/login.store.ts ***!
  \*********************************************/
/*! exports provided: LoginStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStore", function() { return LoginStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../root.store */ "./src/app/stores/root.store.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _adapters_login_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../adapters/login.adapter */ "./src/app/adapters/login.adapter.ts");

//region imports






class LoginStore {
    constructor(root, router, loginAdapter) {
        this.root = root;
        this.router = router;
        this.loginAdapter = loginAdapter;
        this.loginError = '';
        window['loginStore'] = this;
        this.root.log = this;
    }
    verifyUser(loginDetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.loginAdapter.login(loginDetails);
        });
    }
    handleLogin(loginDetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const details = {
                email: loginDetails.email.toLowerCase(),
                password: loginDetails.password
            };
            try {
                this.currentUser = yield this.verifyUser(details);
                yield this.router.navigateByUrl('feed');
            }
            catch (e) {
                this.loginError = e.error.msg;
            }
        });
    }
    handleLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loginAdapter.logout();
            this.currentUser = undefined;
            console.log('logged out');
            yield this.router.navigateByUrl('/login');
        });
    }
    routeToSignUp() {
        this.router.navigateByUrl('signup').then();
    }
}
LoginStore.ɵfac = function LoginStore_Factory(t) { return new (t || LoginStore)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_root_store__WEBPACK_IMPORTED_MODULE_3__["RootStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_adapters_login_adapter__WEBPACK_IMPORTED_MODULE_5__["LoginAdapter"])); };
LoginStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginStore, factory: LoginStore.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], LoginStore.prototype, "currentUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], LoginStore.prototype, "loginError", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], LoginStore.prototype, "handleLogin", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], LoginStore.prototype, "handleLogout", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _root_store__WEBPACK_IMPORTED_MODULE_3__["RootStore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _adapters_login_adapter__WEBPACK_IMPORTED_MODULE_5__["LoginAdapter"] }]; }, { currentUser: [], loginError: [], handleLogin: [], handleLogout: [] }); })();


/***/ }),

/***/ "./src/app/stores/views/signup.store.ts":
/*!**********************************************!*\
  !*** ./src/app/stores/views/signup.store.ts ***!
  \**********************************************/
/*! exports provided: SignupStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupStore", function() { return SignupStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../root.store */ "./src/app/stores/root.store.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _adapters_user_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../adapters/user.adapter */ "./src/app/adapters/user.adapter.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

//region imports







//endregion
class SignupStore {
    constructor(root, router, userAdapter, http) {
        this.root = root;
        this.router = router;
        this.userAdapter = userAdapter;
        this.http = http;
        this.errorMessage = '';
        this.root.sus = this;
        window['signUpStore'] = this;
    }
    routeToLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigateByUrl('login');
        });
    }
    handleSignUp(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            user.email = user.email.toLowerCase();
            user.name = user.name.toLowerCase();
            if (this.root.us.avatarUrl) {
                user.avatar = this.root.us.avatarUrl;
            }
            try {
                const userResponse = yield this.userAdapter.createNewUser(user);
                console.log(userResponse.isCreated, 'userResponse.isCreated');
                if (!userResponse.isCreated) {
                    this.errorMessage = userResponse.msg;
                    return;
                }
                console.log(userResponse.msg);
                yield this.routeToLogin();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
SignupStore.ɵfac = function SignupStore_Factory(t) { return new (t || SignupStore)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_root_store__WEBPACK_IMPORTED_MODULE_3__["RootStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_adapters_user_adapter__WEBPACK_IMPORTED_MODULE_5__["UserAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
SignupStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SignupStore, factory: SignupStore.ɵfac, providedIn: "root" });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
], SignupStore.prototype, "errorMessage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], SignupStore.prototype, "routeToLogin", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
], SignupStore.prototype, "handleSignUp", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignupStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: "root" }]
    }], function () { return [{ type: _root_store__WEBPACK_IMPORTED_MODULE_3__["RootStore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _adapters_user_adapter__WEBPACK_IMPORTED_MODULE_5__["UserAdapter"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, { errorMessage: [], routeToLogin: [], handleSignUp: [] }); })();


/***/ }),

/***/ "./src/app/views/feed/feed.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/feed/feed.component.ts ***!
  \**********************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _stores_views_feed_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/views/feed.store */ "./src/app/stores/views/feed.store.ts");
/* harmony import */ var _components_post_box_post_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/post-box/post-box.component */ "./src/app/components/post-box/post-box.component.ts");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/post/post.component */ "./src/app/components/post/post.component.ts");

//region imports








function FeedComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FeedComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FeedComponent_ng_container_2_div_1_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.fs.root.ups.loading);
} }
function FeedComponent_div_3_mem_post_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mem-post", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("postDeleted", function FeedComponent_div_3_mem_post_1_Template_mem_post_postDeleted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.fs.root.ps.deletePost($event); })("postLiked", function FeedComponent_div_3_mem_post_1_Template_mem_post_postLiked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.fs.root.likeStore.handleLike($event); })("dashboardClicked", function FeedComponent_div_3_mem_post_1_Template_mem_post_dashboardClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.fs.handLikesleDialog($event); })("imgClicked", function FeedComponent_div_3_mem_post_1_Template_mem_post_imgClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.fs.root.ps.openImgDialog($event); })("editClicked", function FeedComponent_div_3_mem_post_1_Template_mem_post_editClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.fs.handleEditPostDialog($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", post_r11)("currentUser", ctx_r10.fs.root.log.currentUser);
} }
function FeedComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FeedComponent_div_3_mem_post_1_Template, 1, 2, "mem-post", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.fs.root.ps.filteredPosts);
} }
//endregion
class FeedComponent {
    constructor(fs) {
        this.fs = fs;
        window['feedComp'] = this;
        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fs.root.ps.getPosts();
                console.log('got posts');
            }
            catch (e) {
                console.log('there was problem getting', e);
            }
        }))();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('init');
            yield this.fs.root.ps.getPosts();
        });
    }
}
FeedComponent.ɵfac = function FeedComponent_Factory(t) { return new (t || FeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_views_feed_store__WEBPACK_IMPORTED_MODULE_2__["FeedStore"])); };
FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeedComponent, selectors: [["mem-feed"]], decls: 4, vars: 2, consts: [[1, "feed-wrapper"], [3, "currentUserPhoto", "postImgUrl", "newPost", "imgUpload"], [4, "mobxAutorun"], ["class", "posts-container", 4, "mobxAutorun"], [4, "ngIf"], [1, "posts-container"], [3, "post", "currentUser", "postDeleted", "postLiked", "dashboardClicked", "imgClicked", "editClicked", 4, "ngFor", "ngForOf"], [3, "post", "currentUser", "postDeleted", "postLiked", "dashboardClicked", "imgClicked", "editClicked"]], template: function FeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mem-post-box", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newPost", function FeedComponent_Template_mem_post_box_newPost_1_listener($event) { return ctx.fs.root.ps.createPost($event); })("imgUpload", function FeedComponent_Template_mem_post_box_imgUpload_1_listener($event) { return ctx.fs.root.ps.onImgPost($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FeedComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FeedComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("currentUserPhoto", ctx.fs.root.log.currentUser.avatar)("postImgUrl", ctx.fs.root.ps.postImgUrl);
    } }, directives: [_components_post_box_post_box_component__WEBPACK_IMPORTED_MODULE_3__["PostBoxComponent"], mobx_angular__WEBPACK_IMPORTED_MODULE_4__["MobxAutorunDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL3ZpZXdzL2ZlZWQvZmVlZC5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mem-feed',
                templateUrl: './feed.component.html',
                styleUrls: ['./feed.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _stores_views_feed_store__WEBPACK_IMPORTED_MODULE_2__["FeedStore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/layout/layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _stores_root_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/root.store */ "./src/app/stores/root.store.ts");
/* harmony import */ var _stores_entities_post_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/entities/post.store */ "./src/app/stores/entities/post.store.ts");
/* harmony import */ var _stores_entities_user_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stores/entities/user.store */ "./src/app/stores/entities/user.store.ts");
/* harmony import */ var _stores_views_login_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stores/views/login.store */ "./src/app/stores/views/login.store.ts");
/* harmony import */ var _stores_entities_like_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/entities/like.store */ "./src/app/stores/entities/like.store.ts");
/* harmony import */ var _stores_views_feed_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../stores/views/feed.store */ "./src/app/stores/views/feed.store.ts");
/* harmony import */ var _stores_views_layout_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../stores/views/layout.store */ "./src/app/stores/views/layout.store.ts");
/* harmony import */ var _stores_views_signup_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../stores/views/signup.store */ "./src/app/stores/views/signup.store.ts");
/* harmony import */ var _stores_views_auth_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../stores/views/auth.store */ "./src/app/stores/views/auth.store.ts");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/views/layout/navbar/navbar.component.ts");

//region imports















function LayoutComponent_ng_container_1_mem_navbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mem-navbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("profileClick", function LayoutComponent_ng_container_1_mem_navbar_1_Template_mem_navbar_profileClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r44.ls.routeToProfile(); })("headerClick", function LayoutComponent_ng_container_1_mem_navbar_1_Template_mem_navbar_headerClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r46.ls.routeToFeed(); })("feedClick", function LayoutComponent_ng_container_1_mem_navbar_1_Template_mem_navbar_feedClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r47.ls.routeToFeed(); })("logoutClick", function LayoutComponent_ng_container_1_mem_navbar_1_Template_mem_navbar_logoutClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r48.ls.root.log.handleLogout(); })("onSearch", function LayoutComponent_ng_container_1_mem_navbar_1_Template_mem_navbar_onSearch_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r49.ls.root.fs.onSearch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("currentUser", ctx_r43.ls.root.log.currentUser);
} }
function LayoutComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LayoutComponent_ng_container_1_mem_navbar_1_Template, 1, 1, "mem-navbar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r42.log.currentUser);
} }
//endregion
class LayoutComponent {
    constructor(root, ps, us, log, likeStore, fs, ls, sus, as) {
        this.root = root;
        this.ps = ps;
        this.us = us;
        this.log = log;
        this.likeStore = likeStore;
        this.fs = fs;
        this.ls = ls;
        this.sus = sus;
        this.as = as;
        //IIFE
        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.log.currentUser) {
                yield this.ps.getPosts();
            }
        }))();
    }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_root_store__WEBPACK_IMPORTED_MODULE_2__["RootStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_entities_post_store__WEBPACK_IMPORTED_MODULE_3__["PostStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_entities_user_store__WEBPACK_IMPORTED_MODULE_4__["UserStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_views_login_store__WEBPACK_IMPORTED_MODULE_5__["LoginStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_entities_like_store__WEBPACK_IMPORTED_MODULE_6__["LikeStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_views_feed_store__WEBPACK_IMPORTED_MODULE_7__["FeedStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_views_layout_store__WEBPACK_IMPORTED_MODULE_8__["LayoutStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_views_signup_store__WEBPACK_IMPORTED_MODULE_9__["SignupStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_views_auth_store__WEBPACK_IMPORTED_MODULE_10__["AuthStore"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["mem-layout"]], decls: 4, vars: 0, consts: [[1, "app-wrapper"], [4, "mobxAutorun"], [1, "app-content"], [3, "currentUser", "profileClick", "headerClick", "feedClick", "logoutClick", "onSearch", 4, "ngIf"], [3, "currentUser", "profileClick", "headerClick", "feedClick", "logoutClick", "onSearch"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LayoutComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_11__["MobxAutorunDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL3ZpZXdzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mem-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _stores_root_store__WEBPACK_IMPORTED_MODULE_2__["RootStore"] }, { type: _stores_entities_post_store__WEBPACK_IMPORTED_MODULE_3__["PostStore"] }, { type: _stores_entities_user_store__WEBPACK_IMPORTED_MODULE_4__["UserStore"] }, { type: _stores_views_login_store__WEBPACK_IMPORTED_MODULE_5__["LoginStore"] }, { type: _stores_entities_like_store__WEBPACK_IMPORTED_MODULE_6__["LikeStore"] }, { type: _stores_views_feed_store__WEBPACK_IMPORTED_MODULE_7__["FeedStore"] }, { type: _stores_views_layout_store__WEBPACK_IMPORTED_MODULE_8__["LayoutStore"] }, { type: _stores_views_signup_store__WEBPACK_IMPORTED_MODULE_9__["SignupStore"] }, { type: _stores_views_auth_store__WEBPACK_IMPORTED_MODULE_10__["AuthStore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/layout/navbar/navbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/layout/navbar/navbar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _components_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/profile-img/profile-img.component */ "./src/app/components/profile-img/profile-img.component.ts");
//region imports






//endregion
class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.profileClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.feedClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.logoutClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.headerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    profileClicked() {
        this.profileClick.emit();
    }
    feedClicked() {
        this.feedClick.emit();
    }
    headerClicked() {
        this.headerClick.emit();
    }
    logoutClicked() {
        this.logoutClick.emit();
    }
    searched(value) {
        this.onSearch.emit(value);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["mem-navbar"]], inputs: { currentUser: "currentUser" }, outputs: { profileClick: "profileClick", feedClick: "feedClick", logoutClick: "logoutClick", headerClick: "headerClick", onSearch: "onSearch" }, decls: 23, vars: 3, consts: [[1, "app-navbar"], [1, "main-header", 3, "click"], [1, "main-title"], ["src", "../../../../assets/svg's/Trollface.svg", "alt", "", 1, "title-img"], [1, "navbar-search-input-wrapper"], ["type", "text", 1, "navbar-search-input", 3, "keyup"], ["search_input", ""], [1, "search-icon"], [1, "welcome-menu-container"], [1, "navbar-welcome"], [1, "navbar-profile-img", 3, "matMenuTriggerFor"], [3, "url"], ["profile_menu", "matMenu"], ["mat-menu-item", "", 1, "menu-button", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_1_listener() { return ctx.headerClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MEMEZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NavbarComponent_Template_input_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.searched(_r67.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mem-profile-img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-menu", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_17_listener() { return ctx.profileClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_19_listener() { return ctx.feedClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "feed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_21_listener() { return ctx.logoutClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.currentUser.avatar);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _components_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_4__["ProfileImgComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL3ZpZXdzL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mem-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { currentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], profileClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], feedClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], logoutClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], headerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _stores_views_login_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/views/login.store */ "./src/app/stores/views/login.store.ts");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
//region imports







function LoginComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r33.log.loginError, " ");
} }
function LoginComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_6_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r32.log.loginError);
} }
//endregion
class LoginComponent {
    constructor(log) {
        this.log = log;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
    }
    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_stores_views_login_store__WEBPACK_IMPORTED_MODULE_2__["LoginStore"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["mem-login"]], decls: 22, vars: 2, consts: [[1, "login-wrapper"], [1, "login-landing"], [1, "main-title"], ["src", "./assets/svg's/Trollface.svg", "alt", "", 1, "login-img"], [1, "login-form", 3, "formGroup", "ngSubmit"], [4, "mobxAutorun"], [1, "form-wrapper"], ["for", "email", 1, "form-label"], ["id", "email", "formControlName", "email", "type", "email", "placeholder", "enter your email", 1, "signup-form-input"], ["for", "password", 1, "form-label"], ["id", "password", "formControlName", "password", "type", "password", "placeholder", "enter your password", 1, "signup-form-input"], ["type", "submit", 1, "submit-btn", "btn", 3, "disabled"], [1, "sign-up-button"], [1, "sign-up-route", 3, "click"], ["class", "form-validation login", 4, "ngIf"], [1, "form-validation", "login"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MEMEZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.log.handleLogin(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Enter Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Enter password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " New to MEMEZ ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_20_listener() { return ctx.log.routeToSignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid || ctx.loginForm.pristine);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], mobx_angular__WEBPACK_IMPORTED_MODULE_3__["MobxAutorunDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mem-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _stores_views_login_store__WEBPACK_IMPORTED_MODULE_2__["LoginStore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _stores_views_signup_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/views/signup.store */ "./src/app/stores/views/signup.store.ts");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/profile-img/profile-img.component */ "./src/app/components/profile-img/profile-img.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
//region imports









function SignUpComponent_ng_container_4_mem_profile_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mem-profile-img", 19);
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx_r39.sus.root.us.avatarUrl);
} }
function SignUpComponent_ng_container_4_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function SignUpComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_ng_container_4_mem_profile_img_2_Template, 1, 1, "mem-profile-img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignUpComponent_ng_container_4_mat_spinner_3_Template, 1, 0, "mat-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r34.sus.root.ups.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.sus.root.ups.loading);
} }
function SignUpComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " email is not valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " name is not valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password is not valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_ng_container_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r41.sus.errorMessage, " ");
} }
function SignUpComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_ng_container_25_div_1_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r38.sus.errorMessage);
} }
const _c0 = function (a0) { return { "valid": a0 }; };
//endregion
class SignUpComponent {
    constructor(sus, fb) {
        this.sus = sus;
        this.fb = fb;
        window['signupForm'] = this;
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
    }
    get email() {
        return this.signupForm.get('email');
    }
    get name() {
        return this.signupForm.get('name');
    }
    get password() {
        return this.signupForm.get('password');
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_stores_views_signup_store__WEBPACK_IMPORTED_MODULE_2__["SignupStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["mem-sign-up"]], decls: 26, vars: 14, consts: [[1, "sign-up-form"], [1, "form-wrapper"], [1, "main-title"], [4, "mobxAutorun"], [1, "sign-up-form-form", 3, "formGroup", "ngSubmit"], ["for", "photo-input", 1, "form-label", "btn"], ["id", "photo-input", "type", "file", "name", "file", "hidden", "", 3, "change"], ["for", "email-input", 1, "form-label"], ["formControlName", "email", "id", "email-input", "type", "email", "placeholder", "enter your email", 1, "signup-form-input", 3, "ngClass"], ["class", "form-validation", 4, "ngIf"], ["for", "name-input", 1, "form-label"], ["formControlName", "name", "id", "name-input", "type", "text", "placeholder", "enter your name", 1, "signup-form-input", 3, "ngClass"], ["for", "password-input", 1, "form-label"], ["formControlName", "password", "id", "password-input", "type", "password", "placeholder", "create password", 1, "signup-form-input", 3, "ngClass"], [1, "input-hint"], ["type", "submit", 1, "submit-btn", "btn", 3, "disabled"], [1, "signup-photo"], [3, "url", 4, "ngIf"], [4, "ngIf"], [3, "url"], [1, "form-validation"], ["class", "form-validation submitted", 4, "ngIf"], [1, "form-validation", "submitted"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignUpComponent_ng_container_4_Template, 4, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_5_listener() { return ctx.sus.handleSignUp(ctx.signupForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Upload Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SignUpComponent_Template_input_change_8_listener($event) { return ctx.sus.root.us.onProfilePictureUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignUpComponent_div_12_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignUpComponent_div_16_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " *minimum 6 characters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignUpComponent_div_22_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignUpComponent_ng_container_25_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.email.valid && ctx.email.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.email.valid && (ctx.email.dirty || ctx.email.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.name.valid && ctx.name.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.name.valid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.password.valid && ctx.password.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.password.valid && (ctx.password.dirty || ctx.password.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signupForm.valid || ctx.signupForm.pristine);
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_3__["MobxAutorunDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_5__["ProfileImgComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL3ZpZXdzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mem-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _stores_views_signup_store__WEBPACK_IMPORTED_MODULE_2__["SignupStore"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/user-profile/user-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _stores_entities_user_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/entities/user.store */ "./src/app/stores/entities/user.store.ts");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-angular */ "../../node_modules/mobx-angular/__ivy_ngcc__/fesm2015/mobx-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/profile-img/profile-img.component */ "./src/app/components/profile-img/profile-img.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/post/post.component */ "./src/app/components/post/post.component.ts");

//region imports








function UserProfileComponent_div_2_mem_profile_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mem-profile-img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imgClicked", function UserProfileComponent_div_2_mem_profile_img_1_Template_mem_profile_img_imgClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.us.root.ps.openImgDialog($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("url", ctx_r20.us.root.log.currentUser.avatar);
} }
function UserProfileComponent_div_2_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
function UserProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserProfileComponent_div_2_mem_profile_img_1_Template, 1, 1, "mem-profile-img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserProfileComponent_div_2_mat_spinner_2_Template, 1, 0, "mat-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r18.us.root.ups.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.us.root.ups.loading);
} }
function UserProfileComponent_div_10_mem_post_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mem-post", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("postDeleted", function UserProfileComponent_div_10_mem_post_1_Template_mem_post_postDeleted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.us.root.ps.deletePost($event); })("postLiked", function UserProfileComponent_div_10_mem_post_1_Template_mem_post_postLiked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.us.root.likeStore.handleLike($event); })("dashboardClicked", function UserProfileComponent_div_10_mem_post_1_Template_mem_post_dashboardClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.us.root.fs.handLikesleDialog($event); })("imgClicked", function UserProfileComponent_div_10_mem_post_1_Template_mem_post_imgClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.us.root.ps.openImgDialog($event); })("editClicked", function UserProfileComponent_div_10_mem_post_1_Template_mem_post_editClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r31.us.root.fs.handleEditPostDialog($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", post_r25)("currentUser", ctx_r24.us.root.log.currentUser);
} }
function UserProfileComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserProfileComponent_div_10_mem_post_1_Template, 1, 2, "mem-post", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r19.us.root.ps.userPosts);
} }
//endregion
class UserProfileComponent {
    constructor(us) {
        this.us = us;
        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.us.root.ps.getPosts();
        }))();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_entities_user_store__WEBPACK_IMPORTED_MODULE_2__["UserStore"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["mem-user-profile"]], decls: 11, vars: 2, consts: [[1, "user-profile-wrapper"], [1, "user-card"], ["class", "user-picture", 4, "mobxAutorun"], ["for", "photo-input", 1, "form-label", "btn"], ["id", "photo-input", "type", "file", "name", "file", "hidden", "", 3, "change"], [1, "user-name"], [1, "user-details"], ["class", "posts-container", 4, "mobxAutorun"], [1, "user-picture"], [3, "url", "imgClicked", 4, "ngIf"], [4, "ngIf"], [3, "url", "imgClicked"], [1, "posts-container"], [3, "post", "currentUser", "postDeleted", "postLiked", "dashboardClicked", "imgClicked", "editClicked", 4, "ngFor", "ngForOf"], [3, "post", "currentUser", "postDeleted", "postLiked", "dashboardClicked", "imgClicked", "editClicked"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserProfileComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Change Profile Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserProfileComponent_Template_input_change_5_listener($event) { return ctx.us.onProfilePictureUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserProfileComponent_div_10_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.us.root.log.currentUser.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.us.root.log.currentUser.email, " ");
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_3__["MobxAutorunDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_profile_img_profile_img_component__WEBPACK_IMPORTED_MODULE_5__["ProfileImgComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tZW1lei9zcmMvYXBwL3ZpZXdzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mem-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _stores_entities_user_store__WEBPACK_IMPORTED_MODULE_2__["UserStore"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
//region imports




//endregion
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/idanyadgar/Documents/class-projects/memez/client/memez/projects/memez/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map