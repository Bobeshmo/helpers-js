import isValidDate from "../lib/isValidDate";

describe("Is function test", () => {
    test("Is valid date -> true", () => {
        expect(isValidDate(new Date("2020-01-01"))).toBe(true)
    });

    test("Is valid date -> false", () => {
        expect(isValidDate(new Date("2022-03-36"))).toBe(false)
    });
});