// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);

function greaterThanTen(numbers) {
  const newArr = []
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 10) {
      newArr.push(numbers[i])
    }
    
  }
  return newArr
}
greaterThanTen([1, 2, 3, 11, 12, 13]);



//need to first find proper form for answer, find a way to tell the system to return all items 10 and above



// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]

function bWords(words) {
  // const words = ['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']
  let newArray = []
  for(i = 0; i < words.length; i++) {
  if words[i].starsWith('b') && words[i].startsWith('B') {
  return newArray
  }
   newArr.push(words[i])
  }
}
 bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear'])

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
 originalArray.push(additionalItems)
  return originalArray
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  const items = ['a', 'bbb', 'cccc', 'dddddd', 'eee']

}
// if items = items.length > 3

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
const words = (['apple','banana', 'kiwi', 'pear', 'bacon']);
const letter = words.indexOf('b');
return letter;
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  const findI = (['a', 'b', 'c', 'a','b','c'], 'c');
 const findC = findI.indexOf('c');
 return findC;
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
// function range(1, 5)  {
// const rangeArr = [1, 2, 3, 4, 5,]
// const newArr = rangeArr.slice(1,4); 
// return newArr;
// }

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
