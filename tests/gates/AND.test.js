import AND from "../../src/gates/AND";

describe("AND Gate", () => {
    test("0 & 0", () => {
        expect(AND(0, 0)).toBe(0);
    });
    test("0 & 1", () => {
        expect(AND(0, 1)).toBe(0);
    });
    test("1 & 0", () => {
        expect(AND(1, 0)).toBe(0);
    });
    test("1 & 1", () => {
        expect(AND(1, 1)).toBe(1);
    });
});