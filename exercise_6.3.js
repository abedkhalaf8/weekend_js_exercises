let a = "abcdefghijklmnopqrstuvwxyz";
function longest(a, b){
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f'
, 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let arr = [];
let combin = a + b;
let string = combin.split('');
for (let i = 0; i < alphabet.length; i++){
  for (let j = 0; j < string.length; j++) {
     if ( alphabet[i] === string[j] ){
         arr.push(alphabet[i]);
     }
  }
}
  for (let g = 0; g < arr.length; g++) {
      for (let m = 1; m < arr.length; m++) {
          if( arr[g] === arr[m]){
             arr.splice(m, 1);
          }
      }
  }
 return arr.join('');
}

console.log(longest(a, a)); //-> "abcdefklmopqwxy";
