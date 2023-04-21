function linearSearch(haystack : any[], needle : any) : number {
    let index : number = -1;
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle) {
            index = i;
            break;
        }
    }
    return index;
}

module.exports = linearSearch;