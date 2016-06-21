function solve(args) {
    var x = +args[0],
        y = +args[1],
        r = 2,
        distance;

    distance = Math.sqrt(x * x + y * y);

    if(distance <= r){
        console.log('yes ' + distance.toFixed(2));
    }
    else{
        console.log('no ' + distance.toFixed(2));
    }
}