function solve(args) {
    var array = args[0].split('\n'),
        N = array[0],
        numbers = array.slice(1),
        current = numbers[0],
        frequentNum = 0,
        counter = 1,
        bestCounter = 0;

    numbers.sort();

    for(var index = 0; index < N; index += 1){

        if(current === numbers[index + 1]){
            counter += 1;
        } else {
            if(counter > +bestCounter){
                bestCounter = counter;
                frequentNum = numbers[index];
            }

            counter = 1;
        }

        current = numbers[index + 1];
    }

    console.log(frequentNum + " (" + bestCounter + " times)");
}