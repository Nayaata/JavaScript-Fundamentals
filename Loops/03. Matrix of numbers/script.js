function solve(args) {
    var N = +args[0],
        matrix = [],
        row,
        col;

    for(row = 0; row < N; row += 1){

        matrix[row] = '';
        var fillMatrix = row + 1;

        for(col = 0; col < N; col += 1){
            matrix[row] += String(fillMatrix) + ' ';
            fillMatrix += 1;
        }

        matrix[row] = String(matrix[row].trim());
        console.log(matrix[row]);
    }
}

/* 5 points
 function solve(args) {
 var N = +args[0],
 row,
 col;

 for(row = 1; row <= N; row += 1){

 for(col = row; col < row + N; col += 1){
 console.log(' ' + col);
 }
 }
 }
 */

/*
 function solve(args) {
 var N = +args[0],
 output = '',
 row,
 col;

 for(row = 0; row < N; row += 1){

 for(col = row + 1; col <= N + row; col += 1){
 output = col + ' ';
 }

 output += '\n';
 }

 return output;
 }
 */