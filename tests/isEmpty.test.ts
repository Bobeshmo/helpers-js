import isEmpty from "../lib/isEmpty";

describe("is an empty test", () => {
    test("is an empty string", () => {
        expect(isEmpty("")).toBe(true)
    });

    test("isn't an empty string", () => {
        expect(isEmpty("test")).toBe(false)
    });

    test("is an empty object", () => {
        expect(isEmpty({})).toBe(true)
    })

    test("isn't an empty object", () => {
        expect(isEmpty({name: "Test"})).toBe(false)
    });

    test("is an empty array", () => {
        expect(isEmpty([])).toBe(true)
    });

    test("isn't an empty array", () => {
        expect(isEmpty([1, 2, 3])).toBe(false)
    });
});