function solve(args) {
    var  N = +args[0],
         numbers = args[1].split(' ').map(Number);
        
        function largerThanNeighbours(array, arrLength) {
            var counter = 0,
                index,
                current;
            
            for (index = 1; index < arrLength - 1; index += 1) {
                current = numbers[index];
                
                if (current > numbers[index - 1] && current > numbers[index + 1] ) {
                    counter += 1;
                }
                
            }
            
            return counter;    
        }
        
        return largerThanNeighbours(numbers, N);
}

/*
function solve(args) {
    var input = args[0].split('\n'),
        N = +input[0],
        numbers = input[1].split(' ').map(Number);
        
        function largerThanNeighbours(array, arrLength) {
            var counter = 0,
                index,
                current;
            
            for (index = 1; index < arrLength - 1; index += 1) {
                current = numbers[index];
                
                if (current > numbers[index - 1] && current > numbers[index + 1] ) {
                    counter += 1;
                }
                
            }
            
            return counter;    
        }
        
        return largerThanNeighbours(numbers, N);
}
*/

/*
function solve(args) {
    var input = args[0].split('\n'),
        N = +input[0],
        numbers = input[1].split(' ').map(Number),
        counter = 0;

        function largerThanNeighbours(numbers) {
            var len = numbers.length,
                index,
                current;
            
            for (index = 1; index < len; index++) {
                current = numbers[index];
                
                if (current > numbers[index - 1] && current > numbers[index + 1] ) {
                    counter += 1;
                }
                
            }
            
            return counter;    
        }
        
        return largerThanNeighbours(numbers);
}
*/