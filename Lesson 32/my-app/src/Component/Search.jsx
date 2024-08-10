import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6"
import axios from 'axios'
import { Ring } from '@uiball/loaders';


function Search() {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const BASE_URL = 'https://api.datamuse.com/words?rel_trg=';

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
            return;
        }

        setLoading(true);
        axios.get(`${BASE_URL}${value}`)
            .then((result) => {
                setResults(result.data);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setLoading(false);
            });;
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder='Write text here' onChange={onChange} />
                    <button type='submit' className='search'><FaMagnifyingGlass /></button>
                </form>
            </div>

            {loading ? (
                <div className="spinner-container" >
                    <Ring
                        size={100}
                        speed={1.5}
                        color="blue"
                    />
                </div>
            ) : (
                results.map((item, index) => (
                    <div key={index} style={{ marginTop: "10px" }}>
                        <li style={{ textAlign: "center", fontSize: "30px" }}>{item.word}</li>
                    </div>
                ))
            )}

        </>

    )
}

export default Search