function solve(args) {
    var array = args[0].split('\n'),
        N = +array[0],
        counter = 1,
        maxSequence = 1,
        index;

    for(index = 1; index <= N; index += 1){
        if(+array[index - 1] === +array[index]){
            counter += 1;
            if(counter > maxSequence){
                maxSequence = counter;
            }
        } else {
            counter = 1;
        }
    }

    return maxSequence;
}

/*
 function solve(args) {
 var array = args[0].split('\n'),
 N = +array[0],
 counter = 1,
 maxSequence = 1,
 index;

 //['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']

 for(index = 0; index <= N; index += 1){

 if(+array[index] === +array[index + 1]){
 counter += 1;
 if(counter > maxSequence){
 maxSequence = counter;
 }
 } else {
 counter = 1;
 }
 }

 return maxSequence;
 }
 */

