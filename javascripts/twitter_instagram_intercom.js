// Covert Instagram &amp; Twitter usernames in Intercom to links
// Intercom Links

(function() {
  var els = document.getElementsByTagName('td')
  for (var i=0; i<els.length; i++) {
    if (els[i].nodeType == 1) {
      var el = els[i];
      if (el.childNodes[2]) {
        var n = el.childNodes[2];
        if (n.nodeType == 1) {
          if (n.getAttribute('data-lookup-key') == 'custom_data.twitter') {
            var h = n.innerHTML.trim();
            if (h != 'Unknown') {
              n.innerHTML = '<a href=\'https://twitter.com/' + h + '\' target=\'_blank\'>' + h + '</a>';
            }
          } else if (n.getAttribute('data-lookup-key') == 'custom_data.instagram') {
            var h = n.innerHTML.trim();
            if (h != 'Unknown') {
              n.innerHTML = '<a href=\'https://instagram.com/' + h + '\' target=\'_blank\'>' + h + '</a>';
            }
          }
        }
      }
    }
  }
}());
