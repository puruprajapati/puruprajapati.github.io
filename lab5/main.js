
// function declaration
function sum(arr) {
  return arr.filter(element => element > 20).reduce((a, b) => a + b);
}

console.log(sum([11, 21, 23, 22, 44]));

// function expression
const getNewArray = input => {
  return input.filter(element => element.length >= 5 && element.includes('a'))
};

console.log(getNewArray(['ramadin', 'notramadin', 'hellooo', 'a', 'how you?']))

