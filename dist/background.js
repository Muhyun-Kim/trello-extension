/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

// background.ts
console.log("Background script is running.");
// 콘텐츠 스크립트로부터 메시지를 받으면 콘솔에 출력
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("Message from content script:", message);
    sendResponse({ message: "hello" });
});

/******/ })()
;
//# sourceMappingURL=background.js.map