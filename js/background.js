/*
	Clickbaitblock - blocks you from loading clickbait sites in chrome
    Copyright (C) 2015  Tiago Roque Medeiros

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

*/


chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		
		// first we grab only the hostname
		var a = document.createElement('a');
		a.href = details.url;
		domain = a.hostname;
		
		// Strip out any www. 
		if ( a.hostname.indexOf("www.") == 0 ){
			domain = domain.replace(/([a-zA-Z0-9]+.)/,"");
		}
		// so now that we have a clean domain, compare it with the list:
		if ( clickbaits.indexOf( domain ) != -1 ){
			return {
				redirectUrl : "chrome-extension://"+window.location.hostname+"/html/block.html"
			};
		}
	},{
		urls: ["<all_urls>"]
	},["blocking"]
);


