// Task 5: Tərkibində adam adları olan bir array yazın. Daha sonra həmin array-in hər bir elementinin qarşısına “Hello” sözü əlavə edin. Nəticəni console-da çıxarın

let personAr = ["Arzu", "Hanifa", "Asad", "Cavid", "Farid"];

for (let i = 0; i < personAr.length; i++) {
   console.log("Hello " + personAr[i]);
}

console.log(personAr);