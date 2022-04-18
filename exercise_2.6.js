
function centuryFromYear(year) {
    let text = year.toString();
    let arr = text.split('');
    let z = parseInt(arr[0] + arr[1]) + 1;
    if (arr[2] == 0 && arr[3] == 0) {
        return arr[0] + arr[1];
    } else {
        return z;
    }
}
console.log(centuryFromYear(1987));
