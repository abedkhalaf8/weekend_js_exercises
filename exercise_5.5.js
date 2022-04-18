function myName(text){
    let arr = text.split("");
    let text2 = [];
    text2.push(arr[0].toUpperCase());
    text2.push('.');
    for (let i = 1; i < arr.length; i++){
        if (arr[i] === " "){
            text2.push(arr[i+1].toUpperCase());
        }
    }
    return text2.join("");
}
console.log(myName("Patrick Feeney"));