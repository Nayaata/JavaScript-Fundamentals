function getProperties(element){
    var elements = Object.getOwnPropertyNames(element);
    elements.sort();

    console.log("The element "+ element);
    console.log("Lexicographically first: " + elements[0]);
    console.log("Lexicographically last: "+ elements[elements.length - 1]);
}

getProperties(document);
getProperties(window);
getProperties(navigator);

/*
function LexicographicallyMinMax(objToParse){
    var min = objToParse, max = objToParse, key;

    for(key in objToParse){
        if(key < min){
            min = key;
        }

        if(key > max){
            max = key;
        }
    }

    console.log('Min: ' + min);
    console.log('Max: ' + max);
}

function LexSmallest(){
    LexicographicallyMinMax(document);
    LexicographicallyMinMax(window);
    LexicographicallyMinMax(navigator);
}
    */