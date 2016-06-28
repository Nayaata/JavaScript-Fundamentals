function solve(args) {
    var num = +args[0],
       isPrime;

    for(var index = num; index >= 2; index -= 1){
        isPrime = true;

     for(var j = 2; j <= Math.sqrt(num); j += 1){
         if(index % j === 0){
             isPrime = false;
             break;
         }
     }

        if(isPrime === true){
            return index;
        }
    }

    console.log(-1);
}

/*
 function solve(args) {
 var num = +args[0],
 isPrime,
 index,
 biggestPrime = 0;

 isPrime = [num + 1];

 for(index = 2; index <= num; index += 1){

 if(isPrime[index] === 0){
 biggestPrime = index;

 for(var j = index * 2; j <= num; j += index){
 isPrime[j] = 1;
 }
 }
 }

 console.log(biggestPrime);
 }
 */