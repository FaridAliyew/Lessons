// ------- Task 1 --------
// Bir object yazın. Daha sonra ona hər hansısa bir yeni property və value əlavə edin.Onun elementlərini loops vasitəsilə ekrana çıxarın (console-a yox, ekrana çıxarmanız lazımdır)

const bike = {
    name: "Yamaha",
    year: 2020,
    cube: 575
}

bike.solary = 7600 + " $ "

let result = "";
for (const x in bike) {
    result += `${x}: ${bike[x]} <br>`;
}
document.getElementById("div1").innerHTML = result;