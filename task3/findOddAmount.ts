/**
 * Find a number that repeats an odd number of times
 * @param numbers
 * @returns {number}
 */
export function findOddAmount(numbers: Array<number>): number {
    let count: Array<number> = [];
    let result;
    numbers.forEach((item: number) => {
        count[item] = (count[item] || 0) + 1;
    });

    for (let item in count) {
        if (count[item] % 2) result = item;
    }
    return result;
}
