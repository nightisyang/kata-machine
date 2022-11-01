type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        // add new node F
        const node = { value: item } as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        // make F point to E
        node.prev = this.head;
        // make F the head
        this.head = node;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        // reassign current head, node to be poped as head
        const head = this.head as Node<T>;

        // reassign prev node to new head
        this.head = head?.prev;
        // console.log(this.head?.value);

        // free
        // return value of popped node
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
