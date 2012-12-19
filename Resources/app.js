/*
 * app.js
 * bootstrap 
 */

(function () {
	// gloval variables
	var g = {
		// dip scale
		dip: function (size) {return size + "dip"},
		// un dip scale
		udip: function (size) {return Number(String(size).split("dip").join(""))},
		// settings file
		config: null,
		// main window (ex. exit this app)
		mainWindow: null,
		// create new window
		createWindow: require("ui/CreateWindow"),
		// current window
		currentWindow: null,
		// create header menu
		createMenu: require("ui/CreateMenu"),
		// create loading view
		loadingView: null
	};
	// initialize CreateWindow
	g.createWindow = g.createWindow();
	// open main window
	g.createWindow.main().open();
})();