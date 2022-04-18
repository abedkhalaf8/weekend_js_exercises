function firstLastStr (string){
    let arr = string.split('');
     arr.shift();
     arr.pop();
    return arr.join('');
   }
   console.log("5.1");
   console.log(firstLastStr("asdf"));
   console.log(firstLastStr("as"));
   console.log(firstLastStr("asdasdff"));
   console.log(firstLastStr("a"));