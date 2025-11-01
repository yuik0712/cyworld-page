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

<!--
// Last Modified On : 2004.09.21
// Script Version   : v1.02
//

var s=new Date();
var ServerIp = "203.226.254.152"
var port = "80"


function nTcp(tr) 		// TCP 일 때 호출한다. 
{	
	LoadTime = (new Date()).getTime() - s.getTime();		
	(new Image()).src='http://' + ServerIp + ':' + port + '/cgi-bin/netAgent.cgi?r='
			+ (LoadTime + '&d=' + (new Date()).getTime() + '&x=' + tr );

	tmp = 'http://' + ServerIp + ':' + port + '/cgi-bin/netAgent.cgi?r='
			+ (LoadTime + '&d=' + (new Date()).getTime() + '&x=' + tr );
	//alert(tmp);
}

function nStart() 		// 로그인 같은 첫 화면에서 호출한다. 
{
	 var today = new Date();
	 var the_date = today.setTime(today.getTime() + 60000) ; //60초 이후면 쿠키 만료
	 var the_cookie_date = today.toGMTString(the_date);
     
	document.cookie = "StartTime=" + (new Date().getTime()) + ";path=/; expires="+the_cookie_date;
//	document.cookie = "StartTime=" + (new Date().getTime()) + ";path=/; domain=woorihard.com; expires="+the_cookie_date;
}


function nStop(tr)  		// 전환된 페이지에서 호출한다. 
{
	var StartTime = PrtGetCookie("StartTime");			
	var checkTime = PrtGetCookie("checkTime");			

	if(!checkTime)
	{
		var today = new Date();			
		if(StartTime)
		{
			var LoadTime = today.getTime() - StartTime;		
	
			(new Image()).src='http://' + ServerIp + ':' + port + '/cgi-bin/netAgent.cgi?r='
			+ (LoadTime + '&d=' + (new Date()).getTime() + '&x=' + tr );
		}
		today.setMinutes(today.getMinutes() + 30) ; //30분
		document.cookie = "checkTime=" + today.getTime() + ";path=/; expires="+today.toGMTString() + ";";

	}
	PrtSetCookie("StartTime");
}


function PrtGetCookie(name)  	// Internal Function
{
	var index = document.cookie.indexOf(name + "=");	
	if(index == -1) return null;	
	index = document.cookie.indexOf("=",index) + 1;
	
	var endstr = document.cookie.indexOf(";",index);
	if(endstr == -1)
	   endstr = document.cookie.length;
	   return unescape(document.cookie.substring(index,endstr));		
}


function PrtSetCookie(name)	// Internal Function
{
	var today = new Date();
	var strtoday = today.setTime(today.getTime() - 1000); // 현재 시간보다 이전을 만료일로 정해준다.

//	document.cookie = name + '=; path=/; domain=woorihard.com; expires=' + today.toGMTString(strtoday);	
	document.cookie = name + '=; path=/; expires=' + today.toGMTString(strtoday);	
}

//-->


}
/*
     FILE ARCHIVED ON 18:26:45 Aug 20, 2005 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:57:15 Sep 22, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.886
  exclusion.robots: 0.03
  exclusion.robots.policy: 0.013
  esindex: 0.026
  cdx.remote: 52.447
  LoadShardBlock: 1095.003 (3)
  PetaboxLoader3.datanode: 1107.851 (4)
  load_resource: 186.822
  PetaboxLoader3.resolve: 128.044
*/