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

function getCookie(name){ 
    var cname = name + "=";               
    var dc = document.cookie;             
 
    if (dc.length > 0) {              
     begin = dc.indexOf(cname);       
        
        if (begin != -1) {           
         begin += cname.length;       
         end = dc.indexOf(";", begin);
 
         if (end == -1) end = dc.length;
             return unescape(dc.substring(begin, end));
        } 
    }
    return "";
} 

function setCookie(name, value)
{
   var argv = setCookie.arguments;
   var argc = setCookie.arguments.length;
   var expires = (2 < argc) ? argv[2] : null;
   var path = (3 < argc) ? argv[3] : null;
   var domain = (4 < argc) ? argv[4] : null;
   var secure = (5 < argc) ? argv[5] : false;
   document.cookie = name + "=" + value +
        ((expires == null) ? "" : ("; expires="+expires.toGMTString())) +
     ((path == null) ? "" : ("; path=" + path)) +
     ((domain == null) ? "" : ("; domain=" + domain)) +
        ((secure == true) ? "; secure" : "");
        
}

if(getCookie("pcid") == null || getCookie("pcid") == ""){
  var cookieval = new Date();
  cookieval = cookieval.getTime();
  var rStr_1 = "" + Math.random();
  var rStr_2 = "" + Math.random();
  var rStr_3 = "" + Math.random();
  var rStr_4 = "" + Math.random();
  var rStr_5 = "" + Math.random();
  rStr_1 = rStr_1.charAt(2);
  rStr_2 = rStr_2.charAt(2);
  rStr_3 = rStr_3.charAt(2);
  rStr_4 = rStr_4.charAt(2);
  rStr_5 = rStr_5.charAt(2);

  var uv_expired_data = new Date(2011,1,1);
  cookieval = cookieval + rStr_1 + rStr_2 + rStr_3 + rStr_4 + rStr_5;
  
  setCookie("pcid", cookieval , uv_expired_data, "/", ".nate.com", false);
} 

}
/*
     FILE ARCHIVED ON 00:45:52 Jul 21, 2005 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:57:13 Sep 22, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.86
  exclusion.robots: 0.032
  exclusion.robots.policy: 0.015
  esindex: 0.021
  cdx.remote: 145.513
  LoadShardBlock: 253.301 (3)
  PetaboxLoader3.datanode: 390.837 (4)
  load_resource: 311.03
  PetaboxLoader3.resolve: 137.538
*/