import { getNextGeneration } from "./getNextGeneration";

describe("getNextGeneration", () => {
    it("returns dead aread for dead area", () => {
        expect(
            getNextGeneration([
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ])
        ).toEqual([
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ]);
    });

    it("returns correct fields", () => {
        expect(
            getNextGeneration([
                [true, true, true],
                [true, true, true],
                [true, true, true]
            ])
        ).toEqual([
            [true, false, true],
            [false, false, false],
            [true, false, true]
        ]);

        expect(
            getNextGeneration([
                [true, false, true],
                [false, false, false],
                [true, false, true]
            ])
        ).toEqual([
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ]);

        expect(
            getNextGeneration([
                [false, true, false],
                [false, true, false],
                [false, true, false]
            ])
        ).toEqual([
            [false, false, false],
            [true, true, true],
            [false, false, false]
        ]);

        expect(
            getNextGeneration([
                [true, true, false],
                [true, true, false],
                [false, false, false]
            ])
        ).toEqual([
            [true, true, false],
            [true, true, false],
            [false, false, false]
        ]);

    });



})