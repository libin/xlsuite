///// xl.setup /////
Ext.namespace('xl.setup');

xl.setup.generateFooterToolbar = function () {
  // logout button
  var logoutButton = new Ext.Toolbar.Button({
    text: 'Logout', 
    cls: "logoutButton",
      handler: function() {
      document.location = '/sessions/destroy';
    }
  });
  
  // print button
  var printButton = new Ext.Toolbar.Button ({
    text: 'Print',
    cls: "printButton",
    handler: function() {
      window.frames["center"].focus();
      window.frames["center"].print();
    }
  });
  
  // some no bug button
  
  var noMoreBugs = new Ext.Toolbar.Button({
	  tooltip: 'No More Bugs',
	  icon: xl.kIconPath + 'no_more_bugs.png',
	  cls: 'x-btn-icon',
	  id: 'no-more-bugs',
    handler: function(){
      xl.createTab("/admin/contact_requests/bug_buster");
    }
  });
  
  // resize columns button
  
  var resizeColumnsButton = new Ext.Toolbar.Button({
	  tooltip: 'Resize Columns',
	  icon: xl.kIconPath + 'application_side_contract.png',
	  cls: 'x-btn-icon',
	  id: 'btn-resize',
	  handler: function() {
	    if (xl.westPanel.getInnerWidth() == xl.kDefaultColumnWidth)
			xl.westPanel.setWidth(Ext.state.Manager.get('westPanel.width') || xl.kDefaultColumnWidth)
		else {
			Ext.state.Manager.set('westPanel.width', xl.westPanel.getInnerWidth());
			xl.westPanel.setWidth(xl.kDefaultColumnWidth);
		}
		
		if (xl.eastPanel.getInnerWidth() == xl.kDefaultColumnWidth)
			xl.eastPanel.setWidth(Ext.state.Manager.get('eastPanel.width') || xl.kDefaultColumnWidth)
		else {
			Ext.state.Manager.set('eastPanel.width', xl.eastPanel.getInnerWidth());
			xl.eastPanel.setWidth(xl.kDefaultColumnWidth);
		}
		
		xl.viewport.render();
	  }
  });
  
  return [ printButton, resizeColumnsButton, xl.copyrightHTML, ' ', noMoreBugs, logoutButton ];
}  // generateFooterToolbar

