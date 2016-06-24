function solve(args) {
    var hex = args[0],
        len = hex.length,
        decNum = 0,
        index;

    for(index = 0; index < len; index += 1){

        var digit = hex[index], symbol;

        switch (digit)
        {
            case 'A':
            {
                symbol = 10;
                break;
            }

            case 'B':
            {
                symbol = 11;
                break;
            }

            case 'C':
            {
                symbol = 12;
                break;
            }

            case 'D':
            {
                symbol = 13;
                break;
            }

            case 'E':
            {
                symbol = 14;
                break;
            }

            case 'F':
            {
                symbol = 15;
                break;
            }

            default:
            {
                symbol = parseInt(digit);
                break;
            }
        }

        decNum += parseInt(Math.pow(16, len - 1 - index) * symbol);
    }

    console.log(decNum);
}

/*
 function solve(args) {
 var hex = args[0];

 console.log(parseInt(hex, 10));
 }
 */
