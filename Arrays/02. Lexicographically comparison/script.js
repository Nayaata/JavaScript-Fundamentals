function solve(args) {
    var word = args[0].split("\n"),
        firstStr = word[0],
        secondStr = word[1];

    if(firstStr > secondStr){
        return '>';
    } else if(firstStr < secondStr){
        return '<';
    } else {
        return '=';
    }
}

/*
 function solve(args) {
 var firstStr = args[0],
 secondStr = args[1],
 firstLen = firstStr.length,
 secondLen = secondStr.length,
 minimum,
 index;

 minimum = Math.min(firstLen, secondLen);

 for(index = 0; index < minimum; index += 1){
 if (firstStr[index] > secondStr[index])
 {
 console.log(">");
 return;
 }
 else if (firstStr[index] < secondStr[index])
 {
 console.log("<");
 return;
 }
 }

 if(firstStr.length === secondStr.length){
 console.log("=");
 } else if(firstStr.length > secondStr.length){
 console.log(">");
 } else if(firstStr.length < secondStr.length){
 console.log("<");
 }
 }
 */