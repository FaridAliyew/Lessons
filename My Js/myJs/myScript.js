// // ------------ Task-1 (İstifadəçi yaşını yoxlayın) --------------
// const age = Number(prompt("Yaşınızı daxil edin:"));

// if (age > 18) {
//     console.log("Yetkinlik yaşınıza çatmısınız..");
// } else{
//     console.log("Yetkinlik yaşınıza çatmamısınız!!");
// }




// // ------------ Task-2 (Nömrənin müsbət, mənfi və ya sıfır olduğunu yoxlayın) --------------
// const number = Number(prompt("Bir reqem daxil edin:"));

// if (number > 0) {
//     console.log("Bu müsbət rəqəmdir..");
// } else if (number === 0) {
//     console.log("Daxil etdiyiniz rəqəm" + " " + 0 + "-a bərabərdir");
// } else {
//     console.log("Bu bir mənfi rəqəmdir!!");
// }




// //  ------------------ Task-3 (Həftənin gününü yoxlayın) -----------------------
// const week = Number(prompt("Bir rəqəm daxil edin:"));

// if (week === 1) {
//     console.log("Bazar ertəsi");
// } else if (week === 2) {
//     console.log("Çərşənbə axşamı");
// } else if (week === 3) {
//     console.log("Çərşənbə");
// } else if (week === 4) {
//     console.log("Cümə axşamı");
// } else if (week === 5) {
//     console.log("Cümə");
// } else if (week === 6) {
//     console.log("Şənbə");
// } else if (week === 7) {
//     console.log("Bazar");
// } else{
//     console.log("Zəhmət olmasa (1-7) kimi rəqəm daxil edərdiniz9");
// }




// // -------------- Task-4 (Temperaturun dərəcəsini yoxlayın) ---------------
// const temp = Number(prompt("Temperaturu daxil edin:"));

// if (temp < 10) {
//     console.log("Hava soyuqdur..");
// } else if (temp >= 10 && temp < 20) {
//     console.log("Hava mülayimdir..");
// } else if(temp >= 20 && temp < 30){
//     console.log("Hava istidir !");
// } else if(temp > 30){
//     console.log("Hava çox istidir !!");
// }




// // ---------------- Task-5 (Not ortalaması) -------------------
// alert("Zəhmət olmasa imtahandan aldığınız nəticələri qeyd edərdiz..");
// const priceOne = Number(prompt("Birinci imtahanın balı:"));
// const priceTwo = Number(prompt("Ikinci imtahanın balı:"));
// const priceThree = Number(prompt("Üçüncü imtahanın balı:"));

// const averageHoney = (priceOne+priceTwo+priceThree)/3;

// if (averageHoney > 50) {
//     console.log("Siz imtahandan keçdiniz, Təbriklər" + "\n" +"Balınız:"+" "+ averageHoney);
// } else{
//     console.log("İmtahandan kəsildiniz.." + "\n" +"Balınız:"+" "+ averageHoney);
// }




// // --------------------- Task-6 (Rəqəmləri sırala) ------------------------
// const numberOne = Number(prompt("Birinci rəəqəmi daxil edin.."));
// const numberTwo = Number(prompt("Ikinci rəəqəmi daxil edin.."));
// const numberThree = Number(prompt("Üçüncü rəəqəmi daxil edin.."));

// let small, middle, large;

// if (numberOne <= numberTwo && numberOne <= numberThree) {
//     small = numberOne;
//     if (numberTwo <= numberThree) {
//         middle = numberTwo;
//         large = numberThree;
//     } else {
//         middle = numberThree;
//         large = numberTwo;
//     }

// } else if (numberTwo <= numberThree && numberTwo <= numberOne) {
//     small = numberTwo;
//     if (numberOne <= numberThree) {
//         middle = numberOne;
//         large = numberThree;
//     } else {
//         middle = numberThree;
//         large = numberOne;
//     }

// } else {
//     middle = numberThree;
//     if (numberOne <= numberTwo) {
//         middle = numberOne;
//         large = numberTwo;
//     } else {
//         middle = numberTwo;
//         large = numberOne;
//     }
// }

// console.log(small + "," + middle + "," + large);




// // ------------------- Task-7 (Həftənin gününü yazdırın) -------------------
// const chapter = Number(prompt("Bir reqem daxil edin:"));

// switch (chapter) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Qış fəsli");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("Yaz fəsli");
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log("Yay fəsli");
//         break;
//     case 10:
//     case 11:
//     case 12:
//         console.log("Payız fəsili");
//         break;
//     default:
//         console.log("Belə bir ay yoxdur (1-12 daxil edin!)");
//         break;
// }




// // ---------------------- Taks-8 (Sadə kalkulyator) ---------------------------
// const num1 = Number(prompt("Birinci reqemi daxil edin:"));
// const num2 = Number(prompt("Ikinci reqemi daxil edin:"));
// const emeliyyat = Number(prompt("Bir emeliyyat secin (1 +, 2 -, 3 *, 4 /)"));

// switch (emeliyyat) {
//     case 1:
//         console.log(num1 + num2);
//         break;
//     case 2:
//         console.log(num1 - num2);
//         break;
//     case 3:
//         console.log(num1 * num2);
//         break;
//     case 4:
//         if (num2 != 0) {
//             console.log(num1 / num2);
//         } else {
//             alert("0-a bolmek olmaz!!");
//         }
//         break;
//     default:
//         alert("Zehmet olmasa 1 den 4 e kimi reqem daxil ederdiz..");
//         break;
// }







