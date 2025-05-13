// Function to find the sum of the two largest integers in an array
// Selection sort to sort array in descending order
function selectionSortDescending(arr) {
    const n = arr.length;
    const result = [...arr]; // clone arr

    for (let i = 0; i < n - 1; i++) {
        let maxIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (result[j] > result[maxIdx]) {
                maxIdx = j;
            }
        }

        // Swap the elements
        if (maxIdx !== i) {
            const temp = result[i];
            result[i] = result[maxIdx];
            result[maxIdx] = temp;
        }
    }

    return result;
}

// Function to find sum of top two integers using custom sort
function sumOfTopTwoIntegers(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two integers.";
    }

    const sorted = selectionSortDescending(arr);
    return Number(Number(sorted[0]) + Number(sorted[1]));
}

// Unit test function
function runTests() {

    const tests = [
        {
            input: [1, 4, 2, 3, 5],
            name: "test 1"
        },
        {
            input: [-1, -4, -2, -3, -5],
            name: "test 2"
        },
        {
            input: [5],
            name: "test 3"
        },
        {
            input: [7, 7, 7, 7],
            name: "test 4"
        },
        {
            input: [10, -1, 2, 7, 3],
            name: "test 5"
        },
        {
            input: [10, -1, 2, 7, 3, '9'],
            name: "test 6"
        },
    ]


    for (const test of tests) {
        const result = sumOfTopTwoIntegers(test.input);
        console.log(`${test.name} Output:`, result);
    }
}

// Run all tests
runTests();
