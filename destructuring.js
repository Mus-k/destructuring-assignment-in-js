// 1. Count the occurrences.
function countWord(text) {
  const words = text.split(" ");
  const wordCountMap = new Map();

  for (const word of words) {
    if (wordCountMap.has(word)) {
      wordCountMap.set(word, wordCountMap.get(word) + 1);
    } else {
      wordCountMap.set(word, 1);
    }
  }

  return wordCountMap;
}

const sentence =
  "the quick brown fox jumps over the lazy dog the dog jumps over the moon";
const wordFrequency = countWord(sentence);

for (const [word, count] of wordFrequency) {
  console.log(`Word: ${word}, Count: ${count}`);
}

//   2. Only unique items are allowed.

function uniqueArray(array) {
  return [...new Set(array)];
}

const array = [2, 2, 3, 4, 5, 6, 6, 7, 4, 6, 10];
const res = uniqueArray(array);
console.log(res);

// 3. Swap the values.

const swapValue = (x, y) => {
  [x, y] = [y, x];
  return [x, y];
};
let x = 5;
let y = 10;
console.log(`before swap: x:${x} y:${y}`);
[x, y] = swapValue(x, y);
// after swap
console.log(`after swap x:${x} y:${y}`);

// 4. Access random elements.
function extractElements(array) {
  const [first, second, ...rest] = array;
  const last = rest.pop();
  return [first, second, last];
}
const arrayList = [1, 2, 3, 4, 5, 6];
const extractedArray = extractElements(arrayList);
console.log(extractedArray);

// 5. Min and max values.
function maxMin(maxmin) {
  const max = Math.max(...maxmin);
  const min = Math.min(...maxmin);

  return {
    max,
    min,
  };
}
const arrayMaxMin = [5, 2, 7, 1, 9];
const maxAndMin = maxMin(arrayMaxMin);
console.log(maxAndMin);

// 6. Nested Objects.
function objectDestructuring(person) {
  const {
    name,
    address: { street },
  } = person;

  return {
    name,
    street,
  };
}
const person = {
  name: "Mithun",
  age: 21,
  address: {
    street: "B8, Block B, Industrial Area.",
    city: "Sector 62, Noida",
    state: "Uttar Pradesh",
  },
};
const destructed=objectDestructuring(person);
console.log(destructed);
