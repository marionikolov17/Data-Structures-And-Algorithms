const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/**
 * 
 * @param {number[]} array 
 * @returns 
 */
function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.left) {
        const leftNumber = left[leftIndex];
        const rightNumber = right[rightIndex];

        if (leftNumber > rightNumber) {
            result.push(rightNumber);
            rightIndex++;
        } else if (rightNumber > leftNumber) {
            result.push(leftNumber);
            leftIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);