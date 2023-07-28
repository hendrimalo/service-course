function SortingNumber(...data) {
    var result = data
    for(let i = 0; i < result.length; i++) {
        for (let j = i+1; j < result.length; j++) {
            if (result[i] < result[j]) {
                swapElement(result, i, j)
            }
        }
        console.log(result)
    }
    return result
}

function swapElement(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

const res = SortingNumber(1,19,2,6,3,9,2,1,6)

