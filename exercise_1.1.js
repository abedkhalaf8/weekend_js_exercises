function checkBoolean(text) {
    if (typeof text === "boolean") {
        return "yes";
    } else {
        return "no";
    }
}
console.log(checkBoolean(true));
