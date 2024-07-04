// ---- Task 4 ----
//Bir object yazın. İçərisində get və set accessorları işlənsin. Nəticəni ekranda göstərin

const person = {
    firstName:"Farid",
    surName: "Aliyev",
    age: 22,
    get fullName(){
        return `${this.firstName} ${this.surName} ${this.age}`;
    }
    ,
    set newAge(value){
        this.age = value;
    }
}
// geti cixarir konsolda
console.log(person);

// seti cixarir konsolda
person.newAge = 23;
console.log(person);

document.getElementById("div1").textContent = JSON.stringify(person.fullName)
document.getElementById("div2").textContent = JSON.stringify(person)
