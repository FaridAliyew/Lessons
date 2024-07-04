// ------ Task 3 ------
// Bir nested object yazın. Nested object-in müəyyən hissələrinə yeni property və value əlavə edin. Sonda isə JSON.stringify() istifadə edərək bütün obyekti ekranda göstərin

const person = {
    name: "Farid",
    age: 22,
    hobby: {
        drive: "Motorbike",
        walk: "Walk in the fresh air",
    },
    job: {
        title: "Developer",
    }
}

person.surName = "Aliyev";
person.hobby.music = "Listen to music";
person.job.solary = 5000 + "$";



let result = document.querySelector(".div1");
result.textContent = JSON.stringify(person);
console.log(person);
