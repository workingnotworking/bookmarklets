// Turn Twitter links in Intercom.io into actual links
var els = document.getElementsByTagName('td')
for (var i=0; i<els.length; i++) {
  if (els[i].nodeType == 1) {
    var el = els[i];
    if (el.childNodes[2]) {
      var n = el.childNodes[2];
      if (n.nodeType == 1 && n.getAttribute('data-lookup-key') == 'custom_data.twitter') {
        var h = n.innerHTML.trim();
        if (h != 'Unknown') {
          n.innerHTML = '<a href=\"https://twitter.com/' + h + '\" target=\"_blank\">' + h + '</a>';
        }
      }
    }
  }
}

// Minimized version
function(){for(var els=document.getElementsByTagName('td'),i=0;i<els.length;i++)if(1==els[i].nodeType){var el=els[i];if(el.childNodes[2]){var n=el.childNodes[2];if(1==n.nodeType&&'custom_data.twitter'==n.getAttribute('data-lookup-key')){var h=n.innerHTML.trim();'Unknown'!=h&&(n.innerHTML='<a href=\'https://twitter.com/'+h+'\' target=\'_blank\'>'+h+'</a>')}}}}()
