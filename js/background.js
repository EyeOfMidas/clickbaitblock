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


