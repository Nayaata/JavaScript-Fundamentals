function solve(args) {
    var array = args,
        elToRemove = args[0];

        Array.prototype.remove = function removeEl(element) {
            var output = [],
                item;

            for(item in this){
                if (this[item] !== element && typeof this[item] !== 'function') {
                    output.push(this[item]);
                }
            }

            return output;
        }

        return array.remove(elToRemove).join('\n');
}
