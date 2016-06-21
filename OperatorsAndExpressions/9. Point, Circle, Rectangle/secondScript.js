function solve(args) {
    var output,
        x = +args[0],
        y = +args[1],
        centerX = 1,
        centerY = 1,
        r = 1.5,
        left = -1,
        top = 1,
        right = 5,
        bottom= -1;

    var isWithinCircle = Math.pow(x - centerX, 2) +
        Math.pow(y - centerY, 2) <=
        r * r;
    var isOutOfRectangle = x < left ||
        right < x ||
        y < bottom||
        y > top;

    output = "outside circle outside rectangle";

    if (isWithinCircle && isOutOfRectangle) {
        output = "inside circle outside rectangle";
    }
    else if ((isWithinCircle && !isOutOfRectangle)) {
        output = "inside circle inside rectangle";
    }
    else if (!isWithinCircle && !isOutOfRectangle) {
        output = "outside circle inside rectangle";
    }
    console.log(output);
}