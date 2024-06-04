//  Task 5:
//  “matrixacademy@gmail.com” Bu bizim string tipində olan dəyişənimizdir. Yoxlayın ki, bu stringdə  həqiqətən mail addressi doğrudur mu? Regex istifadə edin (@ işarəsinin olub olmadığını yoxlamalısız)

let email = "matrixacademygmail.com"
let regex = /@/

if(regex.test(email)){
    console.log("Email doğrudur")
} else{
    console.log("Email səhvdir..")
}





