// Task 6:  Elementləri ədədlərdən ibarət olan bir array yazın. Bu array-ın içində olan bütün ədədlərin cəmini tapın. Nəticəni console-da çıxarın.

const num = [342, 12, 25, 10, 2001, 23, 76];
let result = 0;
let i = 0;
while (i < num.length) {
    result += num[i];
    i++;
}
console.log(result);