// Task 2:
//  https://www.youtube.com/
//  Fərz edin ki, belə bir string-iniz var. Kiçik bir dəyişikliklə youtube sözünü facebook ilə əvəz edin. Daha sonra alınan string-in uzunluğunu taparaq console-da çıxarın. Bu əməliyyatların hamısı istifadəçi ekranda olan düymələrdən birinə click etdiyi zaman baş verməlidir.



const text = "https://www.youtube.com";
console.log(text);

const myFunc = () => {
    const replace = text.replace(/youtube/i, "facebook");
    console.log(replace);
    const length = replace.length;
    console.log(length);
}



