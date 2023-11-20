chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes("arxiv.org")) {
      chrome.action.setPopup({ tabId, popup: "index.html" });
    }
  });
  
  chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId, tab => {
      if (tab.url && tab.url.includes("arxiv.org")) {
        chrome.action.setPopup({ tabId: activeInfo.tabId, popup: "index.html" });
      }
    });
  });
  