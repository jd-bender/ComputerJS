import OR4 from "../gates/OR4.js";

export default (a, b, c, d, e, f, g, h) => {
    const OR_0 = OR4(e, f, g, h);
    const OR_1 = OR4(c, d, g, h);
    const OR_2 = OR4(b, c, f, h);

    return `${OR_0}${OR_1}${OR_2}`;
};