const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        const currentNumber = array[i];
        let smallestNumber = currentNumber;
        let smallestNumberIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            const nextNumber = array[j];

            if (nextNumber < smallestNumber) {
                smallestNumber = nextNumber;
                smallestNumberIndex = j;
            }
        }

        array[i] = array[smallestNumberIndex];
        array[smallestNumberIndex] = currentNumber;
    }

    return array;
}

console.log(selectionSort(numbers));