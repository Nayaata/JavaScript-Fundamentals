function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        max;

    max = Math.max(a, b);

    if(max > c){
        return max;
    }else {
        return c;
    }
}
/* second way
function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];

    if(a > b && a > c){
        console.log(a);
    } else if(b > a && b > c){
        console.log(b);
    } else if(c > a && c > b) {
        console.log(c);
    }
}
*/