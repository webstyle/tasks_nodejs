/**
 * Find X and O characters amount
 * @param str
 * @returns {boolean}
 */
export function sameXOAmount(str: string): boolean {
    let characters: Array<string> = str.split('');
    let X: Array<string> = [];
    let O: Array<string> = [];

    for (let i: number = 0; i < characters.length; i++) {
        if (characters[i].toLocaleLowerCase() === 'x') X.push(characters[i]);
        if (characters[i].toLocaleLowerCase() === 'o') O.push(characters[i]);
    }
    return (X.length === O.length);
}