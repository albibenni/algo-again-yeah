import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    //const q: (BinaryNode<number> | null)[] = [head];
    const q: Queue<BinaryNode<number> | null> = new Queue();
    q.enqueue(head);

    while (q.length) {
        //const curr = q.shift() as BinaryNode<number> | undefined | null;
        const curr = q.deque() as BinaryNode<number> | undefined | null;
        if (!curr) continue;

        // search
        if (curr?.value === needle) {
            return true;
        }
        //q.push(curr.left);
        q.enqueue(curr.left);
        //q.push(curr.right);
        q.enqueue(curr.right);
    }
    return false
}
