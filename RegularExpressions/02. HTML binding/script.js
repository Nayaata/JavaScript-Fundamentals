function solve(args){
    var obj = JSON.parse(args[0]),
        text = ''+args[1],
        regex = /data-bind-(.*?)="(.*?)"/gmi,
        currentMatch;

    text = text.replace(/'/, '"');  

    while(currentMatch = regex.exec(text)){
        var index = text.indexOf('>'),
            field = currentMatch[1];

        if (text[index - 1] === '/') {
            index -= 1;
        }

        if (field.toLowerCase() === 'content') {
            var arr = text.split(''),
                x = arr.splice(index + 1, 0, obj[currentMatch[2]]);

            text = arr.join('');
        }
        else {
            var arr2 = text.split(''),
                x2 = arr2.splice(index, 0, " " + field + '="'+ obj[currentMatch[2]] + '"');

            text = arr2.join('');
        }
    }
 
    console.log(text);
}