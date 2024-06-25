


// const myFunc = () => {
//     let num = Number(document.getElementById("number").value);
//     let result = num**2;
//     document.getElementById("netice").innerText = result;
// }

const num = document.getElementById("number")
const button = document.querySelector("button")
const result = document.getElementById("netice");

button.addEventListener("click", function () {
    let square = num.value * num.value
    result.innerHTML = square;
})



