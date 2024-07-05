// let promiseMethod = fetch("https://jsonplaceholder.typicode.com/users");

// promiseMethod.then((result) => {
//     if(result == false){
//         console.log("Sehviniz var");
//     }
//     return result.json();
// }).then(data =>{
//     console.log(data);
// }).catch((error) => {
//     console.log("Error"+ error);
// });






async function FetchApi(params) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response == false) {
            console.log("Sehviniz var");
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error" + error);
    }
}
FetchApi();




