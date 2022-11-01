function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    //base case - at the end when curr is undefined
    if (!curr) {
        return path;
    }

    // recurse 3 steps

    // pre

    // recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // post
    path.push(curr.value);

    console.log(path);
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    // const path: number[] = [];
    return walk(head, []);

    // return path;
}
