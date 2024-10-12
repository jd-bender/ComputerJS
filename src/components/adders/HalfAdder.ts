import XOR from "../../gates/XOR";
import AND from "../../gates/AND";

export default (a: number, b: number): [number, number] => {
    const sum_out = XOR(a, b);
    const carry_out = AND(a, b);

    return [sum_out, carry_out];
};