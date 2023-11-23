/*
  |============================
  | task-1
  |============================
*/
console.warn('task-1')
class SupermarketQueue {
  constructor() {
    this.queue = [];
  }

  addCustomer(customerName, itemsInBasket) {
    const customer = { name: customerName, items: itemsInBasket };
    this.queue.push(customer);
    console.log(`${customerName} додано до черги з ${itemsInBasket} товарами.`);
  }

  serveCustomer() {
    if (this.queue.length === 0) {
      console.log("Черга порожня. Немає клієнтів для обслуговування.");
    } else {
      const servedCustomer = this.queue.shift();
      console.log(
        `${servedCustomer.name} обслуговано. Залишилось ${this.queue.length} клієнтів у черзі.`
      );
    }
  }

  viewQueue() {
    console.log("Поточний стан черги:");
    this.queue.forEach((customer, index) => {
      console.log(`${index + 1}. ${customer.name} (${customer.items} товарів)`);
    });
  }
}

// Приклад використання
const supermarket = new SupermarketQueue();
supermarket.addCustomer("Іван", 5);
supermarket.addCustomer("Марія", 3);
supermarket.addCustomer("Петро", 2);

supermarket.viewQueue();

supermarket.serveCustomer();
supermarket.serveCustomer();

supermarket.viewQueue();
/*
  |============================
  | task-2
  |============================
*/
console.warn("task-2")
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(task, priority) {
    const item = { task, priority };
    let added = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (item.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, item);
        added = true;
        break;
      }
    }

    if (!added) {
      this.queue.push(item);
    }

    console.log(
      `Завдання "${task}" з пріоритетом ${priority} додано до черги.`
    );
  }

  dequeue() {
    if (this.queue.length === 0) {
      console.log("Черга порожня. Немає завдань для обробки.");
      return null;
    }

    const task = this.queue.shift();
    console.log(
      `Оброблено завдання "${task.task}" з пріоритетом ${task.priority}.`
    );
    return task;
  }

  viewQueue() {
    console.log("Поточний стан черги:");
    this.queue.forEach((item, index) => {
      console.log(`${index + 1}. "${item.task}" (пріоритет ${item.priority})`);
    });
  }
}

// Приклад використання
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Виконати важливу роботу", 1);
priorityQueue.enqueue("Відправити електронний лист", 3);
priorityQueue.enqueue("Прибрати робочий стіл", 2);

priorityQueue.viewQueue();

priorityQueue.dequeue();
priorityQueue.dequeue();

priorityQueue.viewQueue();
/*
  |============================
  | task-3
  |============================
*/
// Створіть програму, яка дозволяє користувачеві додавати пісні в чергу відтворення.
// Реалізуйте операції додавання пісень у чергу, видалення пісень та відтворення їх
//  у визначеному порядку.
console.warn("task-3")
class MusicQueue {
  constructor() {
    this.queue = [];
  }

  addSong(songName, artist) {
    const song = { name: songName, artist: artist };
    this.queue.push(song);
    console.log(`Пісня "${songName}" від ${artist} додана до черги.`);
  }

  playNextSong() {
    if (this.queue.length === 0) {
      console.log("Черга порожня. Немає пісень для відтворення.");
      return null;
    }

    const nextSong = this.queue.shift();
    console.log(`Відтворено пісню "${nextSong.name}" від ${nextSong.artist}.`);
    return nextSong;
  }

  viewQueue() {
    console.log("Поточний стан черги:");
    this.queue.forEach((song, index) => {
      console.log(`${index + 1}. "${song.name}" від ${song.artist}`);
    });
  }
}

// Приклад використання
const musicQueue = new MusicQueue();

musicQueue.addSong("Shape of You", "Ed Sheeran");
musicQueue.addSong("Dance Monkey", "Tones and I");
musicQueue.addSong("Blinding Lights", "The Weeknd");

musicQueue.viewQueue();

musicQueue.playNextSong();
musicQueue.playNextSong();

musicQueue.viewQueue();
