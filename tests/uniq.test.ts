import uniq from "../lib/uniq";

describe("uniq elements test", () => {
    test("simple uniq test", () => {
        expect(uniq([1, 1, 2, 3, 2]))
            .toStrictEqual([1, 2, 3])
    });

    test("hard uniq test", () => {
        expect(uniq([1, 1, 2, 3, 2, "2", "5", 3, 5, "2"]))
            .toStrictEqual([1, 2, 3, "2", "5", 5])
    });
});