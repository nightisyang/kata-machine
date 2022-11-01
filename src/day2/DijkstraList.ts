function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    // will return true while there are some elements that are not visited and distance is not infinity
    return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    // returns the index of the next lowest unvisited child from parent
    let idx = -1;
    let lowestDistance = Infinity;

    // loops through the seen length at the end of the for loop, the index with lowest distance is obtained
    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }

        // finds the lowest value
        if (lowestDistance > dists[i]) {
            lowestDistance = dists[i];
            idx = i;
        }
    }

    return idx;
}

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    console.log("source:", source);
    console.log("sink:", sink);
    console.log("arr:", arr);

    const seen = new Array(arr.length).fill(false);
    const prev = new Array(arr.length).fill(-1);
    const dists = new Array(arr.length).fill(Infinity);

    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const curr = getLowestUnvisited(seen, dists);
        seen[curr] = true;

        console.log(curr);

        const adjs = arr[curr];
        console.log("adjs:", adjs);

        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];

            console.log(edge);
            if (seen[edge.to]) {
                continue;
            }

            const dist = dists[curr] + edge.weight;
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prev[edge.to] = curr;
                console.log(dists, prev);
            }
        }
    }

    const out: number[] = [];
    let curr = sink;

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
        console.log(out);
    }

    out.push(source);
    console.log(out);
    return out.reverse();
}
