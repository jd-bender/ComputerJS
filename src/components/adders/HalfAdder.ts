import XOR from "../../gates/XOR.js";
import AND from "../../gates/AND.js";

type sum = number;
type carryOut = number;

export default (a: number, b: number): [sum, carryOut] => {
    const sum_out = XOR(a, b);
    const carry_out = AND(a, b);

    return [sum_out, carry_out];
};