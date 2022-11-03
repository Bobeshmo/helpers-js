import isEmpty from "../lib/isEmpty";

describe("Is function test", () => {
    test("Is empty string -> true", () => {
        expect(isEmpty("")).toBe(true)
    });

    test("Is empty string -> false", () => {
        expect(isEmpty("test")).toBe(false)
    });

    test("Is empty object -> true", () => {
        expect(isEmpty({})).toBe(true)
    })

    test("Is empty object -> false", () => {
        expect(isEmpty({name: "Test"})).toBe(false)
    });

    test("Is empty array -> true", () => {
        expect(isEmpty([])).toBe(true)
    });

    test("Is empty array -> false ", () => {
        expect(isEmpty([1, 2, 3])).toBe(false)
    });
});