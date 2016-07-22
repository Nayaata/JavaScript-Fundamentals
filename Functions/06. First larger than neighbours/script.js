function solve(args) {
    var N = +args[0],
        numbers = args[1].split(' ').map(Number);
        
        function firstLargerThanNeighbours(array, arrLength) {
            var counter = 0,
                index,
                current,
                result;
            
            for (index = 1; index < arrLength - 1; index += 1) {
                current = numbers[index];
                
                if (current > numbers[index - 1] && current > numbers[index + 1] ) {
                    result = index;
                    break;
                } else {
                    result = -1;
                } 
            }
            
            return result;    
        }
        
        return firstLargerThanNeighbours(numbers, N);
}