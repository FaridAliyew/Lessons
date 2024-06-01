// ---------- Task 4:
//  2 bir birindən fərqli olan string tipində dəyişən elan edin. 1ci dəyişənin  3-6 simvollar aralığını, 2ci dəyişənin isə 1-4 simvollar aralığını kəsib  götürün. Daha sonra isə bu kəsilən 2 hissəni bir birinə birləşdirib yeni  bir string yaradın. Nəzərə alın ki, bu string-lər birləşəndən sonra ilk hərfimiz böyük hərflə olacaq. Bütün bu məntiq istifadəçi ekranda düyməyə click etdiyi zaman baş versin.



const textOne = "Development";
const textTwo = "Hellomario";

function myFunc(text1, text2) {
    let resultOne = textOne.substring(1,4);
    let upper = resultOne.charAt(0).toUpperCase()
    let replace = resultOne.replace("e",upper);
    let resultTwo = textTwo.substring(3,6);
    return replace.concat(resultTwo);
}



