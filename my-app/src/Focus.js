import React from 'react';
import './index.css';

class Focus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reponse: []
        };
    }

    callAPI() {
        fetch("http://localhost:7000/focus")
            .then(res => res.json())
            .then(res => {
                this.setState({ reponse: res });
            });
    }

    UNSAFE_componentWillMount() {
        this.callAPI();
    }

    render() {
        if (this.state.reponse) {
            const data = this.state.reponse.slice();

            return (
                <div className="page">
                    <div className="slider">
                        <div className="slides2">
                            {data.map((focusI, index) => (
                                <div id={`slide-${index}`}>
                                    <div className="timeline">
                                        <h2>{focusI.candi}</h2>
                                        {focusI.textes.map(timeL => (
                                            <div className="timeline__group">
                                                <span className="timeline__year time"  style={{fontSize: "1.4vw"}}>{timeL.date}</span>
                                                <div className="timeline__cards">
                                                    <div className="timeline__card">
                                                        <header className="card__header">

                                                        </header>
                                                        <div className="card__content">
                                                            <p style={{fontSize: "1.3vw"}}>{timeL.texte}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}
export default Focus;