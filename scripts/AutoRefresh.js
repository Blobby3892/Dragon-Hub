javascript:timeout=prompt("Set timeout [s]");current=location.href;if(timeout>0)  setTimeout('reload()',1000*timeout);else  location.replace(current);function reload(){  setTimeout('reload()',1000*timeout);  fr4me='<frameset cols=\'*\'>\n<frame src=\''+current+'\'/>';  fr4me+='</frameset>';  with(document){write(fr4me);void(close())};}
