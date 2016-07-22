function extractTxt(args) {
    let output = '';
    let matchTags = /<.*?>/ig;

    for (let line of args) {
        output += line.replace(matchTags, '').trim();
    }

    console.log(output);
}

/*
function solve(args) {
    var input = args,
    outpuyt = '',
    index;

    for(index in input){

    for (var i = 0; i < args.length; i += 1) {
        if (args[i] === '<') {
         i = args.indexOf('>', i);
        }
        if (args[i] !== '>') {
         output += args[i];
        }
    }
}

    return output;
}