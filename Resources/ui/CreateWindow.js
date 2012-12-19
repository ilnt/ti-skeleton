/**
 * ui/CreateWindow.js
 * create window
 */

function create(g) {
	var opendWindows = [];
	
	function createWindow(options) {
		// Ti.UI.createWindow wrapper
		var win = Ti.UI.createWindow(options);
		g.currentWindow = win;
		win.addEventListener("focus", function () {
			g.currentWindow = win;
		});
		win.addEventListener("close", function () {
			opendWindows.pop();
		});
		opendWindows.push(win);
		return win;
	}
	
	function loadView(path) {
		// require wrapper
		return require(path).call(g);
	}
	
	this.remove = function (exit) {
		// 引数に true を指定すると全ての Window を閉じます
		opendWindows.slice(Ti.Platform.Android && exit ? 0 : 1)
			.forEach(function (win) {
				win.close();
			});
	};
	
	this.main = function () {
		var win = createWindow({
			backgroundColor: "#fff",
			navBarHidden: true,
			exitOnClose: true
		});
		
		var view = loadView("ui/MainView");
		win.add(view);
		
		return win;
	};
	
	this.second = function () {
		var win = createWindow({
			backgroundColor: "#fff",
			navBarHidden: true,
			exitOnClose: false
		});
		
		var view = loadView("ui/SecondView");
		win.add(view);
		
		return win;
	};
}

module.exports = function () {
	return new create(this);
};