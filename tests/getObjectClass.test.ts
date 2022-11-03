import getObjectClass from "../lib/getObjectClass";

describe("Get object class test", () => {
    test("Array class", () => {
        expect(getObjectClass([])).toBe("[object Array]")
    });

    test("Object class", () => {
        expect(getObjectClass({})).toBe("[object Object]")
    });

    test("String class", () => {
        expect(getObjectClass("")).toBe("[object String]")
    });

    test("Number class", () => {
        expect(getObjectClass(1)).toBe("[object Number]")
    });

    test("Number class", () => {
        expect(getObjectClass(true)).toBe("[object Boolean]")
    });
});