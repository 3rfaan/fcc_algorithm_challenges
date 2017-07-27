function chunkArrayInGroups(arr, size) {
    var divided = [];
    
    for (var i = 0; i < arr.length; i += size) { 
        divided.push(arr.slice(i, i + size));
    }
    return divided;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// WHILE LOOP
/* function chunkArrayInGroups(arr, size) {
    var divided = [];
    var i = 0;
    
    while (i < arr.length) {
        divided.push(arr.slice(i, i + size));
        i += size;
    }
    return divided;
} */
