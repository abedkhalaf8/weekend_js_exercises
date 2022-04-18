function basicOp(op, value1, value2) {

    if (op == '+') { return value1 + value2 };
    if (op == '-') { return value1 - value2 };
    if (op == '*') { return value1 * value2 };
    if (op == '/') { return value1 / value2 };
}
console.log(basicOp("+", 4, 2));

