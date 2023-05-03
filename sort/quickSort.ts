
const qs = (arr: number[], lo: number, high: number): number[] => {
    if(lo >= high) {
        return arr;
    }

    const newArr = arr;
    const pivotIdx = partition(newArr, lo, high);
    qs(newArr, lo, pivotIdx - 1);
    qs(newArr, pivotIdx + 1, high);
    return newArr;

}

// Returns the index of the pivot
const partition = (arr: number[], low: number, high: number): number => {
    const pivot = arr[high];
    
    let pivotIdx = low - 1;

    for (let i = low; i < high; ++i) {
        // Put that value into the left side of the pivot
        if(arr[i] <= pivot) {
            pivotIdx++;

            // Swap the values
            const tmp = arr[i];
            arr[i] = arr[pivotIdx];
            arr[pivotIdx] = tmp;
        }
    }

    // Swap the pivot with the value at the pivot index
    pivotIdx++;
    const tmp = arr[pivotIdx];
    arr[pivotIdx] = arr[high];
    arr[high] = tmp;

    return pivotIdx;
}

// Returning void as we're mutating the original array
const quickSort = (arr: number[]): number[] => {
    const newArr = qs(arr, 0, arr.length - 1)
    return newArr;
}

module.exports = quickSort