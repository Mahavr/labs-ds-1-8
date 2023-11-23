class Node {
  constructor(name, type, size = 0) {
    this.name = name;
    this.type = type; // 'file' або 'folder'
    this.size = size;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }

  removeChild(childName) {
    this.children = this.children.filter((child) => child.name !== childName);
  }

  findNode(nodeName) {
    if (this.name === nodeName) {
      return this;
    }

    for (const child of this.children) {
      const foundNode = child.findNode(nodeName);
      if (foundNode) {
        return foundNode;
      }
    }

    return null;
  }

  calculateSize() {
    if (this.type === "file") {
      return this.size;
    }

    return this.children.reduce(
      (totalSize, child) => totalSize + child.calculateSize(),
      0
    );
  }
}

// Приклад використання
const root = new Node("root", "folder");

const documents = new Node("Documents", "folder");
const music = new Node("Music", "folder");
const photos = new Node("Photos", "folder");

root.addChild(documents);
root.addChild(music);
root.addChild(photos);

const resume = new Node("resume.txt", "file", 20);
const song1 = new Node("song1.mp3", "file", 10);
const photo1 = new Node("photo1.jpg", "file", 5);

documents.addChild(resume);
music.addChild(song1);
photos.addChild(photo1);

// Виведення структури дерева
console.log("Структура дерева:");
console.log(JSON.stringify(root, null, 2));

// Пошук файлу за ім'ям
const foundNode = root.findNode("song1.mp3");
console.log("\nЗнайдений вузол:");
console.log(JSON.stringify(foundNode, null, 2));

// Видалення файлу
music.removeChild("song1.mp3");
console.log("\nСтруктура дерева після видалення:");
console.log(JSON.stringify(root, null, 2));

// Розмір папки
const sizeOfMusicFolder = music.calculateSize();
console.log("\nРозмір папки Music:", sizeOfMusicFolder, "KB");
