function solve(args) {
    var array = args[0].split('\n'),
        N = +array[0],
        counter = 1,
        maxSequence = 1,
        index;

    for(index = 0; index <= N; index += 1){

        if(+array[index] < +array[index + 1]){
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