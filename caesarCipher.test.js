import { caesarCipher } from "./caesarCipher"

describe("caesarCipher function", () => {
test("test wrapping from z to a",()=>{
    expect(caesarCipher('xyz',3)).toBe('abc')
})
})