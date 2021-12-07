import React from 'react';
import './index.css';

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            reponse: [],
            index: 0
        };
    }

    callAPI() {
        fetch("http://localhost:7000/tweets")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    isLoaded: true,
                    reponse: res 
                });
            });
    }

    UNSAFE_componentWillMount() {
        this.callAPI();
    }

    randomIndex() {
        var index = Math.floor(Math.random() * this.state.reponse.length);
        console.log('index : ' + index);
        this.setState({index: index});
    }

    render() {
        if (this.state.isLoaded) {
            const data = this.state.reponse.slice();
            const tweet = data[this.state.index];
            return (
                <div className="cont_tweet">
                    <div className="cont_img">
                    <a  href={tweet.url} target="_blank" rel="noreferrer">
                        <img src={tweet.photo} alt="Chargement du drama..."/>
                    </a>
                    </div>
                   
                    <div class="bouton_tweet" >
                        <p class="btn_tweet" style={{fontSize: "1vw"}} onClick={() => this.randomIndex()}>Autre Tweet</p>
                    </div>
                </div>
            );
        }
        return (
            <div className="cont_tweet">
                Chargement du drama...        
            </div>
        );
    }
}

export default Tweet;