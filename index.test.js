const index = require("./index");

describe("Test Fizz Bazz", () => {
    test("Puesta en Marcha", () => {
        expect(true).toBe(true);
    })

    test("Test 1",() => {
        const expected = 1;
        const result = index(1);
        expect(expected).toBe(result);
    })

    test("Test Fizz", () => {
        const expected = "fizz";
        const result = index(3);
        expect(expected).toBe(result);
    })

    test("Test Fizz 2", () => {
        const expected = "fizz";
        const result = index(6);
        expect(expected).toBe(result);
    })

    test("Test Bazz", () => {
        const expected = "bazz";
        const result = index(5);
        expect(expected).toBe(result);
    })

    test("Test Bazz 2", () => {
        const expected = "bazz";
        const result = index(5);
        expect(expected).toBe(result);
    })

    test("Test fizzBazz", () => {
        const expected = "fizzBazz";
        const result = index(15);
        expect(expected).toBe(result);
    })

    test("Test fizzBazz 2", () => {
        const expected = "fizzBazz";
        const result = index(30);
        expect(expected).toBe(result);
    })

    test("Test Incluye un 3", () => {
        const expected = "fizz";
        const result = index(31);
        expect(expected).toBe(result);
    })

    test("Test Incluye un 5", () => {
        const expected = "bazz";
        const result = index(52);
        expect(expected).toBe(result);
    })

    test("Error typeof", () => {
        const expected = "Error type variable";
        const result = index("3");
        expect(expected).toBe(result);
    })
})