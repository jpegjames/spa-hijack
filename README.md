spa-hijack
==========

A simple little jQuery script that 'hijacks' all standard anchor hrefs and loads them via AJAX to create easy Single Page Application (SPA) prototypes.


Usage
--------------

To use hijack.js, simply load jQuery (the example below uses jQuery from Google's CDN but you can use it from your own server) and then simply load the hijack.js file:
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="hijack.js"></script>

Thats it! There are no options (yet).


Example Meta Tags
--------------

	<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
	<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" media="(device-height: 568px)">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />


The Future
--------------

This simple script was created for students in one of my classes so they can make mobile apps with just using standard HTTP requests. While the intent of this script is to be used for prototypes, there are many other customizable options I plan to add. 