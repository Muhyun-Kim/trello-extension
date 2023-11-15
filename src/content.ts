// content.ts
console.log("Content script is running.");

// 백그라운드 스크립트로 메시지를 보내고 응답을 받음
chrome.runtime.sendMessage({ message: "Hello from content script" }, response => {
  console.log("hello:", response);
});
