module.exports = ranger;
module.exports.toRange = toRange;
module.exports.stringToRange = stringToRange;
module.exports.range = range;

function ranger(ranges, fn) {
    //convert all elements of ranges to range arrays
    for (let x in ranges) {
        ranges[x] = toRange(ranges[x]);
    }

    recurse(ranges, 0, fn);

    function recurse(ranges, index, fn) {
        index = index || 0;

        //if we are beyond the bounds of the ranges array
        //then we need to call fn 
        if (!ranges[index]) {
            //pass a copy of the ranges array in its
            //current state to the function
            return fn(ranges.slice());
        }

        //grab the range array for the current index
        let r = ranges[index];

        //for each element of the current range array
        for (let x of r) {
            //replace the value of the ranges aray with the
            //current element of the range array at this index
            ranges[index] = x;

            //move on to the next element in the ranges array
            recurse(ranges, index + 1, fn);

            //reset the element of the ranges for the current index
            //back to its range array
            ranges[index] = r;
        }
    }
}

function toRange(val) {
    if (typeof val === 'string') {
        return stringToRange(val);
    }
    else if (Array.isArray(val)) {
        return range(val[0], val[1]);
    }
}

function stringToRange(str) {
    const r = str.split('-');

    return range(r[0], r[1]);
}

function range(a, b) {
    const r = [];

    if (!isNaN(a) && !isNaN(b)) {
        //numbers
        for (let x = a; x <= b; x++) {
            r.push(parseInt(x, 10));
        }
    }
    else {
        //not numbers
        let from = a.charCodeAt(0);
        let to = b.charCodeAt(0);

        for (let x = from; x <= to; x++) {
            r.push(String.fromCharCode(x));
        }
    }

    r.isRange = true;

    return r;
}