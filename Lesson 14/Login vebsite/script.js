function myFunc() {
    const input1 = document.getElementById("username");
    const input2 = document.getElementById("name");
    const input3 = document.getElementById("surname");
    const input4 = document.getElementById("tel");
    const input5 = document.getElementById("email");
    const input6 = document.getElementById("password");
    const inputValue1 = input1.value;
    const inputValue2 = input2.value;
    const inputValue3 = input3.value;
    const inputValue4 = input4.value;
    const inputValue5 = input5.value;
    const inputValue6 = input6.value;
    
    // debugger;
    alert("Qeydiyyat uğurla başa çatdı!");
    alert("Username:\n" + "--" + inputValue1 + "\n" + "Name:\n" + "--" + inputValue2 + "\n" + "Surname:\n" + "--" + inputValue3 + "\n" + "Phone number\n" + "--" + inputValue4 + "\n" + "Email:\n" + "--" + inputValue5 + "\n" + "Password:\n" + "--" + inputValue6);
}
