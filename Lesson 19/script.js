// ------- Task 1 -------
// ● Yalnız ədədlərdən ibarət iki array yazın
// ● Buikiarrayı yeni bir array-də birləşdirin.
// ● Əgər,yeni yaranmış array-in hər bir elementinin uzunluğu 5-ə bərabərdirsə, “successful validation” mesajı çıxsın. Əks halda “error, the length of the elements is not equal to five” mesajını göstərin.
// ● Nəticəni console-a və ya ekrana çıxarın


const arrayOne = [10234, 20345, 30898];
const arrayTwo = [12456, 24780, 48234];

const myFunc = (newArr1, newArr2) => {
    const newArray = arrayOne.concat(arrayTwo);
    const length = newArray.every(el => el.toString().length === 5);

    if (length) {
        return "successful validation";
    }
    return "error, the length of the elements is not equal to five";

}

const cavab = myFunc(arrayOne, arrayTwo);
console.log(cavab);



// ------ Task 2 ------
// ● Tərkibində adam adları olan bir array yazın.
// ● Daha sonra həmin array-in hər bir elementinin qarşısına “Hello” sözü əlavə edin
// ● Nəticəni console-a və ya ekrana çıxarın

// let person = ["Dadaş", "Qəzənfər", "Kazım", "Ağakərim"];
// let newArray = [];
// person.forEach(el => {
//     newArray.push("Hello" + " " + el)
// })

// console.log(newArray);

// --------------
// let x = person.map(el => "Hello" + el);
// console.log(x);



// ----- Task 3 -----
// ● Yalnız ədədlərdən ibarət bir array yazın
// ● Daha sonra array-ın hər bir elementini 2-yə vurun
// ● Yaranan yeni array-in elementlərini böyükdən kiçiyə sıralayın
// ● Sıralama etdikdən sonra array-ın 1-3 index arası elementlərini çıxarıb yeni bir array-a təyin edin
// ● Nəticəni console-da ekrana çıxarın

// let nums = [12, 34, 45, 78, 21.3];

// let vurma = nums.map(el => el * 2);

// let sort = vurma.sort((a, b) => b - a);
// console.log(sort);

// let selectNum = sort.slice(1, 3);
// console.log(selectNum);



// ------ Task 4 ------
// ● Yalnız ədədlərdən ibarət bir array yazın
// ● Bu array-in elementlərinin əvvəlcə cəmini, daha sonra isə fərqini tapın.
// ● Aldığınız cəm və fərqi array-in son elementlərinə əlavə edin
// ● Daha sonra bu array-i kiçikdən böyüyə doğru sıralayın
// ● Nəticəni console-a və ya ekrana çıxarın

// let nums = [12, 34, 46, 67, 89];
// let topla = nums.reduce((total, number) => total + number);
// let cix = nums.reduce((total, number) => total - number);
// let push = nums.push(topla, cix);
// let map = nums.sort((a, b) => a - b);

// console.log(map);



// ---- Task 5 -----
// ● Tərkibindəki elementləri string-lərdən ibarət olan bir array yazın.
// ● Bu array-in elementlərindən biri “Matrix” olsun
// ● Əgər,bu arrayın hər hansısa bir elementi “Matrix”-ə bərabərdirsə, “Success, the index of the Matrix is … (nöqtələrin yerində elementin index-ni göstərin)”
// ● Əkshalda“Notfound” mesajını qaytarsın
// ● Nəticəni console-a və ya ekrana çıxarın

// let string = ["Mario", "Matrix", "Sonic", "Turtules"];

// if(string.includes("Matrix")){
//     const matrixIndex = string.indexOf("Matrix");
//     console.log("Success, the index of the Matrix is: " + matrixIndex);
// } else{
//     console.log("Not found");
// }