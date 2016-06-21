function solve(args) {
    var num = +args[0];

    var binary = +num.toString(2);

    var bit = +binary[2];

    console.log(bit);
}