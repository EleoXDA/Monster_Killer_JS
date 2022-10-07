const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// assignment #1
if (randomNumber > 0.7) {
  alert(`${randomNumber} is greater than 0.7`)
} else {
  alert(`${randomNumber} is NOT greater than 0.7`)
}

//assignment #2
// first way
const arrayOfNumbers = [6,4,7,4,2,1,7,9,3,0.4,-5];

for (let i = 0; i < arrayOfNumbers.length; i++){
  console.log(arrayOfNumbers[i]);
}
// second way
for (const number of arrayOfNumbers) {
  console.log(number);
}
// third way
let counter = 0
while (counter < arrayOfNumbers.length) {
  console.log(arrayOfNumbers[counter]);
  counter++
}

