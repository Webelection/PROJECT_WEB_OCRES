import React, { useState } from 'react'
import './index.css'

function Cat() {
    const [url, setUrl] = useState('')
        function fetch_data() {
        fetch('https://api.thecatapi.com/v1/images/search').then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Request Failed');
        }, networkError => console.log(networkError.message)
        ).then(jsonRes => {
            setUrl(jsonRes[0].url);
            console.log(jsonRes[0].url);
        })
    }
    return (
        <div className="boite">
            <h2>Un peu de douceur dans ce monde de brutes</h2>
            <div className="cat__main">
                <img src={url} className="cat__img" alt="Img not found"></img>
            </div>
            <div className="center">
                <button className="btn" onClick={fetch_data} alt="Image introuvable">
                    <span>HOVER ME</span>
                </button>
            </div>
        </div>
    );
}

export default Cat