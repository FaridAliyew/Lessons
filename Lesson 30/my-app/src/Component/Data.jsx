import React from 'react'

function Data() {
    const getItem = localStorage.getItem("Register");
    const result = JSON.parse(getItem);
    console.log(result);

    return (
        <section id='data' style={{ display: "none" }}>
           <p style={{fontSize:'30px', color:'white'}}>Welcome mr. {result?.username}</p>
        </section>
    )
}

export default Data