import max from "../lib/max";

describe("max element test", () => {
    test("max", () => {
        expect(max([3, 5, 4, 1, 8, 10])).toBe(10)
    });
});