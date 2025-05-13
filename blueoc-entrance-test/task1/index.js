function mostCommonLengthStrings(arr) {
  if (!Array.isArray(arr)) return [];

  const lengthCount = new Map();

  // count of length
  for (const str of arr) {
    const len = str.length;
    // check lengthCount include length of str
    let currentCount = lengthCount.get(len);

    // if none, set currentCount = 0, and put into map
    if (currentCount === undefined) {
      currentCount = 0;
    }
    lengthCount.set(len, currentCount + 1);

  }

  // find maxCount of length
  let maxCount = 0;
  for (const count of lengthCount.values()) {
    if (count > maxCount) maxCount = count;
  }

  const commonLengths = [];
  for (const [len, count] of lengthCount.entries()) {
    if (count === maxCount) {
      commonLengths.push(len);
    }
  }

  return arr.filter(str => commonLengths.includes(str.length));
}



function runTests() {

  const tests = [
    {
      input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'],
      name: 'Test 1'
    },
    {
      input: ['aa', 'bb', 'cc', 'o', 't', 'u', 'i', '7'],
      name: 'Test 2'
    },
    {
      input: ['hello'],
      name: 'Test 3'
    },
    {
      input: [],
      name: 'Test 4'
    },
    {
      input: ['a', 'bb', 'ccc', 'd', 'ee', 'fff'],
      name: 'Test 5'
    }
  ];

  for (const test of tests) {
    const result = mostCommonLengthStrings(test.input);
    console.log(`${test.name} Output:`, result);
  }
}

runTests();
