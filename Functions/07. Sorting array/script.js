function solve(args) {
    var N = +args[0],
        numbers = args[1].split(' ').map(Number);

    function sortArray(numbers) {
        var temp = 0,
            len = numbers.length,
            write,
            sort;

        for (write = 0; write < len; write++) {
            for (sort = 0; sort < len - 1; sort++) {
                if (numbers[sort] > numbers[sort + 1]) {
                    temp = numbers[sort + 1];
                    numbers[sort + 1] = numbers[sort];
                    numbers[sort] = temp;
                }
            }
        }

        return numbers.join(' ');
    }

    console.log(sortArray(numbers));
}

solve("36 10 1 34 28 38 31 27 30 20")