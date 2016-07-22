function solve(args) {
    var input = args,
        people = [],
        step = 3,
        index,
        youngest;

    for ( index = 0, len = input.length; index < len; index += step) {
        people.push({
            firstName: input[index] + '',
            lastName: input[index + 1] + '',
            age: +input[index + 2]
        }); 
    }

    youngest = people.reduce(
        function findYoungest(a, b) {
            return a.age <= b.age ? a : b;
        }
    );

    return youngest.firstName + ' ' + youngest.lastName;
}