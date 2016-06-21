function solve(args) {
    var x = +args[0],
        y = +args[1],
        r = 1.5;
        circleX = 1;
        circleY = 1;
        top = 1;
        left = -1;
        width = 6;
        height = 2,
        isInRect,
        isInCircle,
        inCircle,
        outOfCircle,
        inRect,
        outOfRect,
        result;

    isInCircle = Math.sqrt(x * x + y * y) <= r;

    if(isInCircle){
        inCircle = 'inside circle';
    }
    else {
        outOfCircle = 'outside circle';
    }

    isInRect = (x < width && y >= left) && (y >= left && y <= top);

    if(isInRect){
        inRect = 'inside rectangle';
    } else {
        outOfRect = 'outside rectangle';
    }

    if(isInCircle && isInRect){
        result = inCircle + ' ' + inRect;
    } else if(isInCircle && !isInRect){
        result = inCircle + ' ' + outOfRect;
    } else if(!isInCircle && isInRect){
        result = outOfCircle + ' ' + inRect;
    } else {
        result = outOfCircle + ' ' + outOfRect;
    }

    return result;
}