async function FetchApi(params) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response == false) {
            console.error("This is Error");
        }
        let data = await response.json();
        let print = "";

        // document.getElementById("div1").innerText =JSON.stringify(data[0]);

        data.forEach((user) => {
            print += `<li>${JSON.stringify(user)}</li>`;
        });

        document.getElementById("div1").innerHTML = `<ol>${print}</ol>`;

    } catch (error) {
        console.error("Error" + error);
    }
}
FetchApi();


