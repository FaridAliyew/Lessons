// ------------------------ Task one ----------------------
// Hər hansısa bir ədəd götürün. Bu ədədin tək yoxsa cüt ədəd olduğunu tapın. Nəticəni console-a çıxarın


// const a = Number(prompt("Bir reqem daxil edin"));

// if (a % 2 == 0) {
//     console.log("Bu bir cüt ədəddir:" + " " + a);
// } else {
//     console.log("Bu bir tək ədəddir:" + " " + a);
// }




// ---------------------- Task two ---------------------------
// Hər hansısa bir ədəd götürün. Bu ədədin 5-ə tam şəkildə bölünüb-bölünmədiyini tapın. Nəticəni console-a çıxarın

// const b = prompt("Bir reqem daxil edin:");
// const bolme = b / 5;

// if (b == 0 || b == 1 || b == 2 || b == 3 || b == 4 ) {
//     console.log("Zəhmət olmasa 5-dən (5-də daxil ola bilər) böyük rəqəm daxil edin!");}

// else if (b % 5 == 0) {
//     console.log("Beşə tam bölünür!" + " " + "\n" + "Daxil etdiyiniz rəqəm:" + " " + b + "\n" + "Qalıq:" + " " + bolme);

// } else {
//     console.log("Beşə tam bölünmür!" + " " + "\n" + "Daxil etdiyiniz rəqəm:" + " " + b + "\n" + "Qalıq:" + " " + bolme);
// }




// -------------------- Task three --------------------------
// Təsadüfi 2 ədəd seçin. Bu 2 ədəddən hansının böyük olduğunu tapın. Böyük olan ədədi console-da çıxarın

// const a = Number(prompt("Birinci rəqəmi daxil edin:"));
// const b = Number(prompt("Ikinci rəqəmi daxil edin:"));

// if (a > b) {
//     console.log("Daxil etdiyiniz birinci rəqəm:" + a + "\n" + "Daxil etdiyininz ikinci rəqəm:" + b + "\n" + a + " " + ">" + " " + b + "-" + "dən" + " " + "böyükdür");
// } else if (a == b) {
//     console.log("Daxil etdiyiniz birinci rəqəm:" + a + "\n" + "Daxil etdiyininz ikinci rəqəm:" + b + "\n" + a + " " + "=" + " " + b + "-" + "yə" + " " + "bərabərdir");
// } else {
//     console.log("Daxil etdiyiniz birinci rəqəm:" + a + "\n" + "Daxil etdiyininz ikinci rəqəm:" + b + "\n" + a + +" " + "<" + " " + b + "-" + "dən" + " " + "kiçikdir");
// }




// -------------------- Task four --------------------------
// Təsadüfi 3 ədəd seçin. Bu 3 ədəddən hansının böyük olduğunu tapın. Böyük olan ədədi console-da çıxarın

// const a = Number(prompt("Birinci rəqəmi daxil edin:"));
// const b = Number(prompt("Ikinci rəqəmi daxil edin:"));
// const c = Number(prompt("Üçüncü rəqəmi daxil edin:"));

// if (a > b && a > c) {
//     console.log("Daxil etdiyiniz birinci rəqəm:" + " " + a + "\n" + "Daxil etdiyininz ikinci rəqəm:" + " " + b + "\n" + "Daxil etdiyininz üçüncü rəqəm:" + " " + c + "\n" + "Üç rəqəm içərisindən ən böyük olanı:" + " " + a);
// } else if (b > a && b > c) {
//     console.log("Daxil etdiyiniz birinci rəqəm:" + " " + a + "\n" + "Daxil etdiyininz ikinci rəqəm:" + " " + b + "\n" + "Daxil etdiyininz üçüncü rəqəm:" + " " + c + "\n" + "Üç rəqəm içərisindən ən böyük olanı:" + " " + b);
// } else if (c > a && c > b) {
//     console.log("Daxil etdiyiniz birinci rəqəm:" + " " + a + "\n" + "Daxil etdiyininz ikinci rəqəm:" + " " + b + "\n" + "Daxil etdiyininz üçüncü rəqəm:" + " " + c + "\n" + "Üç rəqəm içərisindən ən böyük olanı:" + " " + c);
// }




//  -------------------- Task five --------------------------
// Tələbənin bir fənndən aldığı qiymətə görə hansı kateqoriyaya düşdüyünü tapın. Məsələn, əgər tələbə 95 alıbsa A, 83 alırsa B və s. ardıcıllıqla kateqoriyalara bölün. (if else istifadə edin)
// const a = Number(prompt("Imtahandan aldığınız balı daxil edin:"));

// if (a >= 91) {
//     console.log("Bal:" + " " + a + " " + "Kateqoriya:" + " " + "(A)");
// } else if (a >= 81) {
//     console.log("Bal:" + " " + a + " " + "Kateqoriya:" + " " + "(B)");
// } else if (a >= 71) {
//     console.log("Bal:" + " " + a + " " + "Kateqoriya:" + " " + "(C)");
// } else if (a >= 61) {
//     console.log("Bal:" + " " + a + " " + "Kateqoriya:" + " " + "(D)");
// } else if (a >= 51) {
//     console.log("Bal:" + " " + a + " " + "Kateqoriya:" + " " + "(E)");
// } else {
//     console.log("Bal:" + " " + a + " " + "Kateqoriya:" + " " + "(F)" + "\n" + "Imtahandan keçə bilmədiniz!");
// }




// ------------------- Task six -------------------------
// 40 səhifədən ibarət bir kitab var. Bu kitabın yalnız bir səhifəsində (məsələn, 27-ci səhifədə) şəkil təsvir olunub. Ən qısa yol ilə bu şəkilli səhifəni tapın. Nəticəni console-da çıxarın (if in if istifadə edin)

// const totalPages = Number(prompt("Kitabın ümumi səhifəsini qeyd edin:"));
// const picturePage = Number(prompt("Şəkilli səhifəni qeyd edin:"));

// function myFunc(start, end) {
//     while (start <= end) {

//         let mid = Math.floor((start + end) / 2);

//         console.log("Səhifə" + " " + mid);

//         if (mid == picturePage) {
//             console.log("Şəkilli səhifə tapıldı:" + " " + mid);
//             break;
//         } else if (mid < picturePage) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
// }
// myFunc(1, totalPages);





// // --------------- Task seven ------------------- 
// Dərs otağındakı tələbələr 32 yaşa kimidir. Bu tələbələrdən hər hansısa birinin yaşını (məsələn, 21 yaşlı birini) ən qısa yolla taparaq console-da çıxarın. (if in if istifadə edin)

// const totalAges = Number(prompt("Bir yaş həddi daxil edin:"));
// const targetAge = Number(prompt("Bir yaş daxil edin:"));

// function myFunc(start, end) {
//     while (start <= end) {

//         let mid = Math.floor((start + end) / 2);

//         console.log("Yaşlar" + " " + mid);

//         if (mid == targetAge) {
//             console.log("Yaş tapıldı:" + " " + mid);
//             break;
//         } else if (mid < targetAge) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
// }
// myFunc(0, totalAges);




//  -------------------- Task eight --------------------------
//  Bilirik ki, hər bir telefon nömrəsinin qarşısında prefiks var (ölkə kodu). Bu kodlar unikaldır və yalnız bir ölkəni təmsil edir. Ölkə kodlarına əsasən ölkəni təyin edərək console-da çıxarın. Nümunəkodlar aşağıdakılardır. (switch istifadə edin)

// const user = Number(prompt("Kodu daxil edin:"))
// switch (user) {
//     case +994:
//         console.log("Azərbaycan");
//         break;
//     case +90:
//         console.log("Türkiyə");
//         break;
//     case +1:
//         console.log("ABŞ");
//         break;
//     case +39:
//         console.log("Italiya");
//         break;
//     case +64:
//         console.log("Yeni Zellandiya");
//         break;
//     case +91:
//         console.log("Hindistan");
//         break;
//     case +34:
//         console.log("İspaniya");
//         break;

//         default:
//             console.log("Belə bir kod yoxdur!!");
// }