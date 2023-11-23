/*
  |============================
  | task-1
  |============================
*/
// Відсортуйте рядки за допомогою алгоритму бульбашкового сортування.
console.warn("task-1");
function sortStrings(arr1) {
  let temp;

  for (let j = 0; j < arr1.length - 1; j++) {
    for (let i = j + 1; i < arr1.length; i++) {
      if (arr1[j].localeCompare(arr1[i]) > 0) {
        temp = arr1[j];
        arr1[j] = arr1[i];
        arr1[i] = temp;
      }
    }
  }
}

let arr1 = ["Яблуко", "Персик", "Абрикос", "Мандарин", "Апельсин"];
sortStrings(arr1);
console.log("Рядки у відсортованому порядку: ");
for (let i = 0; i < arr1.length; i++) {
  console.log(`Рядок ${i + 1} is ${arr1[i]}`);
}
/*
  |============================
  | task-2
  |============================
*/
// Відсортуйте елементи на парних місцях за зростанням і на непарних місцях за спаданням
console.warn("task-2");
function bitonicGenerator(arr, n) {
  let evenArr = [];
  let oddArr = [];

  for (let i = 0; i < n; i++) {
    if (i % 2 != 1) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }

  evenArr.sort(function (a, b) {
    return a - b;
  });
  oddArr.sort(function (a, b) {
    return b - a;
  });

  let i = 0;
  for (let j = 0; j < evenArr.length; j++) {
    arr[i++] = evenArr[j];
  }
  for (let j = 0; j < oddArr.length; j++) {
    arr[i++] = oddArr[j];
  }
}

let arr = [1, 5, 8, 9, 6, 7, 3, 4, 2, 0];
console.log("Вихідний масив: " + arr);
let n = arr.length;
bitonicGenerator(arr, n);
let sortedArray = [];
for (let i = 0; i < n; i++) {
  sortedArray.push(arr[i]);
}
console.log("Посортований масив: " + sortedArray);
/*
  |============================
  | task-3
  |============================
*/
// Відсортуйте зв'язаний список, що містить 0, 1 та 2.
console.warn("task-3");
var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function sortList() {
  var count = [0, 0, 0];

  var ptr = head;

  while (ptr != null) {
    count[ptr.data]++;
    ptr = ptr.next;
  }

  var i = 0;
  ptr = head;

  while (ptr != null) {
    if (count[i] == 0) i++;
    else {
      ptr.data = i;
      --count[i];
      ptr = ptr.next;
    }
  }
}

function push(new_data) {
  var new_node = new Node(new_data);

  new_node.next = head;
  head = new_node;
}

function printList() {
  var temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }
}

push(0);
push(1);
push(0);
push(2);
push(1);
push(1);
push(2);
push(1);
push(2);

console.log("Linked List before sorting");
printList();

sortList();

console.log("Linked List after sorting");
printList();
