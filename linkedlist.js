function Node(value, nextNode) {
  return { value, nextNode };
}

function LinkedList() {
  let head = Node(null, null);
  let tail = Node(null, null);

  function append(value) {
    const newNode = Node(value, null);
    if (head.value === undefined || head.value === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.nextNode = newNode;
      tail = newNode;
    }
  }

  function prepend(value) {
    if (head.value === undefined || head.value === null) {
      console.log("List empty");
      return;
    } else {
      const newNode = Node(value, head);
      head = newNode;
    }
  }

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function size() {
    function count(head) {
      if (head === undefined || head === null) {
        return 0;
      }
      return 1 + count(head.nextNode);
    }
    return count(head);
  }

  function at(index) {
    let count = 0;
    function traverse(head, count) {
      if (head === undefined || head === null) {
        return null;
      }
      if (count === index) {
        return head;
      }
      count++;
      return traverse(head.nextNode, count);
    }
    return traverse(head, count);
  }

  function pop() {
    tail.value = null;
    const traverse = (head) => {
      if (head.nextNode.value === null || head.nextNode.value === undefined) {
        tail = head;
        tail.nextNode = null;
        return;
      }
      traverse(head.nextNode);
    };
    traverse(head);
  }

  function contains(value) {
    const traverse = (head) => {
      if (head.value === value) {
        return true;
      }
      if (head.nextNode === null) {
        return false;
      }
      return traverse(head.nextNode);
    };
    return traverse(head);
  }

  function find(value) {
    let count = 0;
    const traverse = (head) => {
      if (head.value === value) {
        return;
      }
      if (head.nextNode === null) {
        count = null;
        return;
      }
      count++;
      traverse(head.nextNode);
    };
    traverse(head);
    return count;
  }

  function toString() {
    let stringList = "";
    const traverse = (head) => {
      stringList += `( ${head.value} ) -> `;
      if (head.nextNode === null) {
        stringList += `null`;
        return;
      }
      traverse(head.nextNode);
    };
    traverse(head);
    return stringList;
  }

  return { append, prepend, getHead, getTail, size, at, pop, contains, find, toString };
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
