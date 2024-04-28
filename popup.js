document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('titleButton');
    const titleDisplay = document.getElementById('titleDisplay');
  
    button.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const currentTab = tabs[0];
        const tabTitle = currentTab.title;
        titleDisplay.textContent = tabTitle;
      });
    });
  });
  