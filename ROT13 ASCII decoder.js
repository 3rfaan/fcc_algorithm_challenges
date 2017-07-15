function rot13(str) {
  str = str.split("");
   
  return str.map(function(x) {
    x = x.charCodeAt();
    
    if (x >= 65 && x <= 77) {
      x += 13;
    } else if (x >= 78 && x <= 90) {
      x -= 13;
    }     
    return String.fromCharCode(x);
    
  }).join("");
}


rot13("SERR PBQR PNZC");

// SAME FUNCTION WITH FOOR LOOP

/* function rot13(str) {
    var decoded = [];
    
    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        
        letterChar = letter.charCodeAt();
        
        if (letterChar >= 65 && letterChar <= 77) {
            letterChar += 13;
        } else if (letterChar >= 78 && letterChar <= 90) {
            letterChar -= 13;
        }     
        decoded.push(String.fromCharCode(letterChar));
    }
    return decoded.join("");
}

rot13("SERR PBQR PNZC"); */
