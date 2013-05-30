// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!
 *
 * @type {string}
 */
var QUERY = 'crazylink';

var crazyLinker = {
  /**
   * Flickr URL that will give us lots and lots of whatever we're looking for.
   *
   * @type {string}
   * @private
   */
  // searchOnGoogle: 'https://www.googleapis.com/customsearch/v1?' +
  searchOnGoogle: 'https://www.google.com/search?q=',
      // 'method=flickr.photos.search&' +
      // 'api_key=90485e931f687a9b9c2a66bf58a3861a&' +
      // 'text=' + encodeURIComponent(QUERY) + '&' +
      // 'safe_search=1&' +
      // 'content_type=1&' +
      // 'sort=interestingness-desc&' +
      // 'per_page=20',

  /**
   * Parses page to find TITLE string
   * Uses title string to query google
   * Navigates to first result
   *
   * @public
   */
  refresh: function() {
    console.log('crazylinker.refresh')
    var url, html, elem;
    
    url = this.searchOnGoogle+encodeURIComponent(document.title);
    html = '<a href="'+url+'" id="search-link" class="link">Search on google</a>';
    elem = document.getElementById('content')
    // elem.appendChild(html)
    console.log(elem)

    // var req = new XMLHttpRequest();
    // req.open("GET", this.searchOnGoogle, true);
    // req.onload = this.showPhotos_.bind(this);
    // req.send(null);
  },

  /**
   * Handle the 'onload' event of our kitten XHR request, generated in
   * 'requestKittens', by generating 'img' elements, and stuffing them into
   * the document for display.
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
  showPhotos_: function (e) {
    var kittens = e.target.responseXML.querySelectorAll('photo');
    for (var i = 0; i < kittens.length; i++) {
      var img = document.createElement('img');
      img.src = this.constructKittenURL_(kittens[i]);
      img.setAttribute('alt', kittens[i].getAttribute('title'));
      document.body.appendChild(img);
    }
  },

  /**
   * Given a photo, construct a URL using the method outlined at
   * http://www.flickr.com/services/api/misc.urlKittenl
   *
   * @param {DOMElement} A kitten.
   * @return {string} The kitten's URL.
   * @private
   */
  constructKittenURL_: function (photo) {
    return "http://farm" + photo.getAttribute("farm") +
        ".static.flickr.com/" + photo.getAttribute("server") +
        "/" + photo.getAttribute("id") +
        "_" + photo.getAttribute("secret") +
        "_s.jpg";
  }
};

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  crazyLinker.refresh();
});
