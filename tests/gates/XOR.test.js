import XOR from "../../src/gates/XOR";

describe("AND Gate", () => {
    test("0 ^ 0", () => {
        expect(XOR(0, 0)).toBe(0);
    });
    test("0 ^ 1", () => {
        expect(XOR(0, 1)).toBe(1);
    });
    test("1 ^ 0", () => {
        expect(XOR(1, 0)).toBe(1);
    });
    test("1 ^ 1", () => {
        expect(XOR(1, 1)).toBe(0);
    });
});