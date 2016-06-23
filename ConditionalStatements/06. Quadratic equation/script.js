function solve(args) {
    var coefficientA = +args[0],
        coefficientB = +args[1],
        coefficientC = +args[2],
        x1,
        x2;

    if (coefficientB * coefficientB - 4 * coefficientA * coefficientC < 0)
    {
        console.log("no real roots");
    }
    else
    {
        //Discriminant == 0    
        if (coefficientB * coefficientB - 4 * coefficientA * coefficientC == 0)
        {
            x1 = x2 = -coefficientB / (2 * coefficientA);
            console.log('x1=x2=%d', x1.toFixed(2));
        }
        //Discriminant > 0
        else
        {
            x1 = (-coefficientB - Math.sqrt(coefficientB * coefficientB - 4 * coefficientA * coefficientC)) / (2 * coefficientA);
            x2 = (-coefficientB + Math.sqrt(coefficientB * coefficientB - 4 * coefficientA * coefficientC)) / (2 * coefficientA);

            if (x1 < x2)
            {
                console.log('x1=%d; x2=%d', x1.toFixed(2), x2.toFixed(2));
            }
            else
            {
                console.log('x1=%d; x2=%d', x2.toFixed(2), x1.toFixed(2));
            }

        }
    }
}
