// first way
function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        max,
        min;

    min = Math.min(a, b);
    max = Math.max(a, b);

    if(max > c && c > min){
        console.log("%d %d %d", max, c, min);
    } else if(c > max && max > min){
        console.log("%d %d %d", c, max, min);
    } else if(max > c && min > c){
        console.log("%d %d %d", max, min, c);
    } else {
        console.log("%d %d %d", a, b, c);
    }
}

/* second way
function solve(args) {
    var firstNumber = +args[0],
        secondNumber = +args[1],
        thirdNumber = +args[2];

    if (firstNumber > secondNumber && firstNumber > secondNumber)
    {
        if (secondNumber > thirdNumber)
        {
            console.log("%d %d %d", firstNumber, secondNumber, thirdNumber);
        }
        else
        {
            console.log("%d %d %d", firstNumber, thirdNumber, secondNumber);
        }
    }
    else if (secondNumber > firstNumber && secondNumber > thirdNumber)
    {
        if (firstNumber > thirdNumber)
        {
            console.log("%d %d %d", secondNumber, firstNumber, thirdNumber);
        }
        else
        {
            console.log("%d %d %d", secondNumber, thirdNumber, firstNumber);
        }

    }
    else if (thirdNumber > firstNumber && thirdNumber > secondNumber)
    {
        if (firstNumber > secondNumber)
        {
            console.log("%d %d %d", thirdNumber, firstNumber, secondNumber);
        }
        else
        {
            console.log("%d %d %d", thirdNumber, secondNumber, firstNumber);
        }
    }
    else if (firstNumber == secondNumber && thirdNumber == secondNumber)
    {
        console.log("%d %d %d", firstNumber, secondNumber, thirdNumber);
    }
}

