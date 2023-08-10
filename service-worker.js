// const LEETCODE_ORIGIN = 'https://*.leetcode.com';
// const welcomePage = 'sidepanels/welcome-sp.html';
// const mainPage = 'sidepanels/main-sp.html';
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "😄",
    });
  });

  const GOOGLE_ORIGIN = 'https://www.google.com';

  chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
    if (!tab.url) return;
    const url = new URL(tab.url);
    // Enables the side panel on google.com
    if (url.origin === GOOGLE_ORIGIN) {
      await chrome.sidePanel.setOptions({
        tabId,
        path: 'sidepanel.html',
        enabled: true
      });
    } else {
      // Disables the side panel on all other sites
      await chrome.sidePanel.setOptions({
        tabId,
        enabled: false
      });
    }
  });

// // debug onclick of icon
console.log("hello")
// chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
//     // if (!tab) return;
//     const url = new URL(tab.url);
//     // Enables the side panel on google.com
//     if (url.origin === LEETCODE_ORIGIN) {
//       await chrome.sidePanel.setOptions({
//         tabId,
//         path: 'sidepanel.html',
//         enabled: true
//       });
//     } else {
//       // Disables the side panel on all other sites
//       await chrome.sidePanel.setOptions({
//         tabId,
//         enabled: false
//       });
//     }
//   });

// // Allows users to open the side panel by clicking on the action toolbar icon
// chrome.sidePanel
//   .setPanelBehavior({ openPanelOnActionClick: true })
//   .catch((error) => console.error(error));
