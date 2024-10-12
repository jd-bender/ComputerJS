import NAND from "../../src/gates/NAND";

describe("NAND Gate", () => {
    test("0 & 0", () => {
        expect(NAND(0, 0)).toBe(1);
    });
    test("0 & 1", () => {
        expect(NAND(0, 1)).toBe(1);
    });
    test("1 & 0", () => {
        expect(NAND(1, 0)).toBe(1);
    });
    test("1 & 1", () => {
        expect(NAND(1, 1)).toBe(0);
    });
});