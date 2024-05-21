type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const node = { value: item, prev: undefined } as Node<T>;
        if (!this.head) {
            this.head = node;
            return;
        }
        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        const node = this.head;
        if (this.length === 0) {
            this.head = undefined;
            return node?.value;
        }

        this.head = node?.prev;
        return node?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
