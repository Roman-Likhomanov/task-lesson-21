import { isCellAlive } from "./isCellAlive";

describe("isCellAlive", () => {
    let field:[boolean[], boolean[]];

    beforeEach(() => {
        field = [
            [true, false, false],
            [true, true, true]
        ];
    });

    it("return true for alive cell", () => {
        expect(isCellAlive(field, 0, 0)).toBe(true);
        expect(isCellAlive(field, 0, 1)).toBe(true);
        expect(isCellAlive(field, 1, 1)).toBe(true);
        expect(isCellAlive(field, 2, 1)).toBe(true);
    });

    it("return false for alive cell", () => {
        expect(isCellAlive(field, 1, 0)).toBe(false);
        expect(isCellAlive(field, 2, 0)).toBe(false);
        expect(isCellAlive(field, 2, 2)).toBe(false);
        expect(isCellAlive(field, 4, 1)).toBe(false);
    });

    it("return false for cells outside described field", () => {
        expect(isCellAlive(field, 0, -1)).toBe(false);
        expect(isCellAlive(field, 0, 5)).toBe(false);
        expect(isCellAlive(field, 5, -1)).toBe(false);
        expect(isCellAlive(field, -1, -1)).toBe(false);
    });
})