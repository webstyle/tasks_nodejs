/**
 * Sum two smallest numbers in array
 * @param numbers {Array<number>}
 * @returns {number}
 */
export function sumSmallestNumbers(numbers: Array<number>): number {
    let first: number = Math.min(...numbers);
    let secondNumbers: Array<number> = numbers;

    for (let i: number = 0; i < numbers.length; i++) {
        if (first === numbers[i]) secondNumbers.splice(i, 1);
    }

    let second: number = Math.min(...secondNumbers);
    return first + second;
}
