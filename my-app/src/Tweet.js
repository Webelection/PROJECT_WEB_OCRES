import React from 'react';
import './index.css';

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reponse:[]
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

            return(
                <div>
                    {data.map(tweet => (
                            <img className="tweet" src={tweet.photo} alt="Img not found"></img>
                    ))}
                </div>
            );
        }
        return null;
    }
}

export default Tweet;