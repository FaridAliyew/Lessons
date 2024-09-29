//  Task 6:
//  2 string tipində olan dəyişən elan edin. Bu dəyişənlərdən 1cinin uzunluğu digərindən çox olsa 1cini, əks halda isə 2ci dəyişəni console-da çıxarın. Bütün bu hadisələr istifadəçi ekranda düyməyə click etdiyi zaman baş versin.


const stringOne = "Hello Wolrd"
const stringTwo = "Hello JavaScript"

const myFunc = () => {
    if (stringOne.length > stringTwo.length) {
        return str1;
    } else if (stringOne.length === stringTwo.length) {
        return "Bunlar beraberdir"
    }
    return stringTwo;
}