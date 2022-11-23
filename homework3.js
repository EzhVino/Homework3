// Задание 1

const tripleNumber = number => number ** 3;

console.log(tripleNumber(2) + tripleNumber(3));


// Задание 2

// function countPaycheck(salary) {
//     let paycheck = salary * 0.87;
//     console.log(`Размер заработной платы за вычетом налогов равен ${paycheck}`);
// }

// let userSalary = Number(prompt('Введите сумму вашей зарплаты'));

// (isNaN(userSalary)) ? console.log('Значение задано неверно') : countPaycheck(userSalary);


// Задание 3

// function findMaximum(num1, num2, num3) {
//     let max = num1;
//     if (num1 < num2) max = num2;
//     if (num3 > max) max = num3;
//     return max;
// }

// ИЛИ

// function findMaximum(num1, num2, num3) {
//     if (num1 >= num2 && num2 >= num3) return num1;
//     else if (num1 <= num2 && num2 >= num3) return num2;
//     else if (num1 <= num2 && num2 <= num3) return num3;
// }


// let firstUserNumber = Number(prompt('Введите первое число'));
// let secondUserNumber = Number(prompt('Введите второе число'));
// let thirdUserNumber = Number(prompt('Введите тьерте число'));

// alert(`Максимальное число ${findMaximum(firstUserNumber, secondUserNumber, thirdUserNumber)}`);

// Задание 4

let sumNumbers = (firstNum, secondNum) => firstNum + secondNum;
let diffNumbers = (firstNum, secondNum) => (firstNum >= secondNum) ? firstNum - secondNum : secondNum - firstNum;
let prodNumbers = (firstNum, secondNum) => firstNum * secondNum;
let quotNumbers = (firstNum, secondNum) => (firstNum >= secondNum) ? firstNum / secondNum : secondNum / firstNum;

console.log(sumNumbers(3, 5));
console.log(diffNumbers(3, 5));
console.log(prodNumbers(3, 5));
console.log(quotNumbers(3, 5));
