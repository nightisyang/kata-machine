function qs(arr: number[], lo: number, hi: number): void {
    console.log(arr);
    // base case
    if (lo >= hi) {
        return;
    }

    //pre
    const pivotIdx = partition(arr, lo, hi);
    //recursion
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);

    //post
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    // everything less than pivot is on the left, shift pivot to idx++ and prev arr[idx] to arr[hi]
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
