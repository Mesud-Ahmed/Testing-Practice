import { caesarCipher } from "../src/caesarCipher"

describe("caesarCipher function", () => {
    test("test wrapping from z to a", () => {
        expect(caesarCipher('xyz', 3)).toBe('abc')
    })
    test("handle test case preservation", () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
    })
    test("Punctuations, spaces, and other non-alphabetical characters should remain unchanged", () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    })
})