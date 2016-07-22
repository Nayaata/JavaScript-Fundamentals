function solve(args) {
    var input = args[0];

    function reverse(str){
        var newString = "";

        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }

    return reverse(input);
}