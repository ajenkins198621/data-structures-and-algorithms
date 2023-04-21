const binarySearch = (haystack: number[], needle: number) : boolean => {

    let highIdx = haystack.length;
    let lowIdx = 0;
    while(highIdx > lowIdx) {
        const middleIdx = Math.ceil(lowIdx + (highIdx - lowIdx) / 2);
        const value = haystack[middleIdx];
        if(value === needle) {
            return true;
        } else if (value > needle) {
            highIdx = middleIdx;
        } else {
            lowIdx = middleIdx + 1;
        }
    }


    return false;
}

module.exports = binarySearch;