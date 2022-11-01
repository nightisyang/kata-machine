export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    // console.log(graph, source, needle);

    do {
        console.log("seen :", seen);
        console.log("prev:", prev);
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];
        for (let i = 0; i < graph.length; ++i) {
            // if there are no edges
            if (adjs[i] === 0) {
                continue;
            }

            // if we have seen this
            if (seen[i]) {
                continue;
            }

            // otherwise, assigned seen to true and add curr, which is the parent node to previous
            seen[i] = true;
            prev[i] = curr;

            // then enqueue index number to the queue
            q.push(i);
            // console.log("queue:", q);
        }
    } while (q.length);

    // build it backwards
    // starting from the needle, what we were searching for
    let curr = needle;

    // an list of the path of how we found needle
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        // prev[curr] is the parent/or originator of curr/who added me to this search
        curr = prev[curr];
    }

    if (out.length) {
        const result = [source].concat(out.reverse());
        // console.log("result:", result);
        return result;
    }

    return null;
}
