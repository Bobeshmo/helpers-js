import isCorrectDate from "../lib/isCorrectDate";

describe("is the correct date test", () => {
    test("is the correct date", () => {
        expect(isCorrectDate(28, 1, 2022)).toBe(true)
    });

    test("is the incorrect date", () => {
        expect(isCorrectDate(29, 1, 2022)).toBe(false)
    });
});