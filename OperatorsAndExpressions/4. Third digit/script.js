function solve(args) {
    var num = +args[0];
    var thirdDigit = Math.floor(num / 100) % 10;

    if (thirdDigit === 7){
        console.log('true');
    }
    else{
        console.log('false ' + thirdDigit)
    }
}