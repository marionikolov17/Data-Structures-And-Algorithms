// add a method insert() to the linked list that adds a node to the specified index.

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
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(array);
        return array;
    }
    insert(index, value) {
        if (index > this.length - 1) {
            this.append(value);
            return this.printList();
        }
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        const newNode = {
            value,
            next: null
        }

        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        newNode.next = holdingPointer;
        leader.next = newNode;

        this.length++;
        return this.printList();
    }
    remove(index) {
        if (index > this.length - 1) {
            return console.log("Index out of range");
        }

        if (index === 0) {
            const nextHead = this.head.next;
            this.head = {
                value: nextHead.value,
                next: nextHead.next
            }
            this.length--;
            return this.printList();
        }

        const leader = this.traverseToIndex(index - 1);
        const nodeForDelete = leader.next;

        leader.next = nodeForDelete.next;
        this.length--;
        return this.printList();
    }
    traverseToIndex(index) {
        let currentIndex = 0;
        let currentNode = this.head;

        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 99)
myLinkedList.insert(20, 88)
myLinkedList.insert(4, 33);
myLinkedList.remove(3);
myLinkedList.remove(5);
myLinkedList.remove(0);