export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        // arr.length - 1 because you don't need to compare end of arr + 1
        // arr.length - i because ignore -i++ for each loop
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
