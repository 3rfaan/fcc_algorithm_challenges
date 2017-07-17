function factorialize(num) {
    var factors = [];
    
    for (var i = 1; i <= num; i++) {
        factors.push(i);
    }
    
    if (num === 0) {
        return 1;
    }
  
    return factors.reduce(function(a, b) {
        return a * b;
    });
}

factorialize(5);

// CLEANER CODE

/*
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    
    return num * factorialize(num - 1);
}

factorialize(5);
*/
