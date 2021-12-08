import React from 'react';
import './index.css';

class Candi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reponse: []
        };
    }

    callAPI() {
        fetch("http://localhost:7000/candis")
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
                <div className="contCard">
                    {data.map(candi => (
                        <div className="card">
                            <h3 className="titleCard"> {candi.nom} </h3>
                            <div class="bar">
                                <div class="emptybar"></div>
                                <div class="filledbar"></div>
                            </div>
                            <h4 className="candi_pa"> {candi.parti} </h4>
                            <div class="circle">
                                <img className="candidat" src={candi.photo} alt="Img not found"></img>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    }
}
export default Candi;