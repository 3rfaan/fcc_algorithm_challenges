function titleCase(str) {
    var words = str.toLowerCase().split(" ");
    return words.map(function(x) {
        return x.charAt(0).toUpperCase() + x.substr(1);
    }).join(" ");
}

titleCase("I'm a little tea pot");

// With string methods

/*
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
*/