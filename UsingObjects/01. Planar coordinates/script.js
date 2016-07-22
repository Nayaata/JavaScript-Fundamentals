function solve(args) {
    var coordinates =  args.map(Number),
        lengths = [],
        a,
        b,
        i,
        output = 'Triangle can be built';
    
    function calculateDistance(x1, y1, x2, y2) {
        a = Math.abs(x1- x2);
        b = Math.abs(y1 - y2);

        return Math.sqrt(a * a + b * b);
    }

    for(i = 0; i < 12; i += 4) {
        lengths[i / 4] = calculateDistance(coordinates[i], coordinates[i + 1], coordinates[i + 2], coordinates[i + 3]);
    }

    if(lengths[0] + lengths[1] < lengths[2] || lengths[2] + lengths[1] < lengths[0] || lengths[0] + lengths[2] < lengths[1]){
        output = 'Triangle can not be built';
    }

    for(i = 0; i < 3; i += 1) {
        console.log(parseFloat(Math.round(lengths[i] * 100) / 100).toFixed(2));
    }

    console.log(output);
}

/*
function solve(args) {
  var input = args
              .map(Number),
              step = 4,
              sizes = [];

  function calculateDistance(index) {
    var arr = input,
              a,
              b,
              result;

    a = Math.abs(arr[index] - arr[index + 2]);
    b = Math.abs(arr[index + 1] - arr[index + 3]);

    result = Math.sqrt((a * a) + (b * b));

    return result;
  }

  for (var i = 0, len = input.length; i < len; i += step) {
      sizes.push(+calculateDistance(i));
  }

  var output;

  if (sizes[0] + sizes[1] > sizes[2] && sizes[1] + sizes[2] > sizes[0] && sizes[0] + sizes[2] > sizes[1]) {
    output = 'Triangle can be built';
  } else {
    output = 'Triangle can not be built';
  }

  console.log(sizes.map(Number).map(function (a) {
        return a.toFixed(2)
      })
      .join('\n'));

  console.log(output);
}
*/