/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
var regex = /http:\/\/douban\.fm\/\?start.*cid=0/g;


// Test the text of the body element against our regular expression.
if (regex.test(document.body.innerText)) {
  // The regular expression produced a match, so notify the background page.
	var musiclist=new Array();
		musiclist=document.body.innerText.match(regex);
		chrome.extension.connect().postMessage(musiclist);
		//location.href(musiclist[0]);
		//alert(musiclist);
} else {
  // No match was found.
  

}
