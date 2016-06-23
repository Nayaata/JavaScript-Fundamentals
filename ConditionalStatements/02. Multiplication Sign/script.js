function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];

    //var product = a * b * c;

    if(a > 0 && b > 0 && c > 0){
        console.log('+');
    } else if(a > 0 && b < 0 && c > 0){
        console.log('-');
    } else if (a > 0 && b > 0 && c < 0) {
        console.log('-');
    } else if (a < 0 && b > 0 && c > 0) {
        console.log('-');
    } else if (a < 0 && b < 0 && c > 0){
        console.log('+');
    } else if(a > 0 && b < 0 && c < 0){
        console.log('+');
    } else if(a < 0 && b > 0 && c < 0){
        console.log('+');
    } else if(a < 0 && b < 0 && c < 0){
        console.log('-');
    } else if(a === 0 || b === 0 || c === 0){
        console.log('0');
    }
}