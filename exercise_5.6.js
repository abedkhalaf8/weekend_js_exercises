function maskify(number){
    let number2 = number.toString();
    let arr = number2.split("");
    let arr2 = [];
    for (let i = 0; i < arr.length - 4; i++){
        arr2.push('#');
    }
    arr2.push(arr[arr.length - 4]);
    arr2.push(arr[arr.length - 3]);
    arr2.push(arr[arr.length - 2]);
    arr2.push(arr[arr.length - 1]);
    return arr2.join("");
}
console.log(maskify('4556364607935616'));
