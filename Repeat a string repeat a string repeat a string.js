function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : ""; 
}

repeatStringNumTimes("abc", 3);

// WHILE LOOP
/* function repeatStringNumTimes(str, num) {
    var repeatedString = "";
    
    while (num > 0) {
        repeatedString += str;
        num--;
    }
    return repeatedString;   
} */