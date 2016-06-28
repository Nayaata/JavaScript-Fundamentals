function solve(args) {
    var array = +args[0].split(' ').map(Number),
        X = +array[2],
        position,
        appearance;

    position = array.indexOf(X);

    function appearanceCount(numbers){
        for(var index = 0; index < numbers.length; index += 1){
            if(position >= 0){
                appearance += 1;
            } else {
                return appearance;
            }
        }

        position = numbers.indexOf(X, position + 1);
    }

    return appearanceCount(array);
}