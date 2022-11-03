import isCorrectDate from "../lib/isCorrectDate";

describe("Is correct date test", () => {
    test("Is correct date", () => {
        expect(isCorrectDate(28, 1, 2022)).toBe(true)
    });

    test("Is incorrect date", () => {
        expect(isCorrectDate(29, 1, 2022)).toBe(false)
    });
});