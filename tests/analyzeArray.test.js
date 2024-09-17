import { analyzeArray } from "../src/analyzeArray"


describe("analyzeArray function", () => {
    test('works fine for numbers ', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 })
    })
    test('returns null for empty array', () => {
        expect(analyzeArray([])).toBeNull();
    })
})