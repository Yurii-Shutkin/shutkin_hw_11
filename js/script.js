const num = +prompt('Введите число');
let flag = true;

if (num <= 1) {
    flag = false;
}

for (let i = 2; i < num; i ++) {
    if (num % i === 0) {
        flag = false;
    }
}

console.log (`${num}; //${flag}`);