function toWeirdCase(text){
    
    let arr = text.split('');
    for (let i = 0; i < arr.length; i++){
        if(i % 2 == 0)
         {
            arr.splice(i, 1, arr[i].toUpperCase());
        }
    }
    return arr.join("");
}
console.log(toWeirdCase('String'));