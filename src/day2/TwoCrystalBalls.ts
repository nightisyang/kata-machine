import { reduceEachTrailingCommentRange } from "typescript";

export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAnount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAnount;
    for (; i < breaks.length; i += jumpAnount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAnount;

    for (let j = 0; j < jumpAnount && i < breaks.length; ++j, ++i)
        if (breaks[i]) {
            return i;
        }

    return -1;
}
