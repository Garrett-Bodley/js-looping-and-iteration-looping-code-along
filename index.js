// Code your solutions in this file
function writeCards(array, event) {
  let collection = [];
  for (let i = 0; i < array.length; i++) {
    collection.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return collection;
}

function countDown(num) {
  let i = 0;
  while (i <= num) {
    console.log (num);
    num--;
  }
}