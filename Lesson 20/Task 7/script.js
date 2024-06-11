// Task 7: 
// Yalnız ədədlərdən ibarət bir array yazın.
// Daha sonra array-ın hər bir elementini 2-yə vurun.
// Nəticəni console-da ekrana çıxarın

let number = [90, 32, 25, 10, 2001, 34];

for (let i = 0; i < number.length; i++) {
    let result = number[i] * 2;
    console.log(result);
}