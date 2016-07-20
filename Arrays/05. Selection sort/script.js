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

