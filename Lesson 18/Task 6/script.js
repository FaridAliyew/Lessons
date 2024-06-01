//  Task 6:
//  2 string tipində olan dəyişən elan edin. Bu dəyişənlərdən 1cinin uzunluğu digərindən çox olsa 1cini, əks halda isə 2ci dəyişəni console-da çıxarın. Bütün bu hadisələr istifadəçi ekranda düyməyə click etdiyi zaman baş versin.


const str1 = "Hello Wolrd"
const str2 = "Hello JavaScript"

const myFunc = () => {
    if (str1.length > str2.length) {
        return str1;
    } else if (str1.length === str2.length) {
        return "Bunlar beraberdir"
    }
    return str2;
}