import isValidDate from "../lib/isValidDate";

describe("is a valid date test", () => {
    test("is a valid date", () => {
        expect(isValidDate(new Date("2020-01-01"))).toBe(true)
    });

    test("isn't a valid date", () => {
        expect(isValidDate(new Date("2022-03-36"))).toBe(false)
    });
});