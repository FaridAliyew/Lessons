// Task 8:  Bir string yazın. Bu string-in hərflərindən hər hansısa biri ‘M’ hərfi olarsa console-da success çıxarın.

let string = "Main class , main menu"

for (let i = 0; i < string.length; i++) {
    if(string[i].toLocaleLowerCase() == "m"){
        console.log("succes");
    }
} 