import NOT from "../gates/NOT.js";
import AND3 from "../gates/AND3.js";

export default (a, b, c) => {
    const NOT_a = NOT(a);
    const NOT_b = NOT(b);
    const NOT_c = NOT(c);

    const AND3_0 = AND3(NOT_a, NOT_b, NOT_c);
    const AND3_1 = AND3(NOT_a, NOT_b, c);
    const AND3_2 = AND3(NOT_a, b, NOT_c);
    const AND3_3 = AND3(NOT_a, b, c);
    const AND3_4 = AND3(a, NOT_b, NOT_c);
    const AND3_5 = AND3(a, NOT_b, c);
    const AND3_6 = AND3(a, b, NOT_c);
    const AND3_7 = AND3(a, b, c);

    return `${AND3_0}${AND3_1}${AND3_2}${AND3_3}${AND3_4}${AND3_5}${AND3_6}${AND3_7}`;
};