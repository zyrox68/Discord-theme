// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        chrome.tabs.insertCSS(null, {file: "content.css"});
      }
    }
  );
  