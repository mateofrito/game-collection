parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WIWw":[function(require,module,exports) {
"use strict";function e(e,t,r){e.addEventListener(t,function(e){return r(e)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={on:e};exports.default=t;
},{}],"Yw/X":[function(require,module,exports) {
"use strict";function t(t,e){fetch(t).then(function(t){return t.json()}).then(function(t){return e(t)}).catch(function(t){return console.log(t)})}function e(t,e,n){fetch(t,{method:"POST",body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(t){return n(t)}).catch(function(t){return console.log(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={getRequest:t,postRequest:e};exports.default=n;
},{}],"iiHW":[function(require,module,exports) {
"use strict";function e(e){return e.map(function(a){return console.log(e),'\n                \n                <li class="game">\n                    <img class="game__imagepath" src="'.concat(a.imagePath,'"></img>\n                    <p><h3 class="game__title">').concat(a.gameTitle,'</h3>\n                    <h5 class="game__yearreleased">').concat(a.yearReleased,"</h5></p>\n                    \n                </li>\n            ")}).join("")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"2zLZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=n(require("./Games"));function n(e){return e&&e.__esModule?e:{default:e}}function a(n){return'\n    <div class="buttons">\n        <button class="console-trigger">Add Console</button>\n        <button class="game-trigger">Add Game</button>\n        <button class="company-trigger">Add Publisher/Manufacture</button>\n    </div>\n    <div class ="modal-console">\n        <div class="consolemodal-content">\n                <span class="close-button">X</span>\n                <input type="text" class="add-console__full-name" placeholder="Console Name">\n                <input type="text" class="add-console__short-name" placeholder="Console Short Name">\n                <input type="text" class="add-console__image-path" placeholder="image URL">\n                <input type="text" class="add-game_manufacture" placeholder="Manufacturer">\n                <button class="add-console__submit">Add Console</button>\n        </div>\n   </div>\n   <div class ="modal-game">\n               <div class="gamemodal-content">\n                       <span class="close-button2">X</span>\n                         <input type="text" class="add-game__name" placeholder="Game Title">\n                         <input type="text" class="add-game__yearreleased" placeholder="Year Released">\n                         <input type="text" class="add-game_publisher" placeholder="Publisher">\n                         <input type="text" class="add-console__forgames" placeholder="Console">\n                         <input type="text" class="add-game__image-path" placeholder="Image URL">\n                         <button class="add-game__submit">Add Game</button>\n                 </div>\n   </div>\n   <div class ="modal-company">\n   <div class="companymodal-content">\n           <span class="close-button3">X</span>\n           <input type="text" class="add-company__name" placeholder="Console Name">\n           <input type="text" class="add-company__image-path" placeholder="Company Logo">\n           \n           \n           <button class="add-company__submit">Add Company</button>\n   </div>\n</div>\n   \n      <ul class="consoles">\n        '.concat(n.map(function(n){return console.log(n),console.log(n.games),'\n           <li class="console">\n            <section class="console__header">\n                <img class="console__imagepath" src="'.concat(n.imagePath,'"></img>\n                <h3 class="console__name">').concat(n.consoleName,'</h3>\n            </section>\n            <ul class="games">\n            ').concat((0,e.default)(n.games),"\n            </ul>\n            </li>\n            ")}).join(""),"\n         \n          ")}
},{"./Games":"iiHW"}],"zmB/":[function(require,module,exports) {
"use strict";function n(n){return'\n        <ul id="tags">\n            '.concat(n.map(function(n){return'\n                    <li class="tag">'.concat(n.companyName,"</li>\n                ")}).join(""),"\n        </ul>\n        \n        ")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"GFX4":[function(require,module,exports) {
"use strict";var e=a(require("./utils/events/event-actions")),t=a(require("./utils/api/api-actions")),o=a(require("./components/Games")),n=a(require("./components/GameConsoles")),c=a(require("./components/Company"));function a(e){return e&&e.__esModule?e:{default:e}}function l(){t.default.getRequest("/consoles",function(e){console.log(e),r().innerHTML=(0,n.default)(e)}),e.default.on(r(),"click",function(){if(event.target.classList.contains("add-game__submit")){var e=document.querySelector(".add-game__name").value,n=document.querySelector(".add-game__yearreleased").value,c=document.querySelector(".add-game__image-path").value,a=document.querySelector(".add-console__forgames").value,l=document.querySelector(".add-game_publisher").value;t.default.postRequest("/games/add",{gameTitle:e,yearReleased:n,imagePath:c,company:l,gameConsole:a},function(e){return r().innerHTML=(0,o.default)(e)}),location.reload()}}),e.default.on(r(),"click",function(){if(event.target.classList.contains("add-console__submit")){var e=document.querySelector(".add-console__full-name").value,o=document.querySelector(".add-console__short-name").value,c=document.querySelector(".add-console__image-path").value,a=document.querySelector(".add-game_manufacture").value;t.default.postRequest("/consoles/add",{consoleName:e,shortName:o,imagePath:c,companyName:a},function(e){return r().innerHTML=(0,n.default)(e)})}}),e.default.on(r(),"click",function(){if(event.target.classList.contains("add-company__submit")){var e=document.querySelector(".add-company__name").value,o=document.querySelector(".add-company__image-path").value;t.default.postRequest("/company/add",{company:e,imagePath:o},function(e){return r().innerHTML=(0,c.default)(e)}),location.reload()}}),e.default.on(r(),"click",function(){if(event.target.classList.contains("console-trigger")){var e=function(){t.classList.toggle("show-consolemodal")},t=document.querySelector(".modal-console"),o=document.querySelector(".console-trigger"),n=document.querySelector(".close-button");o.addEventListener("click",e),n.addEventListener("click",e),window.addEventListener("click",function(o){o.target===t&&e()})}if(event.target.classList.contains("close-button")){n=document.querySelector(".close-button"),t=document.querySelector(".modal-console");n.addEventListener("click",function(){t.classList.toggle("show-consolemodal")})}if(event.target.classList.contains("game-trigger")){var c=function(){a.classList.toggle("show-gamemodal")},a=document.querySelector(".modal-game"),l=document.querySelector(".game-trigger"),r=document.querySelector(".close-button2");l.addEventListener("click",c),r.addEventListener("click",c),window.addEventListener("click",function(e){e.target===a&&c()})}if(event.target.classList.contains("close-button2")){n=document.querySelector(".close-button2"),a=document.querySelector(".modal-game");n.addEventListener("click",function(){a.classList.toggle("show-gamemodal")})}if(event.target.classList.contains("company-trigger")){var u=function(){s.classList.toggle("show-companymodal")},s=document.querySelector(".modal-company"),i=document.querySelector(".company-trigger"),d=document.querySelector(".close-button3");i.addEventListener("click",u),d.addEventListener("click",u),window.addEventListener("click",function(e){e.target===s&&u()})}if(event.target.classList.contains("close-button3")){n=document.querySelector(".close-button3"),s=document.querySelector(".modal-company");n.addEventListener("click",function(){s.classList.toggle("show-companymodal")})}})}function r(){return document.querySelector("#app")}l();
},{"./utils/events/event-actions":"WIWw","./utils/api/api-actions":"Yw/X","./components/Games":"iiHW","./components/GameConsoles":"2zLZ","./components/Company":"zmB/"}]},{},["GFX4"], null)
//# sourceMappingURL=/app.29321f4f.js.map