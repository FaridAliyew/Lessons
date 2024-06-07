// Task 2:  Elementləri string tipləri olan bir array yazın. Əgər elementin hər hansısa bir elementi “Matrix”ə bərabərdirsə, onu bu array-dən silin.

const array = ["Salam..", "Necesen", "Matrix", "Sagol", "Ferid", "Yaxsiyam"];

for (let i = 0; i < array.length; i++) {
    if(array[i] == "Matrix"){
        continue;
    } else{
        console.log(array[i]);
    }   
}

// let i = -1;
// while (i < array.length) {
//     i++;
//     if (array[i] == "Matrix") {
//         continue;
//     } else{
//         console.log(array[i])
//     }
// }