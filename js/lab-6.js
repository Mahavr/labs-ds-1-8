// знаходження спільних друзів у соціальній мережі
class Graph {
  constructor() {
    this.nodes = new Map(); 
  }

  addNode(user) {
    this.nodes.set(user, []);
  }

  addEdge(user1, user2) {
    this.nodes.get(user1).push(user2);
    this.nodes.get(user2).push(user1);
  }

  findCommonFriends(user1, user2) {
    const friends1 = new Set(this.nodes.get(user1));
    const friends2 = new Set(this.nodes.get(user2));

    const commonFriends = [...friends1].filter((friend) =>
      friends2.has(friend)
    );
    return commonFriends;
  }

  countCommonFriends(user1, user2) {
    const friends1 = new Set(this.nodes.get(user1));
    const friends2 = new Set(this.nodes.get(user2));

    const commonFriends = [...friends1].filter((friend) =>
      friends2.has(friend)
    );
    return commonFriends.length;
  }
}

// Приклад використання
const socialNetwork = new Graph();

socialNetwork.addNode("Alice");
socialNetwork.addNode("Bob");
socialNetwork.addNode("Charlie");
socialNetwork.addNode("David");
socialNetwork.addNode("Eva");

socialNetwork.addEdge("Alice", "Bob");
socialNetwork.addEdge("Bob", "Charlie");
socialNetwork.addEdge("Alice", "David");
socialNetwork.addEdge("David", "Eva");
socialNetwork.addEdge("Charlie", "Eva");
socialNetwork.addEdge("Charlie", "David");

// Знаходження спільних друзів
const commonFriends = socialNetwork.findCommonFriends("Alice", "Charlie");
console.log(`Спільні друзі між Alice та Charlie: ${commonFriends.join(", ")}`);
// виведення кількості спільних друзів
const count = socialNetwork.countCommonFriends('Alice', 'Charlie');
console.log(`Кількість спільних друзів між Alice та Charlie: ${count}`);
