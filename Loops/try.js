function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        x1,
        x2;

    var D = b * b - 4 * a * c,
        result = [];

    function getRoot(sign, D, b, a){
        return (-b + Math.sqrt(D) * sign) / (2 * a);
    }

    if (D < 0) {
        result.push('no real roots');
    } else if(!D) {
        result.push('x1=x2=' + getRoot(-1, D, b, a));
    } else {
        result.push('x1=' + getRoot(-1, D, b, a), 'x2=' + getRoot(1, D, b, a));
    }

    return result.join('; ');
}


function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        D = b * b - 4 * a * c, // Discriminant
        x1,
        x2;

    if (D < 0) {
        console.log('no real roots');
    } else {
        if (D === 0) {
            x1 = x2 = -b / (2 * a);
            console.log('x1=x2=' + x1.toFixed(2));
        } else {
            x1 = (-b - Math.sqrt(D)) / (2 * a);
            x2 = (-b + Math.sqrt(D)) / (2 * a);

            if (x1 < x2) {
                console.log('x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2));
            } else {
                console.log('x1=' + x2.toFixed(2) + '; x2=' + x1.toFixed(2));
            }
        }
    }

}

function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        x1,
        x2;

    var D = Math.pow(b, 2) - (4 * a * c);

    if (D < 0) {
        console.log("no real roots");
    }
    else {
        D = Math.sqrt(D);

        x1 = (-b + D) / (2 * a);
        x2 = (-b - D) / (2 * a);

        if (x1 === x2) {
            console.log("x1=x2=" + x1.toFixed(2));
        }
        else {
            if (x1 > x2) {
                console.log("x1=" + x2.toFixed(2) + "; x2=" + x1.toFixed(2));
            }
            else if (x2 > x1) {
                console.log("x1=" + x1.toFixed(2) + "; x2=" + x2.toFixed(2));
            }
        }
    }
}

function solve(args) {
    var coefficientA = +args[0],
        coefficientB = +args[1],
        coefficientC = +args[2],
        x1,
        x2;

        var D = Math.pow(coefficientB, 2) - (4 * coefficientA * coefficientC);

    if (D < 0)
    {
        console.log("no real roots");
    }
    else
    {
        //Discriminant == 0
        if (D === 0)
        {
            x1 = x2 = -coefficientB / (2 * coefficientA);
            console.log('x1=x2=' + x1.toFixed(2));
        }
        //Discriminant > 0
        else
        {
            x1 = (-coefficientB - Math.sqrt(coefficientB * coefficientB - 4 * coefficientA * coefficientC)) / (2 * coefficientA);
            x2 = (-coefficientB + Math.sqrt(coefficientB * coefficientB - 4 * coefficientA * coefficientC)) / (2 * coefficientA);

            if (x1 < x2)
            {
                console.log('x1=' + x1.toFixed(2) + 'x2=' + x2.toFixed(2));
            }
            else
            {
                console.log('x1=' + x2.toFixed(2) + '; ' + 'x2=' + x1.toFixed(2));
            }

        }
    }
}