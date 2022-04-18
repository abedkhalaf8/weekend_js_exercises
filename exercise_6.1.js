function accum(text){
    let arr = text.split("");
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j <= i; j++){
            if (j === 0 ) {
              arr2.push(arr[i].toUpperCase());
            } else {
            arr2.push(arr[i].toLowerCase());
            }
        }
        arr2.push('-');
    }
    arr2.pop();
    return arr2.join("");
}
console.log(accum("cwAt")); 
