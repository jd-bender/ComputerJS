import OR from "../../src/gates/OR";

describe("AND Gate", () => {
    test("0 | 0", () => {
        expect(OR(0, 0)).toBe(0);
    });
    test("0 | 1", () => {
        expect(OR(0, 1)).toBe(1);
    });
    test("1 | 0", () => {
        expect(OR(1, 0)).toBe(1);
    });
    test("1 | 1", () => {
        expect(OR(1, 1)).toBe(1);
    });
});