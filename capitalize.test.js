import { capitalize } from "./capitalize";

describe('capitalize function', () => {

    test(" 'car' becomes 'Car'", () => {
        expect(capitalize("car")).toBe("Car")
    })
    test("capitalizes the first character of a sentence", () => {
        expect(capitalize("this is a test")).toBe("This is a test")
    })
    
    test('handles single charcter strings',()=>{
        expect(capitalize('a')).toBe("A")
    })
    test('returns empty string for empty input',()=>{
        expect(capitalize("")).toBe("")
    })
    test("ignores non alphabetic first character",()=>{
        expect(capitalize("12ab")).toBe("12ab")
    })
    test("doesn't change the rest of the string",()=>{
        expect(capitalize('heLLO')).toBe("HeLLO")
    })
})
