import React from 'react';
import './index.css';

class Prog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reponse: []
        };
    }

    callAPI() {
        fetch("http://localhost:7000/progs")
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
                <div className="slides">
                    {data.map(prog => (
                        <div id={prog.num}>
                            <h1> {prog.candi} </h1>
                            <h2> {prog.parti} </h2>
                            <p> {prog.texte} </p>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    }
}
export default Prog;