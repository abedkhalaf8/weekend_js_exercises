function repeat_str(repeat, str){
    let arr = [];
    for (let i = 0; i < repeat; i++){
        arr.push(str);

    }
    return arr.join("");
}
console.log(repeat_str(5,'l'));