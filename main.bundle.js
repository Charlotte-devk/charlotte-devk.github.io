webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nh2 {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: var(--title);\r\n  font-family: 'Courier New', Courier, monospace;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<header>\r\n  <h2>Simon Says</h2>\r\n</header>\r\n\r\n<app-game></app-game>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        /**
       * @remarks
       * This class links up the app-root selector used in the {@file index.html}
       * to the other components. For more details look {@file app.module.ts}
       *
       */
        this.title = 'simon';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_game_game_component__ = __webpack_require__("../../../../../src/app/components/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_game_button_button_component__ = __webpack_require__("../../../../../src/app/components/game/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_game_state_service__ = __webpack_require__("../../../../../src/app/services/game-state.service.ts");
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
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__components_game_game_component__["a" /* GameComponent */], __WEBPACK_IMPORTED_MODULE_4__components_game_button_button_component__["a" /* ButtonComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_game_state_service__["a" /* GameStateService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

/**
* @remarks
* This class imports the following components from the following files:
* {AppComponent app.component.ts},
* {GameComponent game.component.ts},
* {ButtonComponent button.component.ts},
* and the service from the following file:
* {GameStateService game-state.service.ts}
*/
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/game/button/button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n  width: 5.6rem;\r\n  height: 5.6rem;\r\n  border: 0.24rem solid;\r\n  border-radius: 4rem;\r\n  background-color: var(--background1);\r\n}\r\n\r\n.green {\r\n  border-color: var(--green);\r\n}\r\n\r\n.green:active,\r\n.green.active {\r\n  background-color: var(--green);\r\n}\r\n\r\n.blue {\r\n  border-color: var(--blue);\r\n}\r\n\r\n.blue:active,\r\n.blue.active {\r\n  background-color: var(--blue);\r\n}\r\n\r\n.red {\r\n  border-color: var(--red);\r\n}\r\n\r\n.red:active,\r\n.red.active {\r\n  background-color: var(--red);\r\n}\r\n\r\n.yellow {\r\n  border-color: var(--yellow);\r\n}\r\n\r\n.yellow:active,\r\n.yellow.active {\r\n  background-color: var(--yellow);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/button/button.component.html":
/***/ (function(module, exports) {

module.exports = "<button [ngClass]=\"{active: active}\" class=\"{{ color }}\" (click)=\"onClick()\"></button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/game/button/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = (function () {
    function ButtonComponent() {
        this.active = false;
        this.guess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    ButtonComponent.prototype.ngOnInit = function () { };
    /**
   * @remarks
   * This method send out the color saved in the html tag app-game-button.
   *
   */
    ButtonComponent.prototype.onClick = function () {
        this.guess.emit(this.color);
    };
    return ButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], ButtonComponent.prototype, "active", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], ButtonComponent.prototype, "guess", void 0);
ButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-game-button',
        template: __webpack_require__("../../../../../src/app/components/game/button/button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/game/button/button.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ButtonComponent);

var _a;
//# sourceMappingURL=button.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\np {\r\n  font-size: 2rem;\r\n}\r\n\r\n#restarter {\r\n  width: 140px;\r\n  height: 30px;\r\n  border-radius: 4rem;\r\n  background-color: var(--background3);\r\n  color: var(--button);\r\n  font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n.container {\r\n  background-color: var(--background1);\r\n  width: 480px;\r\n  margin: 0 auto;\r\n  border: 0.24rem solid;\r\n  border-radius: 0.4rem;\r\n}\r\n\r\n.flex {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin: 2rem;\r\n}\r\n\r\n.center {\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: baseline;\r\n      align-items: baseline;\r\n}\r\n\r\n.middle {\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"flex center\">\r\n    <app-game-button [active]=\"colors.red\" color=\"red\" (guess)=\"playerGuess($event)\"></app-game-button>\r\n  </div>\r\n\r\n  <div class=\"flex middle\">\r\n    <app-game-button [active]=\"colors.blue\" color=\"blue\" (guess)=\"playerGuess($event)\"></app-game-button>\r\n    <p>{{ count }}</p>\r\n    <app-game-button [active]=\"colors.green\" color=\"green\" (guess)=\"playerGuess($event)\"></app-game-button>\r\n  </div>\r\n\r\n  <div class=\"flex center\">\r\n    <app-game-button [active]=\"colors.yellow\" color=\"yellow\" (guess)=\"playerGuess($event)\"></app-game-button>\r\n  </div>\r\n\r\n  <div class=\"flex center\">\r\n      <button id=\"restarter\" (click)=\"onClick()\">Start</button>\r\n  </div>\r\n\r\n\r\n  <!-- Audio from https://codepen.io/sharonghae/full/dXOprE -->\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_state_service__ = __webpack_require__("../../../../../src/app/services/game-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_constants__ = __webpack_require__("../../../../../src/app/models/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var GameComponent = (function () {
    function GameComponent(game) {
        this.game = game;
        /**
       * @remarks
       * The GameComponent defines the selector app-game used in the {@file app.component.html}.
       * It also uses the actual running game state from {@file game-state.service.ts} to sync
       * the count and shows the player the colors of each new round.
       *
       * @param count - Counts the numbers of correct guesses and shows it as a score, resets when user guesses wrong.
       * @param colors - An object containing colornames of the type boolean to determine the actual color.
       *
       */
        this.running = false;
        this.sounds = {};
        this.colors = {
            red: false,
            blue: false,
            green: false,
            yellow: false
        };
        this.loadSounds();
    }
    /**
    * @remarks
    * This method loads all the sound files.
    */
    GameComponent.prototype.loadSounds = function () {
        var audioUrl1 = '../../../assets/sounds/simonSound1.mp3';
        var audioUrl2 = '../../../assets/sounds/simonSound2.mp3';
        var audioUrl3 = '../../../assets/sounds/simonSound3.mp3';
        var audioUrl4 = '../../../assets/sounds/simonSound4.mp3';
        this.sounds = {
            red: new Audio(audioUrl1),
            blue: new Audio(audioUrl2),
            green: new Audio(audioUrl3),
            yellow: new Audio(audioUrl4)
        };
    };
    /**
    * @remarks
    * This method plays specific sounds.
    *
    * @param color - Uses the color to get the sound.
    *
    */
    GameComponent.prototype.playAudio = function (color) {
        this.sounds[color].play();
    };
    /**
   * @remarks
   * This method initialises the game upon clicking the start button.
   * It also changes the "Start" on the start button to "Restart".
   * If the game is already running it skips generating a Round and only restarts it.
   */
    GameComponent.prototype.onClick = function () {
        var _this = this;
        if (!this.running) {
            document.getElementById("restarter").innerHTML = "Restart";
            this.game.state.subscribe(function (state) {
                console.log(state);
                if (_this.count != state.count) {
                    _this.count = state.count;
                    _this.teasePlayer(state.round);
                }
            });
            this.game.generateRound();
            this.running = true;
        }
        else {
            this.game.state.subscribe(function (state) {
                console.log(state);
                if (_this.count != state.count) {
                    _this.count = state.count;
                    _this.teasePlayer(state.round);
                }
                else if (_this.count === __WEBPACK_IMPORTED_MODULE_2__models_constants__["a" /* START_COUNT */]) {
                    _this.teasePlayer(state.round);
                }
            });
            this.game.restartGame();
        }
    };
    /**
   * @remarks
   * This method sends the event from the user pressing a button as a string to the {@method game.playerGuess()}.
   * See {@file button.component.ts}
   *
   * @param e - the event value of the app-game-button in the {@file game.component.html}
   *
   */
    GameComponent.prototype.playerGuess = function (e) {
        this.game.playerGuess(e);
        this.playAudio(e);
    };
    /**
   * @remarks
   * This method, using the Promise method in {@file constants.ts}. sets the active color to true after waiting for 1000ms
   * after waiting another 400ms it sets the active color to false again. The active colors are saved in the round array in {@file game-state.service.ts}
   *
   * @param round - A string array containing the colors of the going round.
   *
   */
    GameComponent.prototype.teasePlayer = function (round) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < round.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__models_constants__["c" /* sleep */])(1000)];
                    case 2:
                        _a.sent();
                        this.colors[round[i]] = true;
                        this.playAudio(round[i]);
                        return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__models_constants__["c" /* sleep */])(400)];
                    case 3:
                        _a.sent();
                        this.colors[round[i]] = false;
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return GameComponent;
}());
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-game',
        template: __webpack_require__("../../../../../src/app/components/game/game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/game/game.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_state_service__["a" /* GameStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_game_state_service__["a" /* GameStateService */]) === "function" && _a || Object])
], GameComponent);

var _a;
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return START_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sleep; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var COLORS;
(function (COLORS) {
    COLORS[COLORS["red"] = 0] = "red";
    COLORS[COLORS["green"] = 1] = "green";
    COLORS[COLORS["blue"] = 2] = "blue";
    COLORS[COLORS["yellow"] = 3] = "yellow";
})(COLORS || (COLORS = {}));
var START_COUNT = 1;
var sleep = function (time) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, time); })];
    });
}); };
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/services/game-state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_constants__ = __webpack_require__("../../../../../src/app/models/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameStateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameStateService = (function () {
    function GameStateService() {
        this.round = [];
        this.player = [];
        this.state = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.count = __WEBPACK_IMPORTED_MODULE_1__models_constants__["a" /* START_COUNT */];
    }
    Object.defineProperty(GameStateService.prototype, "randomColor", {
        /**
       * @remarks
       * This method uses a rounded random number to get one out of 4 colors in a string array.
       *
       * @returns - A random color saved in a string.
       *
       */
        get: function () {
            var index = Math.floor(Math.random() * 3.99);
            return __WEBPACK_IMPORTED_MODULE_1__models_constants__["b" /* COLORS */][index];
        },
        enumerable: true,
        configurable: true
    });
    /**
   * @remarks
   * This method empties the string array of round. By using the count value a new color is added to the round.
   * It sets this state as active and returns the newly filled string array.
   *
   * @returns - The same round filled with one more color.
   *
   */
    GameStateService.prototype.generateRound = function () {
        this.round = [];
        for (var i = 0; i < this.count; i++) {
            this.appendRound();
        }
        this.setState();
        return this.round;
    };
    /**
   * @remarks
   * This method increases the count when the player guessed right and adds a new color to the round.
   *
   * @param increment - If the player guessed right increment is true otherwise false.
   *
   */
    GameStateService.prototype.appendRound = function (increment) {
        if (increment === void 0) { increment = false; }
        if (increment) {
            this.count++;
        }
        this.round.push(this.randomColor);
    };
    /**
   * @remarks
   * This method sets the count to the default count constant and generates a new round.
   *
   * @returns - A new generated round with the count of 1.
   *
   */
    GameStateService.prototype.restartGame = function () {
        this.count = __WEBPACK_IMPORTED_MODULE_1__models_constants__["a" /* START_COUNT */];
        return this.generateRound();
    };
    /**
   * @remarks
   * This method adds a new color with the type string into the player array which contains the guesses.
   * The player array gets emptied after guessing all the colors and the state gets changed.
   *
   * @param val - The color the player picked as a string.
   *
   */
    GameStateService.prototype.playerGuess = function (val) {
        this.player.push(val);
        if (!this.compareRound()) {
            this.player = [];
        }
        this.setState();
    };
    /**
   * @remarks
   * This method compares the player picked colors to the round colors.
   *
   * @returns true - If the player guessed all colors correctly.
   * @returns false - If the player guessed incorrectly and restarts the game.
   *
   */
    GameStateService.prototype.compareRound = function () {
        for (var i = 0; i < this.player.length; i++) {
            if (this.player[i] !== this.round[i]) {
                this.restartGame();
                return false;
            }
        }
        if (this.player.length === this.round.length) {
            this.updateGame();
        }
        return true;
    };
    /**
   * @remarks
   * This method updates the game by adding a new color with the {@method appendRound()}
   * and resets the players guesses.
   *
   */
    GameStateService.prototype.updateGame = function () {
        this.appendRound(true);
        this.player = [];
    };
    /**
   * @remarks
   * This method sets the state of the game.
   *
   */
    GameStateService.prototype.setState = function () {
        this.state.next({
            player: this.player,
            round: this.round,
            count: this.count
        });
    };
    return GameStateService;
}());
GameStateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GameStateService);

//# sourceMappingURL=game-state.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map