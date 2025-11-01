var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

	var NS4;
	var IE4;
	var mouse_top;
	var mouse_left;
	var scroll_top;
	var scroll_left;
	var event_id = "none";
	var status_over = false;	
	var parent_menu_name = "menu_parent";
	var child_menu_array = ["menu_child1", "menu_child2", "menu_child3","menu_child4"];
	var submenu_left_indent = 70;
	var column_height = 18;
	var submenu_top_indent = 0;
	var mainmenu_top_indent = 0;	
	var menuover_bgcolor = "#C9CDD1";
	var menuover_fgcolor = "#ffffff";
	var default_menuover_bgcolor = "#ffffff";
	var default_menuover_fgcolor = "#000000";
	
	NS4 = (document.layers);
	IE4 = (document.all);
	isWin = (navigator.appVersion.indexOf("Win") != -1)
	
	if (NS4) {
		document.captureEvents(Event.CLICK)
		document.onclick = MouseDown;
	} else if (IE4) {
		document.onclick = MouseDown;
	}
	
	function startIt() {
	}
	
	function menuOver(ar_obj, ar_id) {
		status_over = true;
		changeColor(ar_obj);
		hideChild(event_id);
		viewSubMenu(event, ar_obj, ar_id);
				
	}
	
	function SubmenuOver(ar_obj) {
		status_over = true;
		changeColor(ar_obj);
	}
	
	function MouseDown(e) {
		event_target = event.srcElement;
		event_target = event_target.toString();
		event_check = event_target.indexOf("javascript:PZPopup(");		
		
		
		if (!status_over) hideAll();
		if (!event_check) 
			viewMenu(event,  parent_menu_name);
		else {
			event_check = event_target.indexOf("javascript:PZPopup_top(");
			if (!event_check) 
				viewMenu_top(event,  parent_menu_name);
			else{
				if (!status_over) hideAll();
				return;
			}
		}
	}	
	
	function hideChild(ar_id) {
		if (event_id == "none") return;
		var menu_len = child_menu_array.length;
		for (i=0; i<menu_len; i++) eval(child_menu_array[i] + ".style.display = \"none\"");
	}
	
	function hideAll() {
		eval(parent_menu_name + ".style.display = \"none\"");
		if (event_id == "none") return;
		var menu_len = child_menu_array.length;
		for (i=0; i<menu_len; i++) eval(child_menu_array[i] + ".style.display = \"none\"");
	}

	function viewMenu(e, ar_id) {
		if (ar_id == "none") return;
		menuLocBod = window.document.body;
		xPos = menuLocBod.scrollLeft + event.clientX;
		yPos = event.clientY + menuLocBod.scrollTop;
		screen_height = window.document.body.offsetHeight;
		screen_width = window.document.body.offsetWidth;
		mouse_top = e.y;
		mouse_left = e.x;
		eval("mainmenu_top_indent = " + parent_menu_name + ".children[0].children[0].children.length");
		mainmenu_top_indent = mainmenu_top_indent * column_height;
		if (screen_height > mouse_top + mainmenu_top_indent) 
			yPos = event.clientY + menuLocBod.scrollTop;
		else
			yPos = (event.clientY + menuLocBod.scrollTop) - mainmenu_top_indent;

		if (mouse_top - mainmenu_top_indent < 0) 
			yPos = event.clientY + menuLocBod.scrollTop;
			
		eval(ar_id + ".style.pixelTop =" + yPos);
		eval(ar_id + ".style.pixelLeft =" + xPos);		
		eval(ar_id + ".style.display = \"\"");
	}
	
	function viewSubMenu(e, ar_obj, ar_id) {
		if (ar_id == "none") return;
		event_id = ar_id;
		parent_top = menu_parent.style.pixelTop;
		parent_left = menu_parent.style.pixelLeft;
		child_top = ar_obj.style.pixelTop;
		child_left = ar_obj.style.pixelLeft;
		screen_height = window.document.body.offsetHeight;
		screen_width = window.document.body.offsetWidth;
		mouse_top = e.y;
		mouse_left = e.x;
		menuLocBod = window.document.body;
		xPos = menuLocBod.scrollLeft + parent_left + submenu_left_indent;
		eval("submenu_top_indent = " + ar_id + ".children[0].children[0].children.length");
		submenu_top_indent = submenu_top_indent * column_height;
		if (screen_height > mouse_top + submenu_top_indent) 
			yPos = event.clientY + menuLocBod.scrollTop;
		else
			yPos = (event.clientY + menuLocBod.scrollTop) - submenu_top_indent;
		
		if (mouse_top - submenu_top_indent < 0) 
			yPos = event.clientY + menuLocBod.scrollTop;
			
		eval(ar_id + ".style.pixelTop =" + yPos);
		eval(ar_id + ".style.pixelLeft =" + xPos);		
		eval(ar_id + ".style.display = \"\"");
	}
		
	function menuOut(ar_obj) {
		status_over = false;
		changeColor(ar_obj);
	}
	
	function changeColor(ar_obj) {
		if (ar_obj.children[0].style.color == menuover_fgcolor) {
			ar_obj.children[0].style.color = default_menuover_fgcolor;
			ar_obj.children[0].style.backgroundColor = default_menuover_bgcolor;
		} else {
			ar_obj.children[0].style.backgroundColor = menuover_bgcolor;
			ar_obj.children[0].style.color = menuover_fgcolor;
		}
		
	}
	
	function viewMenu_top(e, ar_id) {
		if (ar_id == "none") return;
		menuLocBod = window.document.body;
		xPos = menuLocBod.scrollLeft + event.clientX;
		yPos = event.clientY + menuLocBod.scrollTop;
		screen_height = window.document.body.offsetHeight;
		screen_width = window.document.body.offsetWidth;
		mouse_top = e.y+100;
		mouse_left = e.x;
		eval("mainmenu_top_indent = " + parent_menu_name + ".children[0].children[0].children.length");
		mainmenu_top_indent = mainmenu_top_indent * column_height;

		if (screen_height > mouse_top + mainmenu_top_indent) 
			yPos = event.clientY + menuLocBod.scrollTop;
		else
			yPos = (event.clientY + menuLocBod.scrollTop) - mainmenu_top_indent;

		if (mouse_top - mainmenu_top_indent < 0) 
			yPos = event.clientY + menuLocBod.scrollTop;
			
		eval(ar_id + ".style.pixelTop =" + (yPos-10));
		eval(ar_id + ".style.pixelLeft =" + xPos);		
		eval(ar_id + ".style.display = \"\"");
	}	



}
/*
     FILE ARCHIVED ON 18:26:10 Aug 20, 2005 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:57:13 Sep 22, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.638
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.01
  esindex: 0.013
  cdx.remote: 48.477
  LoadShardBlock: 204.616 (3)
  PetaboxLoader3.datanode: 207.128 (4)
  load_resource: 173.63
  PetaboxLoader3.resolve: 112.107
*/