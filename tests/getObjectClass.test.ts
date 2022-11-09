import getObjectClass from "../lib/getObjectClass";

describe("object class test", () => {
    test("array class", () => {
        expect(getObjectClass([])).toBe("[object Array]")
    });

    test("object class", () => {
        expect(getObjectClass({})).toBe("[object Object]")
    });

    test("string class", () => {
        expect(getObjectClass("")).toBe("[object String]")
    });

    test("number class", () => {
        expect(getObjectClass(1)).toBe("[object Number]")
    });

    test("boolean class", () => {
        expect(getObjectClass(true)).toBe("[object Boolean]")
    });
});