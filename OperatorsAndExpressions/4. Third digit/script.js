function solve(args) {
    var num = +args[0];
    var thirdDigit = Math.floor(num / 100) % 10;
    //var lastNum = parseInt(temp[temp.length - 1]);

    if (thirdDigit === 7){
        console.log('true');
    }
    else{
        console.log('false ' + thirdDigit)
    }
}