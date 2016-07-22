function solve(args) {
    var N = +args[0],
        numbers = args[1].split(' ').map(Number),
        X = +args[2],
        appearance = 0;

    function appearanceCount(numbers, X){
        var len = numbers.length,
            index;
        
        for(index = 0; index < len; index += 1){
            var position = numbers[index];
            
            if(position === X){
                appearance += 1;
            }
        }
        
        return appearance;
    }

    return appearanceCount(numbers, X);
}

/*
function solve(args) {
    var input = args[0].split(' ').map(Number),
        N = +input[0],
        X = +input[2],
        appearance = 0;

    function appearanceCount(numbers){
        var len = numbers.length,
            index;
        
        for(index = 0; index < len; index += 1){
            var position = numbers[index];
            
            if(position === X){
                appearance += 1;
            }
        }
        
        return appearance;
    }

    return appearanceCount(input);
}
*/
/*
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
*/