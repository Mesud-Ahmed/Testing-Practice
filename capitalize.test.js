import { capitalize } from "./capitalize";

describe('capitalize function', () => {

    test(" 'car' becomes 'Car'", () => {
        expect(capitalize("car")).toBe("Car")
    })
    
})
