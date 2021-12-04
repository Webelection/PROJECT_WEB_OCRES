import React from 'react';
import './index.css';

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reponse:""
        };
    }

    callAPI() {
        fetch("http://localhost:7000/tweets")
            .then(res => res.json())
            .then(res => {
                this.setState({reponse: res});
            });
    }


    UNSAFE_componentWillMount() {
        this.callAPI();
    }

    render() {
        if(this.state.reponse) {
            const data = this.state.reponse.slice();
            const tweet = data[0];
            console.log('tweet : ' + tweet);
            const auteur = tweet.auteur;
            const texte = tweet.texte;
            const heure = tweet.heure;

            return(
                <div>
                    <h4 className = "tweet_a"> {auteur} </h4>
                    <p className = "tweet_t"> {texte} </p>
                    <p className = "tweet_h"> {heure} </p>
                </div>
            );
        }
        return null;
    }
}

export default Tweet;