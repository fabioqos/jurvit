// For license information, see `http://assets.adobedtm.com/CO151115d0878e4c8a81962f86ad064b27/PR61a648f070e44a88bc77a6170aa8805e/BL4f0cb6c5fe60439781d7a274e31577e5/RC660d87bf4a94468da94e47008e283841-source.js`.
_satellite.__registerScript('//assets.adobedtm.com/CO151115d0878e4c8a81962f86ad064b27/PR61a648f070e44a88bc77a6170aa8805e/BL4f0cb6c5fe60439781d7a274e31577e5/RC660d87bf4a94468da94e47008e283841-source.min.js', "\"undefined\"!=typeof jQuery&&(window._sdi=window._sdi||{},window._sdi.addEventHandler=window.addEventListener?function(e,i,t){e.addEventListener(i,t,!1)}:function(e,i,t){e.attachEvent(\"on\"+i,t)},window._sdi.addEventHandler(window,\"message\",function(e){var i={};if(e.origin.match(/youtube\\.com/)&&\"undefined\"!=typeof JSON&&-1==e.origin.indexOf(\"loop=1\")){i=JSON.parse(e.data);var t=window._sdi.yt.videos;if(\"infoDelivery\"==i.event){var n,d={};for(var a in i.info.videoData&&((d=t[n=i.info.videoData.video_id]||{}).info=i.info,d.id=i.id,t[n]=d),window._sdi.yt.videos){(s=window._sdi.yt.videos[a]).id==i.id&&(d=s)}var o=window._sdi.yt.sc||{};d.info&&(1.5<Math.abs(i.info.currentTime-d.info.currentTime)&&!0===o.track&&(o.s().Media.stop(d.info.videoData.title,d.info.currentTime),\"paused\"!=d.state&&o.s().Media.play(d.info.videoData.title,i.info.currentTime)),d.info.currentTime=i.info.currentTime),2==i.info.playerState&&(o.s().Media.stop(d.info.videoData.title,d.info.currentTime),d.state=\"paused\"),1==i.info.playerState&&(d.started?!0===o.track&&o.s().Media.play(d.info.videoData.title,d.info.currentTime):(d.started=!0)===o.track&&(o.s().Media.open(d.info.videoData.title,d.info.duration,\"youtube\"),o.s().Media.play(d.info.videoData.title,d.info.currentTime)),d.state=\"playing\"),3==i.info.playerState&&d.started&&(!0===o.track&&o.s().Media.stop(d.info.videoData.title,d.info.currentTime),d.state=\"paused\"),0===i.info.playerState&&(!0===o.track&&(o.s().Media.stop(d.info.videoData.title,d.info.currentTime),o.s().Media.close(d.info.videoData.title)),d.state=\"completed\")}else if(\"onStateChange\"==i.event){for(var a in window._sdi.yt.videos){var s;(s=window._sdi.yt.videos[a]).id==i.id&&(d=s)}o=window._sdi.yt.sc||{};1==i.info&&(d.started?!0===o.track&&o.s().Media.play(d.info.videoData.title,d.info.currentTime):(d.started=!0)===o.track&&(o.s().Media.open(d.info.videoData.title,d.info.duration,\"youtube\"),\"paused\"!=d.state&&o.s().Media.play(d.info.videoData.title,i.info.currentTime)),d.state=\"playing\"),2==i.info&&(!0===o.track&&o.s().Media.stop(d.info.videoData.title,d.info.currentTime),d.state=\"paused\"),3==i.info&&d.started&&(!0===o.track&&o.s().Media.stop(d.info.videoData.title,d.info.currentTime),d.state=\"paused\"),0===i.info&&(!0===o.track&&(o.s().Media.stop(d.info.videoData.title,d.info.currentTime),o.s().Media.close(d.info.videoData.title)),d.state=\"completed\")}}}),window._sdi.loadScript=function(e,i){var t=document.createElement(\"script\");t.type=\"text/javascript\",i&&\"function\"==typeof i&&(t.readyState?t.onreadystatechange=function(){\"loaded\"!==t.readyState&&\"complete\"!==t.readyState||(t.onreadystatechange=null,i())}:t.onload=function(){i()}),t.src=e,document.getElementsByTagName(\"head\")[0].appendChild(t)},window._sdi.yt={stages:{},players:{},sc:{track:!0,s:function(){return window.s}},init:function(){for(var e=document.getElementsByTagName(\"script\"),i=!1,t=(window._sdi.yt.videos,0);t<e.length;t++){(e[t].src||\"\").match(/youtube\\.com\\/iframe_api/)&&(i=!0)}!1===i?window._sdi.loadScript(\"//www.youtube.com/iframe_api\",function(){window._sdi.yt.ready(\"api\")}):window._sdi.yt.ready(\"api\")},ready:function(e){window._sdi.yt.stages[e]=!0,window._sdi.yt.stages.dom&&window._sdi.yt.stages.api&&window._sdi.yt.checkIframes()},checkIframes:function(){var o=window._sdi.yt.videos,s=1e3,r=0;jQuery('iframe[src*=\"youtube\"]').each(function(e,i){if(-1!=i.src.indexOf(\"loop=1\"))var t=null;else{var n;t=i.src.match(/h?t?t?p?s?\\:?\\/\\/www\\.youtube(-nocookie)?\\.com\\/embed\\/([\\w-]{11})(?:\\?.*)?/)}if(t){n=2<t.length?t[2]:\"\",i.id||(i.id=n+r,r++);var d=!1;if(!i.src.match(/origin/)&&document.location.protocol,i.src.match(/enablejsapi=1/)||(i.src+=(-1<i.src.indexOf(\"?\")?\"&\":\"?\")+\"enablejsapi=1\",d=!0),\"undefined\"!=typeof jQuery&&d){var a=jQuery(this).clone();a.src=i.src,a.id=i.id,jQuery(this).replaceWith(a)}else\"undefined\"!=typeof YT&&\"undefined\"!=typeof YT.get?(ready=!0,o[n]={},(!YT.get(i.id)||\"undefined\"==typeof YT.get(i.id).v&&\"undefined\"!=typeof YT.get(i.id).v.videoId)&&(o[n].player=new YT.Player(i.id,{events:{onReady:function(){},onStateChange:function(){},videoId:i.id}})),i.setAttribute(\"data-sdiyt\",\"true\")):s=100}}),setTimeout(function(){window._sdi.yt.checkIframes()},s)},videos:{}},\"undefined\"!=typeof window._sdi&&\"undefined\"!=typeof window._sdi.addEventHandler&&window._sdi.addEventHandler(window,\"load\",function(){window._sdi.yt.init(),window._sdi.yt.ready(\"dom\")}));");