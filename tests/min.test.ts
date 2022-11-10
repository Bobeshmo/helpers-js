import min from "../lib/min";

describe("min element test", () => {
    test("min", () => {
        expect(min([3, 5, 4, 1, 8, 10])).toBe(1)
    });
});