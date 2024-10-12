import { parseByte } from "../src/utilities";

describe("Bit Parser", () => {
    test("10110111", () => {
        expect(parseByte("10110111")).toStrictEqual([1, 0, 1, 1, 0, 1, 1, 1]);
    });
    test("11111111", () => {
        expect(parseByte("11111111")).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1]);
    });
});