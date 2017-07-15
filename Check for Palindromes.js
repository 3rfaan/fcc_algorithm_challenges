function palindrome(str) {
    var regex = /[\W_]/g;
    var str_modified = str.toLowerCase().replace(regex, "");
    
    return str_modified  === str_modified.split("").reverse().join("");
}

palindrome("A man, a plan, a canal. Panama");

