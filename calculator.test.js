import { calculator } from "./calculator"

describe("calculator Object", () => {
    test("handles 2 positive numbers", () => {
        expect(calculator.add(3, 2)).toBe(5)
    })

    test("handles 2 positive numbers", () => {
        expect(calculator.subtract(4, 2)).toBe(2)
    })

    test("handles 2 positive numbers", () => {
        expect(calculator.divide(4, 2)).toBe(2.00)
    })

    test("handles division by zero", () => {
        expect(calculator.divide(4, 0)).toBe(Infinity)
    })
    test("handles floating results", () => {
        expect(calculator.divide(3, 2)).toBe(1.50)
    })
    test("rounds to two decimal places for non terminating results", () => {
        expect(calculator.divide(10, 3)).toBe(3.33)
    })
    test("handles 2 positive numbers", () => {
        expect(calculator.multiply(3, 2)).toBe(6.00)
    })

    test("rounds to two decimal places for fractional numbers ", () => {
        expect(calculator.multiply(3.3, 2.45)).toBe(8.09)
    })
    test('handles negative numbers', () => {
        expect(calculator.add(-5, -3)).toBe(-8);
        expect(calculator.subtract(-5, -3)).toBe(-2);
        expect(calculator.multiply(-5, -3)).toBe(15.00);
        expect(calculator.divide(-6, -3)).toBe(2.00);
    });
})