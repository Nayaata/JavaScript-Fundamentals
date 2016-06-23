function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = +args[4],
        maxAB,
        maxCD;

    maxAB = Math.max(a, b);
    maxCD = Math.max(c, d);

    if(maxAB > maxCD && maxAB > e){
        return maxAB;
    } else if (maxCD > maxAB && maxCD > e){
        return maxCD;
    } else if (e > maxAB && e > maxCD){
        return e;
    } else if(maxAB === maxCD && maxAB === e){
        return maxAB;
    }

}