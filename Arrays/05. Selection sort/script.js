function solve(args) {
    var array = args[0].split('\n'),
        N = +array[0],
        numbers = array.slice(1),
        minPosition = numbers[0],
        index;

    for(index = 0; index < N; index += 1){
        minPosition = numbers[index];

        for(var j = index; j < N; j += 1){
            if(+numbers[j] < minPosition){
                minPosition = +numbers[j];
                numbers[j] = +numbers[index];
                numbers[index] = minPosition;
            }
        }
    }

    console.log(numbers.join('\n'));
}

/*
 function solve(args) {
 var array = args[0].slice(('\n')),
 N = +array[0],
 len = array.length,
 minPosition,
 temp,
 index,
 i,
 j;

 for(index = 0; index < len; index += 1){
 minPosition = index;

 for(i = index + 1; i < len; i += 1){
 if(array[i] < array[minPosition]){
 minPosition = i;
 }
 }

 if(minPosition != index){
 temp = array[minPosition];
 array[minPosition] = array[index];
 array[index] = temp;
 }
 }

 for(j = 0; j < N; j += 1){
 console.log(array[j]);
 }
 }

 */
/*
 function solve(args) {
 var array = args[0].slice(('\n')),
 N = +array[0],
 len = array.length,
 minPosition,
 temp,
 index,
 i,
 j;

 for(index = 0; index < len; index += 1){
 minPosition = index;

 for(i = index + 1; i < len; i += 1){
 if(array[i] < array[minPosition]){
 minPosition = i;
 }
 }

 if(minPosition !== index){
 temp = array[index];
 array[index] = array[minPosition];
 array[minPosition] = temp;
 }
 }

 for(j = 0; j < N; j += 1){
 console.log(array[j]);
 }
 }
 */

/*
 function solve(args) {
 var array = args[0].slice(('\n')),
 N = +array[0],
 index;

 array.sort(function(a, b){return a - b});

 for(index = 0; index < N; index += 1) {
 console.log(array[index]);
 }

 }
 */