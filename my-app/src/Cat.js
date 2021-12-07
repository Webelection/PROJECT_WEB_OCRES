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
            <div className="cat__main">
                <img src={url} className="cat__img" alt="Boule de poils en chargement..."></img>
            </div>
            <div className="center">
                <button className="btn" onClick={fetch_data} alt="Image introuvable">
                    <span style={{fontSize: "1vw"}}>Cliquez pour de la douceur</span>
                </button>
            </div>
        </div>
    );
}

export default Cat