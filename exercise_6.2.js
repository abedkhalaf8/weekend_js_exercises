function duplicates(text) {
let arr = text.split("");
let result = {};
let counter = 0;
 for (let i = 0; i < arr.length; i++){
     for (let j = 0; j < arr.length; j++){
         if (  arr[i].toUpperCase() === arr[j].toUpperCase() )
         {
             counter++;
         }
     }
     if ( counter > 1){
        result[arr[i].toLowerCase()] = counter;
     }
     counter = 0;
    } 
 if(Object.keys(result).length === 0){
     return 'no characters repeats more than once';
 }
 return result;
}
console.log(duplicates("abcde"));
console.log(duplicates("aabbcde"));
console.log(duplicates("aabBcde"));
console.log(duplicates("indivisibility"));
console.log(duplicates("Indivisibilities"));
console.log(duplicates("aA11"));
console.log(duplicates("ABBA"));
