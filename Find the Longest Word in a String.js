function findLongestWord(str) {
    var words = str.split(" ");
    var limit = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > limit) {
            limit = words[i].length;
        }
    }
    return limit;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
