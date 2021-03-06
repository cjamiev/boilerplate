const {
  decrementElementIndexData,
  differenceTestData,
  dropTestData,
  flattenTestData,
  flattenDeepTestData,
  incrementElementIndexData,
  swapArrayElementPositionsData,
  unqiueTestData
} = require('testHelper/testData/array-operations-data');
const { testFunctionHelper } = require('testHelper/helper');
const {
  decrementElementIndex,
  difference,
  drop,
  flatten,
  flattenDeep,
  incrementElementIndex,
  swapArrayElementPositions,
  unique
} = require('array-operations');

describe(':swapArrayElementPositions', () => {
  swapArrayElementPositionsData.forEach(data => testFunctionHelper(data, swapArrayElementPositions));
});

describe(':decrementElementIndex', () => {
  decrementElementIndexData.forEach(data => testFunctionHelper(data, decrementElementIndex));
});

describe(':incrementElementIndex', () => {
  incrementElementIndexData.forEach(data => testFunctionHelper(data, incrementElementIndex));
});

describe(':difference', () => {
  differenceTestData.forEach(data => testFunctionHelper(data, difference));
});

describe(':drop', () => {
  dropTestData.forEach(data => testFunctionHelper(data, drop));
});

describe(':flatten', () => {
  flattenTestData.forEach(data => testFunctionHelper(data, flatten));
});

describe(':flattenDeep', () => {
  flattenDeepTestData.forEach(data => testFunctionHelper(data, flattenDeep));
});

describe(':unique', () => {
  unqiueTestData.forEach(data => testFunctionHelper(data, unique));
});
