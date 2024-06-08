// Task 4:  Elementləri number tipi olan bir array yazın. Bu array-in elementlərinin uzunluğunu tapin və console-da çıxarın. (Məsələn, 108 ədədi 3 rəqəmlidir).

const array = [234, 34, 1, 101, 902, 23.2, 21];
const newRow = "\r\n";

for (let i = 0; i < array.length; i++) {
    let newAr = array[i].toString();
    let string = newAr.length;
    console.log(newAr);
    console.log("Length: " + string + newRow + newRow);
}