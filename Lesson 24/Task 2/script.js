// ----- Task 2 ------
//  Bir array yazın. Array-in içərisində obyektlər olsun. Bu array-in indeksi 2 olan object elementindən hər hansısa bir dəyərini ekranda göstərin

const array = [
    {
        name: "Bmw",
        year: 2012,
        model: "M3",
        solary: 27000 + " $ "
    }
    ,
    {
        name: "Ferrari",
        year: 1987,
        model: "F40",
        solary: 50000 + " $ "
    }
    ,
    {
        name: "Lamborghini",
        year: 2020,
        model: "Huracan STO",
        solary: 120000 + " $ "
    }
    ,
    {
        name: "Porsche",
        year: 2015,
        model: 911,
        solary: 30000 + " $ "
    }
]

console.log(array[2].model);