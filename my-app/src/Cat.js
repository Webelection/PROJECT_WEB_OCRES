import React, { useState } from 'react'
import './App.css'

function Cat() {
    const [url, setUrl] = useState('')
    function fetch_data() {
        console.log("Pippuo");
        fetch('https://api.thecatapi.com/v1/images/search').then(res => {
            if (res.ok) {
                console.log("1");
                return res.json();
            }
            throw new Error('Request Failed');
        }, networkError => console.log(networkError.message)
        ).then(jsonRes => {
            console.log("2");
            setUrl(jsonRes[0].url);
            console.log(jsonRes[0].url);
        })
    }
    return (
        <div>
            <div className="cat__main">
                <img src={url} className="cat__img" alt="Img not found"></img>
            </div>
            <div classNameName="container" >
                <div className="center">
                    <button className="btn" onClick={fetch_data} alt="Image introuvable">
                        <span>HOVER ME</span>
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Cat