// --------- Task 1: Təsadüfi 3 ədəd seçin. Bu 3 ədəddən hansının böyük olduğunu tapın. Böyük olan ədədi console-da çıxarın. Function və conditions istifadə olunmalıdır. Funksiyaya parametr verib bu 3 ədədi argument kimi ötürün.

// const numberOne = Number(prompt("Birici rəqəmi daxil edin:"));
// const numberTwo = Number(prompt("Ikinci rəqəmi daxil edin:"));
// const numberThree = Number(prompt("Üçüncü rəqəmi daxil edin:"));
// const newRow = "\r\n";

// function myFunc(a, b, c) {
//     if (a >= b && a >= c) {
//         console.log("Daxil etdiyiniz birinci rəqəm:" + " " + numberOne + newRow
//             + "Daxil etdiyiniz ikinci rəqəm:" + " " + numberTwo + newRow
//             + "Daxil etdiyiniz üçüncü rəqəm:" + " " + numberThree + newRow
//             + "Ən böyükü:" + " " + numberOne);
//     } else if (b >= a && b >= c) {
//         console.log("Daxil etdiyiniz birinci rəqəm:" + " " + numberOne + newRow
//             + "Daxil etdiyiniz ikinci rəqəm:" + " " + numberTow + newRow
//             + "Daxil etdiyiniz üçüncü rəqəm:" + " " + numberThree + newRow
//             + "Ən böyükü:" + " " + numberTwo);
//     } else{
//         console.log("Daxil etdiyiniz birinci rəqəm:" + " " + numberOne + newRow
//             + "Daxil etdiyiniz ikinci rəqəm:" + " " + numberTwo + newRow
//             + "Daxil etdiyiniz üçüncü rəqəm:" + " " + numberThree + newRow +newRow 
//             + "Ən böyükü:" + " " + numberThree);
//     }
// }

// myFunc(numberOne, numberTwo, numberThree);




// ------------- Task 2: 40 səhifədən ibarət bir kitab var. Bu kitabın yalnız bir səhifəsində (məsələn, 27-ci səhifədə) şəkil təsvir olunub. Ən qısa yol ilə bu şəkilli səhifəni tapın. Nəticəni console-da çıxarın. Function və conditions istifadə olunmalıdır. Funksiyaya parametr verib ədədi argument kimi ötürün.


// const totalPgaes = Number(prompt("Kitabın ümumi səhifəsini qeyd edin:"));
// const picturePage = Number(prompt("Şəkilli səhifəni daxil edin:"));

// function myFunc(total, picture) {
//     let ədəiOrta = Math.floor((1 + total) / 2);
//     console.log(ədəiOrta);
//     if (ədəiOrta == picture) {
//         console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//     } else if (ədəiOrta < picture) {
//         ədəiOrta = ədəiOrta + 1;
//         console.log(ədəiOrta);

//         if (ədəiOrta == picture) {
//             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//         } else if (ədəiOrta < picture) {
//             ədəiOrta = ədəiOrta + 2;
//             console.log(ədəiOrta);

//             if (ədəiOrta == picture) {
//                 console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//             } else if (ədəiOrta < picture) {
//                 ədəiOrta = ədəiOrta + 1;
//                 console.log(ədəiOrta);

//                 if (ədəiOrta == picture) {
//                     console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                 } else if (ədəiOrta < picture) {
//                     ədəiOrta = ədəiOrta + 2;
//                     console.log(ədəiOrta);

//                     if (ədəiOrta == picture) {
//                         console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                     } else if (ədəiOrta < picture) {
//                         ədəiOrta = ədəiOrta + 1;
//                         console.log(ədəiOrta);

//                         if (ədəiOrta == picture) {
//                             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                         } else if (ədəiOrta < picture) {
//                             ədəiOrta = ədəiOrta + 2;
//                             console.log(ədəiOrta);
//                             if (ədəiOrta == picture) {
//                                 console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                             } else if (ədəiOrta < picture) {
//                                 ədəiOrta = ədəiOrta + 1;
//                                 console.log(ədəiOrta);
//                                 if (ədəiOrta == picture) {
//                                     console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                 } else if (ədəiOrta < picture) {
//                                     ədəiOrta = ədəiOrta + 2;
//                                     console.log(ədəiOrta);
//                                     if (ədəiOrta == picture) {
//                                         console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                     } else if (ədəiOrta < picture) {
//                                         ədəiOrta = ədəiOrta + 1;
//                                         console.log(ədəiOrta);
//                                         if (ədəiOrta == picture) {
//                                             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                         } else if (ədəiOrta < picture) {
//                                             ədəiOrta = ədəiOrta + 1;
//                                             console.log(ədəiOrta);
//                                             if (ədəiOrta == picture) {
//                                                 console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                             } else if (ədəiOrta < picture) {
//                                                 ədəiOrta = ədəiOrta + 2;
//                                                 console.log(ədəiOrta);
//                                             } if (ədəiOrta == picture) {
//                                                 console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                             } else if (ədəiOrta < picture) {
//                                                 ədəiOrta = ədəiOrta + 1;
//                                                 console.log(ədəiOrta);
//                                                 if (ədəiOrta == picture) {
//                                                     console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                                 } else if (ədəiOrta < picture) {
//                                                     ədəiOrta = ədəiOrta + 2;
//                                                     console.log(ədəiOrta);
//                                                     if (ədəiOrta == picture) {
//                                                         console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                                     } else if (ədəiOrta < picture) {
//                                                         ədəiOrta = ədəiOrta + 1;
//                                                         console.log(ədəiOrta);
//                                                         if (ədəiOrta == picture) {
//                                                             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                                         }
//                                                     } else {
//                                                         ədəiOrta = ədəiOrta - 1;
//                                                         console.log(ədəiOrta);
//                                                         if (ədəiOrta == picture) {
//                                                             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                                         }
//                                                     }
//                                                 }

//                                             } else {
//                                                 ədəiOrta = ədəiOrta - 1;
//                                                 console.log(ədəiOrta);
//                                                 if (ədəiOrta == picture) {
//                                                     console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                                 }
//                                             }
//                                         }
//                                     } else {
//                                         ədəiOrta = ədəiOrta - 1;
//                                         console.log(ədəiOrta);
//                                         if (ədəiOrta == picture) {
//                                             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                         }
//                                     }
//                                 }

//                             } else {
//                                 ədəiOrta = ədəiOrta - 1;
//                                 console.log(ədəiOrta);
//                                 if (ədəiOrta == picture) {
//                                     console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                 }
//                             }
//                         }
//                     } else {
//                         ədəiOrta = ədəiOrta - 1;
//                         console.log(ədəiOrta);
//                         if (ədəiOrta == picture) {
//                             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                         }
//                     }
//                 }
//             } else {
//                 ədəiOrta = ədəiOrta - 1;
//                 console.log(ədəiOrta);
//                 if (ədəiOrta == picture) {
//                     console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                 }
//             }
//         }

//         // ------------------ Azalan hissə --------------------------
//     } else {
//         ədəiOrta = ədəiOrta - 1;
//         console.log(ədəiOrta);
//         if (ədəiOrta == picture) {
//             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//         } else if (ədəiOrta > picture) {
//             ədəiOrta = ədəiOrta - 2;
//             console.log(ədəiOrta);
//             if (ədəiOrta == picture) {
//                 console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//             } else if (ədəiOrta > picture) {
//                 ədəiOrta = ədəiOrta - 1;
//                 console.log(ədəiOrta);
//                 if (ədəiOrta == picture) {
//                     console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                 } else if (ədəiOrta > picture) {
//                     ədəiOrta = ədəiOrta - 2;
//                     console.log(ədəiOrta);
//                     if (ədəiOrta == picture) {
//                         console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                     } else if (ədəiOrta > picture) {
//                         ədəiOrta = ədəiOrta - 1;
//                         console.log(ədəiOrta);
//                         if (ədəiOrta == picture) {
//                             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                         } else if (ədəiOrta > picture) {
//                             ədəiOrta = ədəiOrta - 2;
//                             console.log(ədəiOrta);
//                             if (ədəiOrta == picture) {
//                                 console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                             } else if (ədəiOrta > picture) {
//                                 ədəiOrta = ədəiOrta - 1;
//                                 console.log(ədəiOrta);
//                                 if (ədəiOrta == picture) {
//                                     console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                 } else if (ədəiOrta > picture) {
//                                     ədəiOrta = ədəiOrta - 2;
//                                     console.log(ədəiOrta);
//                                     if (ədəiOrta == picture) {
//                                         console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                     } else if (ədəiOrta > picture) {
//                                         ədəiOrta = ədəiOrta - 1;
//                                         console.log(ədəiOrta);
//                                         if (ədəiOrta == picture) {
//                                             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                         } else if (ədəiOrta > picture) {
//                                             ədəiOrta = ədəiOrta - 2;
//                                             console.log(ədəiOrta);
//                                             if (ədəiOrta == picture) {
//                                                 console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                             } else if (ədəiOrta > picture) {
//                                                 ədəiOrta = ədəiOrta - 1;
//                                                 console.log(ədəiOrta);
//                                                 if (ədəiOrta == picture) {
//                                                     console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                                 } else if (ədəiOrta > picture) {
//                                                     ədəiOrta = ədəiOrta - 2;
//                                                     console.log(ədəiOrta);
//                                                     if (ədəiOrta == picture) {
//                                                         console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                                     } else if (ədəiOrta > picture) {
//                                                         ədəiOrta = ədəiOrta - 1;
//                                                         console.log(ədəiOrta);
//                                                         if (ədəiOrta == picture) {
//                                                             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                                         }

//                                                     } else {
//                                                         ədəiOrta = ədəiOrta + 1;
//                                                         console.log(ədəiOrta);
//                                                         if (ədəiOrta == picture) {
//                                                             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                                         }
//                                                     }
//                                                 }

//                                             } else {
//                                                 ədəiOrta = ədəiOrta + 1;
//                                                 console.log(ədəiOrta);
//                                                 if (ədəiOrta == picture) {
//                                                     console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                                 }
//                                             }
//                                         }

//                                     } else {
//                                         ədəiOrta = ədəiOrta + 1;
//                                         console.log(ədəiOrta);
//                                         if (ədəiOrta == picture) {
//                                             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                         }
//                                     }
//                                 }


//                             } else {
//                                 ədəiOrta = ədəiOrta + 1;
//                                 console.log(ədəiOrta);
//                                 if (ədəiOrta == picture) {
//                                     console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                                 }
//                             }
//                         }


//                     } else {
//                         ədəiOrta = ədəiOrta + 1;
//                         console.log(ədəiOrta);
//                         if (ədəiOrta == picture) {
//                             console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                         }
//                     }
//                 }

//             } else {
//                 ədəiOrta = ədəiOrta + 1;
//                 console.log(ədəiOrta);
//                 if (ədəiOrta == picture) {
//                     console.log("Şəkilli səhifə tapıldı:" + " " + ədəiOrta);
//                 }
//             }
//         }
//     }
// }

// myFunc(totalPgaes, picturePage);




// ----------- Task 3: Bir funksiya yazın. Bu funksiyayanı çağırarkən bir string’i argument olaraq ötürün. Əgər funksiyaya ötürülən string adınız olarsa console-da çıxarın. Əks halda heçnə çıxarmayın.

// const name1 = prompt("Adınızı daxil edin");

// function myFunc(name) {
//     if (name == "Farid") {
//         return "Xoş gəlmisiniz mr:" + " " + name;
//     }
//     return "Zəhmət olmasa öz adınızı daxil edin!"
// }

// let cavab = myFunc(name1);
// console.log(cavab);




// ----------- Task 4: Html-də bir button yazın. Bu button click olunan zaman funksiyaya ötürdüyünüz ədədlər cəmlənsin. Nəticəni console-da çıxarın.
// const sumNumber = (a, b) => {
//     console.log(a + b);
// }