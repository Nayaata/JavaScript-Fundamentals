
function GetMax(nums) {

    var numbers = nums[0].split(' ');

    return compare(+numbers[0], compare(+numbers[1], +numbers[2]));

    function compare(a, b) {
        if (a > b) {
            return a;
        }
        else if (b > a) {
            return b;
        }
        else{
            return a;
        }
    }
}

/*
 function solve(args) {
 var array = +args[0].split(' '),
 first = +array[0],
 second = +array[1],
 third = +array[2];

 function GetMax(a, b){
 if(a > b ){
 return a;
 } else if(b > a){
 return b;
 } else {
 return a;
 }
 }

 return GetMax(first, GetMax(second, third));

 }

 */