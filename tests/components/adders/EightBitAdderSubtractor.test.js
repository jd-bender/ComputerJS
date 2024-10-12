import EightBitAdderSubtractor from "../../../src/components/adders/EightBitAdderSubtractor";

describe("Eight Bit Adder Subtractor", () => {
    test("Add 10110110 to 01100101", () => {
        expect(EightBitAdderSubtractor('01100101', '10110110', 0)).toBe("100011011");
    });
    test("Subtract 10110000 from 11111101", () => {
        expect(EightBitAdderSubtractor('11111101', '10110000', 1)).toBe("001001101");
    });
});