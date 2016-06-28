function search(args) {

    var array = (args + '').split('\n').map(Number),
        n = +array[0],
        x = +array[array.length - 1],
        min = 0,
        max = n - 1,
        middle = 0;

    array.shift();
    array.pop();

    while (min <= max) {

        middle = ((min + max) / 2) | 0;

        if (x === +array[middle]) {
            return middle;
        }
        else if (x < +array[middle]) {
            max = middle - 1;
        }
        else {
            min = middle + 1;
        }
    }

    return '-1';
}