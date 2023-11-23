/*
  |============================
  | task-1
  |============================
*/
// Знайти найбільшу суму пари елементів в неупорядкованому масиві.
console.warn("task-1");
function findLargestSumPair(arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];

      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

// Приклад використання
let arr1 = [12, 34, 10, 6, 40];
let maxPairSum = findLargestSumPair(arr1);
console.log(arr1);
console.log("Max Pair Sum is " + maxPairSum);
/*
  |============================
  | task-2
  |============================
*/
// Знайти елемент, який не є меншим за своїх сусідів.
console.warn("task-2");
function findPeak(arr, n) {
  if (n == 1) return 0;
  if (arr[0] >= arr[1]) return 0;
  if (arr[n - 1] >= arr[n - 2]) return n - 1;

  for (var i = 1; i < n - 1; i++) {
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
  }
}

// Приклад використання
var arr2 = [1, 3, 20, 4, 1, 0];
var n = arr2.length;
console.log(arr2);
console.log("Index of a peak point is " + findPeak(arr2, n));
/*
  |============================
  | task-3
  |============================
*/

// Для масиву розміром n та цілого числа k знайти всі елементи в масиві, які
//  зустрічаються більше, ніж n / k разів.
console.warn("task-3");

function findIntersection(arr1, arr2) {
  let i = 0;
  let j = 0;
  const temp = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      temp.push(arr1[i]);
      i++;
      j++;
    }
  }

  return temp;
}
 const arr3 = [1, 5, 10, 20, 40, 80];
 const arr4 = [6, 7, 20, 80, 100];
 const arr5 = [3, 4, 15, 20, 30, 70, 80, 120];

 // Find the intersection of arr1 and arr2
 const temp = findIntersection(arr3, arr4);

 // Find the intersection of temp and arr3 to get common elements
 const ans = findIntersection(temp, arr5);

 console.log("Common elements present in arrays are:");
 for (const element of ans) {
   console.log(element);
 }