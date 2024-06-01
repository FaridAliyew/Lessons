// -------- Task 3:
//  Bir funksiya yazın. Bu funksiyanı çağırarkən ona argument olaraq bir string ötürün. Əgər ötürülən string-in ilk hərfi ‘M’ hərfi ilə başlayarsa, o zaman console-da bu string-i 3 dəfə ardıcıl təkrar edərək çıxarın. Nəzərə alın ki, funksiyaya ötürülən string böyük hərflə və yaxud kiçik hərflə başlaya bilər. Hər iki halda belə qurduğunuz alqoritm düzgün işləməlidi.



function myFunc(text) {
    const cavab = text.toLowerCase().startsWith("m");
    if (cavab == true) {
        return text.repeat(3);
    }
    return "Bu söz m-hərfi ilə başlamır.."
}

console.log(myFunc("Mario"))