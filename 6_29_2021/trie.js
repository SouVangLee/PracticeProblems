class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false; //check if it is a terminal node;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, root=this.root) {
    let letter = word[0];

    if (!(letter in root.children)) {
      root.children[letter] = new Node(); //create a new edge and node if the letter does not exist as an edge on the current root
    }

    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      this.insert(word.slice(1), root.children[letter]);
    }
  }

  search(word, root=this.root) {
    let letter = word[0];
    if (!word.length) return root.isTerminal; //if the word.length === 0, check whether the root node is a terminal or not

    if (letter in root.children) {
      return this.search(word.slice(1), root.children[letter]);
    } else{
      return false;
    }
  }

  print(root=this.root) {
    for (let letter in root.children) {
      console.log(letter);
      this.print(root.children[letter]);
    }
  }
}

let myTrie = new Trie();
myTrie.insert('ten');
myTrie.insert('tea');
myTrie.insert('tape');
console.log(myTrie);
console.log(myTrie.search('ten'));
console.log(myTrie.search('te'));
console.log(myTrie.search('tex'));
