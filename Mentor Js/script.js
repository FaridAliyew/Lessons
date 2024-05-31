// ------ 1. natural ədədin sonuncu  rəqəmini silən alqoritm yazın,

const numbre = Number(prompt("Bir rəqəm daxil edin:"));
function myFunc(number){
    return parseInt(number / 10);
}

let cavab = myFunc(numbre);
console.log(cavab);




// -------- 2. N natural ədəinin sağdan birici rəqəmini tapan alqoritm yazın;

// const number = Number(prompt("Bir reqem daxil edin.."))
// function myFunc(number) {

//     let a = number % 10;
//     console.log(a);
// }

// myFunc(number);




// -------- 3. m qəpiyə n dondurma almaq üçün alqoritm yazın (meselen 60, 25);

// const number = Number(prompt("Kaşlokda nəqədər pulun var ay kasıb.."))

// function myFunc(number) {
//     return Math.floor(number / 25);
// }

// console.log(myFunc(number));




// Dord reqemli ededi tersine cevirin ..

// const number = Number(prompt("Dord reqemli bir eded daxil edin.."));
// function myFunc(number) {
//     let first = parseInt(number / 1000);
//     let two = parseInt(number / 100) % 10;
//     let three = parseInt(number / 10) % 10;
//     let last = number % 10;

//     return last * 1000 + three * 100 + two * 10 + first;
// }

// console.log(myFunc(number));




// -------- task 5 -----

// const number1 = Number(prompt("Birinci reqemi daxil edin.."));
// const number2 = Number(prompt("Ikinci reqemi daxil edin.."));

// function myFunc(number1, number2) {
//     if (number1 % 2 == 0 && number2 % 2 == 0) {
//         return 1;
//     }
//     return 0;
// }

// console.log(myFunc(number1, number2));




// ------ task 7 ----------

// const number = Number(prompt("Bir reqem daxil edin.."));

// function myFunc(number){
//     if(number >= 0){
//         return "Bu musbet ededdir.."
//     }
//     return "Menfi eddedir ..."
// }

// console.log(myFunc(number));




// ---------- Task 8 -----------
// const number = Number(prompt("Bir reqem daxil edin.."));

// function myFunc(number) {
//     if (number % 2 == 0) {
//         return number - 1;
//     } else {
//         return number -2;
//     }
// }
// console.log(myFunc(number));




// // ----- Task 9 -----------
// const number = Number(prompt("Bir reqem daxil edin.."));

// function myFunc(number) {
//     switch (number) {
//         case 1:
//         case 2:
//         case 12:
//             return "Wintrer"

//         case 3:
//         case 4:
//         case 5:
//             return "Spring"

//         default:
//             return "Bele bir ay yoxdur.."
//     }
// }

// console.log(myFunc(number));