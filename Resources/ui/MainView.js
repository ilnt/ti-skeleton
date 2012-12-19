/**
 * ui/MainView.js
 * application main view
 */

function MainView() {
	var g = this;
	
	// wrapper
	var view = Ti.UI.createView();
	
	// inner
	var inner = Ti.UI.createView({
		layout: "vertical"
	});
	view.add(inner);
	
	// header
	var header = Ti.UI.createView({
		height: g.dip(50),
		backgroundColor: "#4088bf"
	});
	inner.add(header);
	var title = Ti.UI.createLabel({
		height: g.dip(50),
		top: 0,
		left: g.dip(5),
		text: "Test App",
		color: "#fff",
		font: {fontSize:"18dip"}
	});
	header.add(title);
	
	// menu
	var menu = {
		"Second View": {
			click: function () {
				g.createWindow.second().open();
			}
		},
		"Long Menu Title": {
			click: function () {
				alert("clicked");
			}
		}
	};
	// add exit button (Android only)
	if (Ti.Platform.Android)
		menu.Exit = {
			click: function () {
				g.createWindow.remove(true);
			}
		};
	g.createMenu(view, menu);
	
	// content
	var text = Ti.UI.createLabel({
		color: "#000",
		font: {fontSize: g.dip(18)},
		text: "Hello World"
	});
	inner.add(text);
	
	return view;
}

module.exports = MainView;