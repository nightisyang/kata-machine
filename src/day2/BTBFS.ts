export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length) {
        // console.log(head, needle);
        const curr = q.shift() as BinaryNode<number> | undefined | null;

        // search
        if (curr?.value === needle) {
            return true;
        }
        if (curr?.left) {
            q.push(curr.left);
        }
        if (curr?.right) {
            q.push(curr.right);
        }
    }
    return false;
}
