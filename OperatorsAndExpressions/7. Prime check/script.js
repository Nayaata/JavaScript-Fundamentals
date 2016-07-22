function solve(args) {
    var num = +args[0],
        maxDivider = Math.sqrt(num),
        divider = 2,
        isPrime = true;

    if(num < divider){
        isPrime = false;
    } else {
        for(var i = divider; i <= maxDivider; i += 1){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }
    }

    console.log(isPrime);
}
/*
function solve(args) {
    var num = +args[0],
        maxDivider = Math.sqrt(num),
        divider = 2,
        isPrime = true;

        while(isPrime && (divider <= maxDivider)){
            if(!(num % divider)){
                isPrime = false;
            }

            divider += 1;
        }

    console.log(isPrime);
}


//worst
function solve(args) {
    var num = +args[0],
        maxDivider = Math.sqrt(num),
        divider = 2,
        isPrime = true;

    if (num == 2 || num == 3 || num == 5 || num == 7)
    {
        isPrime = true;
    } else if (num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0)
    {
        isPrime = true;
    }

    console.log(isPrime);
}

//3rd try - 100points
