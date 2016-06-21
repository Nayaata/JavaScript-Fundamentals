function solve(args) {
    var a = +args[0],
        b = +args[1],
        h = args[2];

    var result = ((a + b) * h) / 2;

    return result.toFixed(7);
}