function largestOfFour(arr) {
    var newArr = [];
    var biggestNumber = 0;
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > biggestNumber) {
                biggestNumber = arr[i][j];
            }
        }
        newArr.push(biggestNumber);
        biggestNumber = 0;
    }
    return newArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Map & Reduce method

/* function largestOfFour(arr) {
    return arr.map(function(group) {
        return group.reduce(function(a, b) {
            return (b > a) ? b : a;
        });
    });
} */
