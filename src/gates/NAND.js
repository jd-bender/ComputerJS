import NOT from "./NOT.js";
import AND from "./AND.js";

export default (a, b) => NOT(AND(a, b));