function solve(args) {
    var N = +args[0],
        output = '',
        index
        ;

    for(index = 1; index <= N; index += 1){
        output += String(index) + ' '; //output += index + ' ';
    }

    console.log(output.trim());
}