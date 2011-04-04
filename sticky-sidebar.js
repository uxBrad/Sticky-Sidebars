/*!
 * Copyright (c) 2011 Brad Cooper | http://willworkforart.net
 * Licensed under GNU General Public License v3
 * Date: 04/03/2011
 * @author: Brad Cooper
 * @version: 0.2011.7
 *
 * http://willworkforart.net/
 */
 
/*jslint white: true, onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, strict: true, browser: true, windows: true */
/*global window */
function stickySidebar() {
	"use strict";
	var theSidebar, originalSidebarPosition;
	theSidebar = document.getElementById("sidebar");

	//If the Sidebar doesn't exist - kick out
	if (!theSidebar) { return; }
	
	//Get the original position of the sidebar and keep for later
	originalSidebarPosition = theSidebar.offsetTop;
	
	//Figure out how far the page has scrolled (not consistent between browsers) ...
	function getScrollFromTop() {
		var thePosition = window.pageYOffset;
		if (thePosition === undefined) { thePosition = document.documentElement.scrollTop; }
		return thePosition;
	}
	
	//What to do when scrolling
	window.onscroll = function () {
		if (getScrollFromTop() <= originalSidebarPosition) {
			theSidebar.style.position = "inherit";
		} else {
			theSidebar.style.position = "fixed";
			theSidebar.style.top = "0px";
		}				
	};
}
window.onload = stickySidebar;