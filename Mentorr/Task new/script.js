// let film = {
//     name: "Inception",
//     directon: "Christion Nolan",
//     ouolicatYear: 2021,
//     cast: ["Leonardo Dicapro", "Leo","Nardo"],

//     movieDuration: function () {
//         return 200;
//     }
// }

// console.log(film.name);
// console.log(film.movieDuration());




// function Person(name,age) {
//     this.name1 = name;
//     this.name2 = age;
//     this.greet = function(){
//         return `Salam, menim adim ${this.name} ve men ${this.age} yasindayam.`;
//     } 
// } 

// let person1 = new Person("Ali" , 30);

// console.log(person1.name1);




// function Farid(name) {
//     this.name1 = name;
// }

// Farid.prototype.greet = function() {
//     return `menim adim ${this.name1}`
// }
// let cat = new Farid("Frontend");
// console.log(cat.greet());




// Dark mode

document.getElementsByTagName("button")[0].onclick = myFunc;

function myFunc(params) {
    document.body.classList.toggle("dark");
    let isDarkMode = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDarkMode);
}

function loadDarkMode() {
    let isDarkMode = localStorage.getItem("darkMode");
    if(isDarkMode === "ture"){
        document.body.classList.add("dark");
    }
}

loadDarkMode();


