function solve(args) {
    var a = +args[0],
        b = +args[1],
        maxValue;

        maxValue = b;

        if(a > b){
            maxValue = a;
            console.log("%d %d", b, maxValue);
        } else {
            console.log("%d %d", a, b);
        }
}