let array = [];

let tagName = document.getElementsByTagName("h1");
let idSelec = document.getElementById("myp1").style.fontSize = "5vw"
let classSelect = document.getElementsByClassName("myBold");
// console.log(classSelect);
for (let i = 0; i < tagName.length; i++) {
    tagName[i] = tagName[i].style.color = "red" 
}
for (let i = 0; i < classSelect.length; i++) {
     classSelect[i].style.fontStyle = "italic"
     classSelect[i].style.fontSize = "4vw"
     classSelect[i].style.backgroundColor = "red"
     classSelect[i].style.color = "yellow"
     classSelect[i].style.padding = "20px"
     classSelect[i].style.borderRadius = "20px"
}