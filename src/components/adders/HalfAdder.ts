import XOR from "../../gates/XOR.js";
import AND from "../../gates/AND.js";

export default (a: number, b: number): [number, number] => {
    const sum_out = XOR(a, b);
    const carry_out = AND(a, b);

    return [sum_out, carry_out];
};