function solve(args) {
    var subStr = (args[0] + '').toLowerCase(),
    text = (args[1] + '').toLowerCase();

    function subStringInTxt(subStr, text) {
        var counter = 0,
            index;

        index = text.indexOf(subStr);

        while (index >= 0) {
            counter += 1;

            index = text.indexOf(subStr, index + 1);
        }

        return counter;
    }

    console.log(subStringInTxt(subStr, text));
    
}


/*
function solve(args) {
    var subStr = (args[0] + '').toLowerCase(),
    text = (args[1] + '').toLowerCase();

    function subStringInTxt(subStr, text) {
        var counter = 0,
            index;

        for (index = 0; index <= text.length - subStr.length; index+=1) {
            if (text.substring(index, subStr.length) === subStr) {
                counter += 1;
            }
            
        }
        return counter;
    }

    //console.log(subStringInTxt(subStr, text));
    return subStringInTxt(subStr, text);
}
*/
