exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0, n = arr.length; i < n; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {

  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0, n = arr.length; i < n; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    sqr= [];

    for (var i = 0, len = arr.length; i < len; i++) {
        sqr.push(arr[i] * arr[i]);
    }

    return sqr;
  },

  findAllOccurrences: function(arr, target) {

  }
};
