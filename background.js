
var crazyLinker = {
  /**
   * Google search url.
   *
   * @type {string}
   * @private
   */
  // searchOnGoogle: 'https://www.googleapis.com/customsearch/v1?' +
  searchOnGoogle: 'https://www.google.com/search?q=',

  /**
   * Parses page to find TITLE string
   * Uses title string to query google
   * Navigates to first result
   *
   * @public
   */
  refresh: function() {
    var title, url, html, elem;    
    title = document.title

    chrome.tabs.getSelected(null, function(tab) { //<-- "tab" has all the information
      var url = 'https://www.google.com/search?q='+encodeURIComponent(tab.title)
      
      // chrome.tabs.executeScript(tab.id, {code:"window.location = '"+url+"';"}, function() { v=1; })
      chrome.tabs.create({'url': url}, function(tab) {
      
        // chrome.tabs.executeScript(tab.id, {code:""})

        // Zepto(function($){
        //   _.each( $('a'), function(a) {

        //   });
        // });
      });
    });
  }
};


// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(crazyLinker.refresh);

chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});

// var i = 0;
// window.setInterval(function() {
//   chrome.browserAction.setBadgeText({text:String(i)});
//   i++;
// }, 10);
