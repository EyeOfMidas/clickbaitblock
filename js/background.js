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
		
		// first we clean the URL:
		var domain = details.url;
		domain = domain.substring( domain.indexOf("://")+3);
		domain = domain.substring( 0,domain.indexOf("/"));
		
		// ok, we got a clean domain now. Onto clearing out the "www" if any!
		if ( domain.indexOf("www.") != -1 ){
			domain = domain.substring( 4 );
		}
		
		// so now that we have a clean domain, compare it with the list:
		if ( clickbaits.indexOf( domain ) != -1 ){
			return {cancel: details.url.indexOf(domain) != -1};
		}
	},{
		urls: ["<all_urls>"]
	},["blocking"]
);


