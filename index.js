class Node {
  constructor (val) {
    this.value = val;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  append(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }

      prev.next = newNode;
    }

    this.size++;
  }

  removeFromHead() {
    if (this.isEmpty()) return null;

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    } else if (this.size === 1) {
      let val = this.head.value;
      this.head = null;
      return val;
    }

    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    const value = curr.next.value;
    curr.next = null
    this.size--;
    return value;
  }

  search(value) {
    if (this.isEmpty()) return null;

    let curr = this.head;

    for (let i = 0; i < this.size; i++) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
    }

    return -1;
  }

  reverse() {
    if (this.isEmpty() || this.size === 1) return false;

    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
    return true;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    if (this.isEmpty()) return null;

    let curr = this.head;
    let str = "";

    while (curr) {
      str += `${curr.value} `;
      curr = curr.next;
    }
    console.log(str);
  }
}

// const link = new LinkList();
// link.prepend(1);
// link.prepend(2);
// link.prepend(3);
// link.prepend(3);
// link.prepend(3);
// link.append(0)
// link.append(-1)
// link.print();
// console.log(link.removeFromEnd());
// link.removeFromEnd();
// link.removeFromEnd();
// console.log(link.search(4));
// link.print();
// link.reverse();
// link.print();