const findUniq = [2,1,1,1];
let count = 0;
let result = 0;
for (let i = 0; i < findUniq.length; i++) {
    for (let j = 0; j < findUniq.length; j++) {
        if (findUniq[i] !== findUniq[j]) {
            result = findUniq[j];
            findUniq.splice(j, 1);
        }
    }
}
console.log(result);
