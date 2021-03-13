const data = require('./lib/arrayFactory.js');
const test = require('./lib/test.js');

/*
 * Code Here!
 * */

// Optional
function clean(data) {
  return data.filter(i => typeof i === 'number');
}

// Should return array
function sortAscending(data) {
  // Code Here
  let len = data.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return clean(data);
}

// Should return array
function sortDescending(data) {
  // Code Here
  let len = data.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (data[j] < data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return clean(data);
}

// DON'T CHANGE
test(sortAscending, sortDescending, data);
