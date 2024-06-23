function myFunc(params) {
    let num1 = Number(document.getElementById("text1").value);
    let num2 = Number(document.getElementById("text2").value);

    let result = num1 + num2;
    document.getElementById("result").innerText = result;
}