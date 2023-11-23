class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
/*
    |============================
    | task-1
    |Напишіть функцію, яка додає новий вузол з заданим значенням в кінець зв'язаного списку.
    |============================
  */
console.warn("task-1");
function addToEndOfList(head, value) {
  const newNode = new Node(value);
  if (!head) {
    return newNode;
  }

  let current = head;
  while (current.next) {
    current = current.next;
  }

  current.next = newNode;
  return head;
}
let list = null;
list = addToEndOfList(list, 1);
list = addToEndOfList(list, 2);
list = addToEndOfList(list, 3);
console.log("Додавання в кінець списку:", list);

/*
    |============================
    | task-2
    |Знайдіть та виведіть середній елемент у відсортованому зв'язаному списку.
    |============================
  */
console.warn("task-2");

class NodeOperation {
  pushNode(headRef, dataVal) {
    const newNode = new Node();
    newNode.data = dataVal;
    newNode.next = headRef[0];
    headRef[0] = newNode;
  }
}
const head1 = [null];
const temp = new NodeOperation();
for (let i = 5; i > 0; i--) {
  temp.pushNode(head1, i);
}
const v = [];
let curr = head1[0];
while (curr !== null) {
  v.push(curr.data);
  curr = curr.next;
}
var middle = Math.floor(v.length / 2);
console.log("Middle Value Of Linked List is : " + v[middle]);

/*
        |============================
        | task-3
        |Напишіть функцію для обертання зв'язаного списку в інший бік.
        |============================
      */
console.warn("task-3");
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
list = reverseList(list);
console.log("Обертання списку:", list);
/*
        |============================
        | task-4
        |Визначте, чи має зв'язаний список цикл. 
        |============================
      */
console.warn("task-4");
let head2 = null;
function addToFront(data) {
  let newNode = new Node(data);
  newNode.next = head2;
  head2 = newNode;
}

function isCircular() {
  if (head2 == null) return false;
  let slow = head2;
  let fast = head2.next;
  while (fast != null && fast.next != null) {
    if (slow == fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}

addToFront(1);
addToFront(2);
addToFront(3);
addToFront(4);

console.log(isCircular());

/*
        |============================
        | task-5
        |Напишіть функцію для злиття двох  зв'язаних списків в один  список.
        |============================
      */
console.warn("task-5");
function mergeSortedLists(list1, list2) {
  const dummyHead = new Node();
  let current = dummyHead;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  current.next = list1 || list2;

  return dummyHead.next;
}
let list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(5);

let list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);

const mergedList = mergeSortedLists(list1, list2);
console.log("Злиття двох  списків:", mergedList);

/*
        |============================
        | task-6
        |Переверніть кожний k-ий вузол у зв'язаному списку.
        |============================
      */
console.warn("task-6");
function reverseKNodes(head, k) {
  const reverse = (start, end) => {
    let prev = null;
    let current = start;
    while (current !== end) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  };

  let current = head;
  let prevEnd = null;

  while (current) {
    const start = current;
    let end = current;
    for (let i = 0; i < k && end; i++) {
      end = end.next;
    }

    if (!end) {
      break; // Кінець списку
    }

    const nextStart = end.next;
    end.next = null;

    if (!prevEnd) {
      head = reverse(start, end);
    } else {
      prevEnd.next = reverse(start, end);
    }

    prevEnd = start;
    current = nextStart;
  }

  return head;
}
list = reverseKNodes(list, 2);
console.log("Перевертання кожного k-го вузла:", list);