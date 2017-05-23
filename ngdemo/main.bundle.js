webpackJsonp([2,6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_menu_card_menu_card_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__how_it_works_how_it_works_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__messages_messages_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__how_it_works_detail_how_it_works_detail_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__resolvers_faq_resolver_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_data_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__menu_menu_card_menu_card_component__["a" /* MenuCardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__how_it_works_how_it_works_component__["a" /* HowItWorksComponent */],
            __WEBPACK_IMPORTED_MODULE_10__how_it_works_detail_how_it_works_detail_component__["a" /* HowItWorksDetailComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__messages_messages_module__["a" /* MessagesModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'menu',
                    component: __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__["a" /* MenuComponent */]
                },
                {
                    path: "",
                    redirectTo: "menu",
                    pathMatch: "full"
                },
                {
                    path: 'how/:id',
                    component: __WEBPACK_IMPORTED_MODULE_10__how_it_works_detail_how_it_works_detail_component__["a" /* HowItWorksDetailComponent */],
                    pathMatch: 'full',
                    resolve: {
                        questions: __WEBPACK_IMPORTED_MODULE_11__resolvers_faq_resolver_service__["a" /* FaqResolverService */]
                    }
                },
                {
                    path: 'how',
                    component: __WEBPACK_IMPORTED_MODULE_8__how_it_works_how_it_works_component__["a" /* HowItWorksComponent */]
                },
                {
                    path: 'settings',
                    loadChildren: './settings/settings.module#SettingsModule'
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__resolvers_faq_resolver_service__["a" /* FaqResolverService */], __WEBPACK_IMPORTED_MODULE_12__services_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowItWorksDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HowItWorksDetailComponent = (function () {
    function HowItWorksDetailComponent(route) {
        this.route = route;
    }
    HowItWorksDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.question = _this.route.snapshot.data.questions[_this.id];
        });
    };
    return HowItWorksDetailComponent;
}());
HowItWorksDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-how-it-works-detail',
        template: __webpack_require__(176),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], HowItWorksDetailComponent);

var _a;
//# sourceMappingURL=how-it-works-detail.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowItWorksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HowItWorksComponent = (function () {
    function HowItWorksComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.questions = [];
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
        this.questions = this.dataService.getData();
    };
    HowItWorksComponent.prototype.onQuestionClicked = function (id) {
        this.router.navigate(["how/" + id]);
    };
    return HowItWorksComponent;
}());
HowItWorksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'how-it-works',
        template: __webpack_require__(177),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], HowItWorksComponent);

var _a, _b;
//# sourceMappingURL=how-it-works.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuCardComponent = (function () {
    function MenuCardComponent() {
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    return MenuCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], MenuCardComponent.prototype, "img", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], MenuCardComponent.prototype, "description", void 0);
MenuCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'menu-card',
        template: __webpack_require__(178),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [])
], MenuCardComponent);

//# sourceMappingURL=menu-card.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
        this.foodList = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.foodList = [
            {
                pictureUrl: 'assets/food1.jpeg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nostra odio arcu facilisi: Iaculis gravida fames ad ante curae; libero auctor, vivamus conubia facilisis nam vivamus. Per tristique massa ornare euismod pulvinar, pharetra dictumst libero quisque ad: Taciti dui posuere placerat rhoncus curae; venenatis: Dictum senectus donec fames ornare felis... Neque ornare porttitor fermentum scelerisque sagittis... '
            },
            {
                pictureUrl: 'assets/food2.jpeg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nostra odio arcu facilisi: Iaculis gravida fames ad ante curae; libero auctor, vivamus conubia facilisis nam vivamus. Per tristique massa ornare euismod pulvinar, pharetra dictumst libero quisque ad: Taciti dui posuere placerat rhoncus curae; venenatis: Dictum senectus donec fames ornare felis... Neque ornare porttitor fermentum scelerisque sagittis... '
            },
            {
                pictureUrl: 'assets/food3.jpeg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nostra odio arcu facilisi: Iaculis gravida fames ad ante curae; libero auctor, vivamus conubia facilisis nam vivamus. Per tristique massa ornare euismod pulvinar, pharetra dictumst libero quisque ad: Taciti dui posuere placerat rhoncus curae; venenatis: Dictum senectus donec fames ornare felis... Neque ornare porttitor fermentum scelerisque sagittis... '
            },
            {
                pictureUrl: 'assets/food4.jpeg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nostra odio arcu facilisi: Iaculis gravida fames ad ante curae; libero auctor, vivamus conubia facilisis nam vivamus. Per tristique massa ornare euismod pulvinar, pharetra dictumst libero quisque ad: Taciti dui posuere placerat rhoncus curae; venenatis: Dictum senectus donec fames ornare felis... Neque ornare porttitor fermentum scelerisque sagittis... '
            },
            {
                pictureUrl: 'assets/food5.jpeg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nostra odio arcu facilisi: Iaculis gravida fames ad ante curae; libero auctor, vivamus conubia facilisis nam vivamus. Per tristique massa ornare euismod pulvinar, pharetra dictumst libero quisque ad: Taciti dui posuere placerat rhoncus curae; venenatis: Dictum senectus donec fames ornare felis... Neque ornare porttitor fermentum scelerisque sagittis... '
            }
        ];
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__(179),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inbox_inbox_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__empty_empty_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__empty_drafts_empty_drafts_component__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var config = [
    {
        path: 'messages',
        component: __WEBPACK_IMPORTED_MODULE_3__messages_component__["a" /* MessagesComponent */],
        children: [
            {
                path: 'inbox',
                component: __WEBPACK_IMPORTED_MODULE_4__inbox_inbox_component__["a" /* InboxComponent */],
            },
            {
                path: 'sent',
                component: __WEBPACK_IMPORTED_MODULE_5__empty_empty_component__["a" /* EmptyComponent */],
            },
            {
                path: 'drafts',
                component: __WEBPACK_IMPORTED_MODULE_6__empty_drafts_empty_drafts_component__["a" /* EmptyDraftsComponent */],
            },
            {
                path: "",
                redirectTo: 'inbox',
                pathMatch: "full"
            }
        ]
    }
];
var MessagesRoutingModule = (function () {
    function MessagesRoutingModule() {
    }
    return MessagesRoutingModule;
}());
MessagesRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(config)
        ],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
    })
], MessagesRoutingModule);

//# sourceMappingURL=messages-routing.module.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inbox_inbox_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empty_empty_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages_routing_module__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__empty_drafts_empty_drafts_component__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MessagesModule = (function () {
    function MessagesModule() {
    }
    return MessagesModule;
}());
MessagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__messages_routing_module__["a" /* MessagesRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_3__inbox_inbox_component__["a" /* InboxComponent */],
            __WEBPACK_IMPORTED_MODULE_4__empty_empty_component__["a" /* EmptyComponent */],
            __WEBPACK_IMPORTED_MODULE_6__empty_drafts_empty_drafts_component__["a" /* EmptyDraftsComponent */]
        ]
    })
], MessagesModule);

//# sourceMappingURL=messages.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqResolverService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqResolverService = (function () {
    function FaqResolverService(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    FaqResolverService.prototype.resolve = function () {
        var faqs = this.dataService.getData();
        if (faqs.length == 0) {
            this.router.navigate(['how']);
            return null;
        }
        return faqs;
    };
    return FaqResolverService;
}());
FaqResolverService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], FaqResolverService);

var _a, _b;
//# sourceMappingURL=faq-resolver.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".logo{\n    font-size: 20px !important;\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".message{\n    margin-top: 100px;\n    font-size: 80px;\n    color: #555;\n    display: table;\n    margin: 150px auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".list{\n    margin-top: 50px;\n    width: 50%;\n    padding: 10px;\n}\n\n.list-right{\n    float: right;\n}\n\n.list-left{\n    float: left;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".messages-content{\n    margin-top: 50px;\n}\n\n.messages-nav{\n    background-color: lightgray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<ul id=\"dropdown1\" class=\"dropdown-content\">\n  <li><a routerLink=\"settings\">Settings</a></li>\n  <li><a href=\"#\">My Profile</a></li>\n  <li class=\"divider\"></li>\n  <li><a href=\"#!\">Logout</a></li>\n</ul>\n<nav>\n  <div class=\"nav-wrapper\">\n    <ul class=\"left hide-on-med-and-down\">\n      <li><a  class=\"logo\">NgEatery!</a></li> \n    </ul>\n    <ul class=\"right hide-on-med-and-down\">\n      <li routerLinkActive=\"active\"><a routerLink=\"menu\">Menu</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"how\">How it works</a></li>\n      <li routerLinkActive=\"active\" ><a routerLink=\"messages\">Messages</a></li>\n      <li><a class=\"dropdown-button\" href=\"#!\" data-activates=\"dropdown1\">Hi, Dummy<i class=\"material-icons right\">arrow_drop_down</i></a></li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <h3 class=\"title\">#{{id}}</h3>\n  <h4>{{question.question}}</h4>\n  <h5>{{question.answer}}</h5>\n</div>"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <h4 class=\"title\">How it works</h4>\n  <hr/>\n  <div class=\"collection\">\n    <a *ngFor=\"let question of questions\" class=\"collection-item\" (click)=\"onQuestionClicked(question.id)\">\n      <p><strong>{{question.question}}</strong></p>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div class=\"card horizontal\">\n  <div class=\"card-image responsive-img\">\n    <img [src]=\"img\">\n  </div>\n  <div class=\"card-stacked\">\n    <div class=\"card-content\">\n      <p>{{description}}</p>\n    </div>\n    <div class=\"card-action\">\n      <a href=\"#\">Add to cart</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <h4 class=\"title\">Menu</h4>\n  <hr/>\n  <div class=\"list list-right\">\n    <menu-card *ngFor=\"let item of foodList\" [img]=\"item.pictureUrl\" [description]=\"item.description\"></menu-card>\n  </div>\n  <div class=\"list list-left\">\n    <menu-card *ngFor=\"let item of foodList\" [img]=\"item.pictureUrl\" [description]=\"item.description\"></menu-card>\n  </div>\n</div>\n\n  "

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<h5 class=\"title\">You haven't saved any drafts.</h5>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<h5 class=\"title\">You haven't sent any messages.</h5>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div class=\"collection\">\n  <a *ngFor=\"let message of messages\" class=\"collection-item\">\n        <p><strong>{{message.name}}</strong></p>\n        <div>{{message.message}}</div>\n      </a>\n</div>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content\">\n  <h4 class=\"title\">Messages</h4>\n  <hr/>\n   <nav>\n    <div class=\"nav-wrapper messages-nav\">\n      <ul class=\"left hide-on-med-and-down\">\n        <li  routerLinkActive=\"active\"><a routerLink=\"inbox\">Inbox</a></li>\n        <li  routerLinkActive=\"active\"><a routerLink=\"sent\" >Sent</a></li>\n        <li  routerLinkActive=\"active\"><a routerLink=\"drafts\">Drafts</a></li>\n      </ul>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(89);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
        this.data = [{
                id: 0,
                question: "Is it free?",
                answer: "Absolutely!"
            },
            {
                id: 1,
                question: "How much time does delivery take?",
                answer: "Instantly delivered through email"
            },
            {
                id: 2,
                question: "Do you have refund policy?",
                answer: "Yes. We refund upto 200%."
            }];
    }
    DataService.prototype.getData = function () {
        return this.data;
    };
    DataService.prototype.getDataCount = function () {
        return this.data.length;
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyDraftsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmptyDraftsComponent = (function () {
    function EmptyDraftsComponent() {
    }
    EmptyDraftsComponent.prototype.ngOnInit = function () {
    };
    return EmptyDraftsComponent;
}());
EmptyDraftsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-empty-drafts',
        template: __webpack_require__(180),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [])
], EmptyDraftsComponent);

//# sourceMappingURL=empty-drafts.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmptyComponent = (function () {
    function EmptyComponent() {
    }
    EmptyComponent.prototype.ngOnInit = function () {
    };
    return EmptyComponent;
}());
EmptyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-empty',
        template: __webpack_require__(181),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [])
], EmptyComponent);

//# sourceMappingURL=empty.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxComponent = (function () {
    function InboxComponent(route) {
        this.route = route;
        this.messages = [{
                name: "Dummy",
                message: "Do you have chocolate lava cheese burger?"
            },
            {
                name: "Support",
                message: "What the....... You serious bro?"
            },
            {
                name: "Dummy",
                message: "Yeah, I need something sweet and cheesy."
            },
            {
                name: "Support",
                message: "Well, ... yeah sure :|"
            },
            {
                name: "Dummy",
                message: "Great! 2 of them"
            },
        ];
    }
    InboxComponent.prototype.ngOnInit = function () {
    };
    return InboxComponent;
}());
InboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-inbox',
        template: __webpack_require__(182),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], InboxComponent);

var _a;
//# sourceMappingURL=inbox.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(route) {
        this.route = route;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        $('ul.tabs').tabs();
        this.route.data.subscribe(function (data) {
            console.log(data['messages']);
        });
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'messages',
        template: __webpack_require__(183),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], MessagesComponent);

var _a;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./settings/settings.module": [
		228,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 88;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(108);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        $(".button-collapse").sideNav();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(175),
        styles: [__webpack_require__(163)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.bundle.js.map