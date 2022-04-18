let str = "hello my name is apple";
function word (str) {
let arr = str.split(" ");
let check = [];
for (let i = 0; i < arr.length; i++) {
    check.push(arr[i].length);
}
return Math.min.apply(Math, check);
}
console.log(word(str));
