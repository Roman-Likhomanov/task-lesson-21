export function isCellAlive (field:boolean[][], x:number, y:number) : boolean {
    if (y < 0 || y >= field.length || x < 0 || x > field.length) {
        return false;
    }
    return Boolean(field[y][x]);
}
