function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    } else {
        return str.slice(0, (num <= 3) ? num : (num - 3)) + "...";
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

// OTHER
/* function truncateString(str, num) {
    if (str.length > num && num > 3) {
        return str.slice(0, num - 3) + "...";
    } else if (str.length <= num && num > 3) {
        return str;
    } else {
        return str.slice(0, num) + "...";
    }
} */
