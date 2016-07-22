function solve(args) {
    var input = args +'',
        output;

        output = input.replace(/ /g, '&nbsp;');

    return output;
}

/* or with for loop
function replaceWithNbsps(text) {

 for (var i = 0; i < text.length; i += 1) {
  text = text.replace(' ', '&nbsp');
 }
 return text;
}
*/