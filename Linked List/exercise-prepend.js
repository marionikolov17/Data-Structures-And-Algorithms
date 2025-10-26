// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const node = {
            value: value,
            next: null
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }
    prepend(value) {
        const node = {
            value: value,
            next: null
        }
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

console.log(myLinkedList);