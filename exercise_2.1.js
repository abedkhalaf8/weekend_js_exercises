let arr = [434, 4, 89, 21,46, 72, 654];
function check(arr) {
    let newarr = [];
    for (var i = 0; i < arr.length; i++) {
        let c = 0;
        for (let j = 0; j < arr.length ; j++) {
            if (arr[i] < arr[j]) {
                c++;
            }
        }
        if (c == arr.length - 1 || c == arr.length - 2) {
            newarr.push(arr[i]);
        }
        if (newarr.length == 2) {
            return newarr[0] + newarr[1];
        }
    }
}
console.log(check(arr));
