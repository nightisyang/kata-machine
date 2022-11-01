export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // structural check, if both trees arrived at an empty node together
    if (a === null && a === null) {
        return true;
    }

    // structural check, if both trees arrived at an empty node together
    if (a === null || b === null) {
        return false;
    }

    // value check
    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
