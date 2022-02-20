
/*
Coding Steps:
1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
  a.  Programmatically subtract the value of the first element in the array from the value in the last element of the array
     (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed).
     Print the result to the console.
  b.  Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
  c.  Use a loop to iterate through the array and calculate the average age. Print the result to the console.
*/
/*
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let ages2 = [1, 3, 2, 4];

function probOne(array) {
  let first = array.shift();
  let last = array.pop();
  let diff = last - first;
  console.log('difference: ' + diff);
  array.push(last);
  array.unshift(first);
  console.log('arraytest: ' + array);

  //c.
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}

//a.  Expected Output: 230
probOne(ages);
//b.  Expected Output: 10
probOne(ages2);
*/

/*
2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
  a.  Use a loop to iterate through the array and calculate the average number of letters per name.
      Print the result to the console.
  b.  Use a loop to iterate through the array again and concatenate all the names together, separated by spaces,
      and print the result to the console.
*/
/*
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
// Expected 23
let nameLengthTotal = 0;
// Expected 6
let nameCount = 0;
let nameString = '';
let nameLengths = [];
let nameLengthsTotal = 0;
function count(people) {
  for (let i = 0; i < people.length; i++) {
    nameLengthTotal += people[i].length;
    nameLengths.push(people[i].length);
    nameCount += 1;
  }
  // Expected 3.8333..
  console.log(nameLengthTotal / nameCount);
  // console.log(nameCount);

  // 5. Expected [3, 5, 3, 5, 4, 3]
  console.log(nameLengths);
  for (let i = 0; i < nameLengths.length; i++){
    nameLengthsTotal += nameLengths[i];
  }
  // 6. Expected Outcome: 23
  console.log(nameLengthsTotal);


  for (let i = 0; i < people.length; i++) {
    nameString += people[i] + ' ';
  }
  console.log(nameString);
}
//a. Expected Output: 23
//b. Expected Output: Sam Tommy Tim Sally Buck Bob
count(names);
*/



/*
7.  Write a function that takes two parameters, word and n, as arguments and returns the word
    concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect
    the function to return ‘HelloHelloHello’).
*/
/*
let output = '';
function repeated (word, n) {
  for (let i = 0; i < n; i++) {
    output += word;
  }
  console.log(output);
}
repeated('cat', 3);
*/

/*
8. Fullname
*/
/*
function name(first, last){
  console.log(first + ' ' + last);
}
name('Ted', 'Mosby');
*/

/*
9. Sum over 100 Boolean
   Write a function that takes an array of numbers
   and returns true if the sum of all the numbers in the array is greater than 100.
*/
/*
//  Expected Output: True
let numbers = [ 60, 10, 30, 40, 50];
//  Expected Output: False
let numbers2 = [ 10, 10, 10, 20, 40];

function sumTest(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (sum === 100) {
      return true;
    }
  }
  return false;
}
console.log(sumTest(numbers));
console.log(sumTest(numbers2));
*/

/*
10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/
/*
let numbers2 = [ 10, 10, 10, 20, 50];
function sumAvg (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / (array.length);
}
// Expected Output: 20
console.log(sumAvg(numbers2));
*/


/*
11.  Write a function that takes two arrays of numbers
     and returns true if the average of the elements in the first array is greater than the average
     of the elements in the second array.
*/
/*
let numbers1 = [ 20, 20, 20, 40, 50];
let numbers2 = [ 10, 10, 10, 20, 50];
function sumAvg (array1, array2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i];
  }
  let avg1 = sum1 / (array1.length);
  let avg2 = sum2 / (array2.length);
  if (avg1 > avg2) {
    return true;
  }
  return false;
}
// Expected Output: true
console.log(sumAvg(numbers1, numbers2));

// Expected Output: false
console.log(sumAvg(numbers2, numbers1));
*/


/*
12.  Write a function called willBuyDrink that takes a boolean isHotOutside,
     and a number moneyInPocket, and returns true if it is hot outside
     and if moneyInPocket is greater than 10.50.
*/
/*
function willBuyDrink (isHotOutside, moneyInPocket) {
  if (isHotOutside && (moneyInPocket > 10.50)) {
    return true;
  }
  return false;
}
// Expected Output: true
console.log(willBuyDrink(true, 11));
// Expected Output: false
console.log(willBuyDrink(true, 10));
// Expected Output: false
console.log(willBuyDrink(false, 11));
*/


/*
13.  Create a function of your own that solves a problem.
     In comments, write what the function does and why you created it.
*/

/*
I created a function that takes an array of arrays
that contain room names and their width and length dimensions
and outputs a room count and the room names with their corresponding square footage.

This is has value for architects and contractors that have to calculate square footage after taking measurements onsite.
*/

// input - array of arrays
let rooms = [['bedroom_1', 3, 2], ['kitchen', 4,3], ['bath', 4,5], ['bedroom_2', 3, 2], ['living room', 4,3], ['garage', 4,5]];

const floorArrowArray = (buildingInfo) => {
  let totalSqft = 0;
  let output = 'Building Info: ';

	for (i = 0; i < buildingInfo.length; i++){
  let area = (buildingInfo[i][1] * buildingInfo[i][2]);
  let roomName = buildingInfo[i][0];
  let roomCount = i+1;
  output += '\n     ' + 'Room ' + roomCount + ': ' + roomName + '    Area: ' + area + ' SqFt';
  totalSqft += area;
  }
  return output + '\nTotal Building Area: ' + totalSqft + ' Sqft';
}
 console.log(floorArrowArray(rooms));


