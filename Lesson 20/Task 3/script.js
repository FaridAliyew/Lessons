// Task 3:  1-dən 100-ə qədər ədədləri döndürün. Bu ədədlərdən 45-ə çatdıqda loop dayansın və console-da “Sonuncu rəqəm 45dir” deyə mesaj çıxsın.

let i = 0;
while (i < 100) {

    if(i == 45){
        console.log("Sonuncu rəqəm 45-dir");
        break;
    } else{
        console.log(i);
    }
    i++;
}