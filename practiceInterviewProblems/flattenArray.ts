type NumArray = number[] | [NumArray];

const flattenArray = (arr : NumArray | [NumArray] ) : NumArray => {
    let newArray = [];
    
    for(let item of arr) {
        if(typeof item === 'object' && Array.isArray(item)) {
            const recursedArr = flattenArray(item);
            console.log(recursedArr);
            newArray = newArray.concat([...recursedArr]);
        } else {
            newArray.push(item as Number);
        }
    }

    return newArray;
}

module.exports = flattenArray