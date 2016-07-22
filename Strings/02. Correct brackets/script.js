function solve(args) {
   var input = args[0];

   function checkCorrectBrackets(str) {
       var isCorrect = true,
       openBracketCounterCounter = 0,
       closeBracketCounterCounter = 0,
       len = str.length,
       index;

       for (index = 0; index < len; index += 1) {
           if (str[index] === '(') {
               openBracketCounterCounter += 1;
           } else if(str[index] === ')'){
               closeBracketCounterCounter += 1;
           }
       }

       if (openBracketCounterCounter !== closeBracketCounterCounter) {
           isCorrect = false;
       }

       if (isCorrect) {
           return 'Correct';
       } else {
           return 'Incorrect';
       }

       //return (isCorrect ? "Correct" : "Incorrect");
   }

   return checkCorrectBrackets(input);
}

/*
function checkCorrectBrackets(args) {
  var input = args[0] + '',
    openBracketCounter = 0,
    closeBracketCounter = 0,
    brackets = [],
    counter = 0;

  for (var i in input) {
    var c = input[i];

    if (c === '(') {
      openBracketCounter += 1;
    } else if (c === ')') {
      closeBracketCounter += 1;
    }

    if (closeBracketCounter > openBracketCounter) {
      console.log('Incorrect');
      return;
    }
  }

  if (openBracketCounter === closeBracketCounter) {
    console.log('Correct');
  } else {
    console.log('Incorrect');
  }
}
*/