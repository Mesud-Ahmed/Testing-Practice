import { reverseString } from "./reverseString"

describe('revvereString', () => {

    test('reverses a string without capitalizing', () => {
        expect(reverseString("rat")).toBe("tar")
    })

    test('reverses a sentence', () => {
        expect(reverseString("hello world")).toBe("dlrow olleh")
    })
    test('handles single character strings', () => {
        expect(reverseString('a')).toBe('a');
    });

    test('returns an empty string if input is empty', () => {
        expect(reverseString('')).toBe('');
    });

    test('handles palindromes', () => {
        expect(reverseString('madam')).toBe('madam');
    });
    test('preserves spaces and punctuation', () => {
        expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
    });
    test('handles numbers', () => {
        expect(reverseString('123')).toBe('321');
    });
})