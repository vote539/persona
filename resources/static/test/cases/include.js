/*jshint browsers:true, forin: true, laxbreak: true */
/*global test: true, start: true, stop: true, module: true, ok: true, equal: true, BrowserID: true */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
(function() {
  "use strict";

  module("include.js");

  test("navigator.id is available", function() {
    equal(typeof navigator.id, "object", "navigator.id namespace is available");
  });

  test("expected public API functions available", function() {
    _.each([
      "get",
      "request",
      "setLoggedInUser",
      "logout",
      "addEventListener",
      "removeEventListener"
    ], function(item, index) {
      equal(typeof navigator.id[ item ], "function", "navigator.id." + item + " is available");
    });
  });

}());

