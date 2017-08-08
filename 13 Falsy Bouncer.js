function bouncer(arr) {
    return arr.filter(function(x) {
        return x;
    });
}

bouncer([7, "ate", "", false, 9]);

// CLEANER CODE
/* function bouncer(arr) {
    return arr.filter(Boolean);
} */
