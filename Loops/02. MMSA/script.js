function solve(args) {
    var len = args.length,
        sum = 0,
        min = +args[0],
        max = +args[0],
        avg,
        number,
        index;

    for(index = 0; index < len; index += 1){
        number = +args[index];

        if(number >= max){
            max = number;
        }

        if(number <= min){
            min = number;
        }

        sum += number;
    }

    avg = sum / len;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}
/*
 function solve(args) {
 var len = args.length,
 sum = 0,
 min,
 max,
 avg,
 number,
 index;

 args.sort();

 min = +args[0];
 max = +args[len - 1];

 for(index = 0; index < len; index += 1){
 number = args[index];

 sum += number;
 }

 avg = sum / len;

 console.log('min=' + min.toFixed(2));
 console.log('max=' + max.toFixed(2));
 console.log('sum=' + sum.toFixed(2));
 console.log('avg=' + avg.toFixed(2));
 }
 */

/* oldest
 function solve(args) {
 var a = +args[0],
 b = +args[1],
 c = +args[2],
 min,
 max,
 sum,
 avg;

 sum = a + b + c;
 avg = sum / 3;

 min = Math.min(a,b);
 max = Math.max(a,b);

 if(max < c){
 max = c;
 }

 if(min > c){
 min = c;
 }

 console.log('min=' + min.toFixed(2) + '\nmax=' + max.toFixed(2) + '\nsum=' + sum.toFixed(2) + '\navg=' + avg.toFixed(2));
 }
 */