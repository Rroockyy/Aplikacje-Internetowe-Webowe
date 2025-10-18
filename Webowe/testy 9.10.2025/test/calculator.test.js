// /test/calculator.test.js

import {add} from "../src/calculator.js"

describe("Testing the add function", () =>{
    test("Natural numbers", () =>{
        // Arrange
        const a = 2;
        const b = 2;
        const res = 4;
        // Action
        const result = add(a, b);
        // Assert
        expect(result).toBe(res)
    })

    test("Negative numbers", () =>{
        // Arrange
        const a = -2;
        const b = -2;
        const res = -4;
        // Action
        const result = add(a, b);
        // Assert
        expect(result).toBe(res)
    })

    test("Decimal numbers", () =>{
        // Arrange
        const a = 0.1;
        const b = 0.2;
        const res = 0.3;
        // Action
        const result = add(a, b);
        // Assert
        expect(result).toBe(res)
    })
});