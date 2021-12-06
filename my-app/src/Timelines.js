import React from 'react';
import './index.css';

class Timelines extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reponse: []
        };
    }

    callAPI() {
        fetch("http://localhost:7000/timelines")
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
                <div className="">
                    {data.map(timelines => (
                        <div id={timelines.num}>
                            <h1> {timelines.candi} </h1>
                            <h2> {timelines.parti} </h2>
                            <p> {timelines.texte} </p>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    }
}
export default Timelines;