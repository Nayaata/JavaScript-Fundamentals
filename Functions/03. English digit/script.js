function solve(number) {
    var num = String(number);

    function returnDigit(number) {
        var digit = num[num.length - 1];

        switch (digit) {
            case '0': return 'zero';
            case '1': return 'one';
            case '2': return 'two';
            case '3': return 'three';
            case '4': return 'four';
            case '5': return 'five';
            case '6': return 'six';
            case '7': return 'seven';
            case '8': return 'eight';
            case '9': return 'nine';
        }
    }

    return returnDigit(num);
}