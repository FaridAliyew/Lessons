// Task 1:  Elementləri fərqli tiplər olan bir array yazın (məsələn, number, string, boolean və s.) Bu elementin ancaq string tipdə olan elementlərini ekrana və ya console-a çıxarın.

let array = [123, "Hello", null, "World", true, 89, false, "Mario", "23", undefined];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "string" ) {
        console.log(array[i]);
    }
}