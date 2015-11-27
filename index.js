function removeLink(href){
  var links = document.getElementsByTagName('link');

  for (var i = links.length ; i >= 0 ; i--) {
    var link = links[i];
    if (link && link.getAttribute('href')
      && link.getAttribute('href').indexOf(href) !== -1) {

      link.parentNode.removeChild(link);
    }
  }
}

module.exports = removeLink;
