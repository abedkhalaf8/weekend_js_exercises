function isIsogram(text) {
 let arr = text.split("");
 let counter = 0;
 for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr.length; j++) {
         if ( arr[i].toUpperCase() == arr[j].toUpperCase() && i !== j) {
             counter++;
         }
     }
 }
   if(counter === 0){
     return true;
 } else {
     return false;
 }
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse")); 
