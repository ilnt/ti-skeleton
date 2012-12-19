/**
 * ui/SubView.js
 * application sub view
 */

function SubView() {
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
		text: "Second View",
		color: "#fff",
		font: {fontSize:"18dip"}
	});
	header.add(title);
	
	// menu
	var menu = {
		"Menu 1": {
			click: function (event, title, index) {
				alert(index + 1 + "番目のボタンです");
			}
		},
		"Menu 2": {
			click: function (e, t) {
				alert(t);
			}
		},
		"Menu 3": {
			click: function (e, t) {
				alert(t);
			}
		},
		"Menu 4": {
			click: function (e, t) {
				alert(t);
			}
		},
		"Menu 5": {
			click: function (e, t) {
				alert(t);
			}
		},
		"Menu 6": {
			click: function (e, t) {
				alert(t);
			}
		},
		"Menu 7": {
			click: function (e, t) {
				alert(t);
			}
		}
	};
	// Android のみ Exit メニューを追加
	if (Ti.Platform.Android)
		menu.Exit = {
			click: function () {
				g.createWindow.remove(true);
			}
		};
	g.createMenu(view, menu, true);
	
	// content
	var text = Ti.UI.createLabel({
		color: "#000",
		font: {fontSize: g.dip(18)},
		text: "Android ICS のようなメニューを実装してみました。\n(Android, iOS 対応)"
	});
	inner.add(text);
	
	return view;
}

module.exports = SubView;