import React from 'react';
import './index.css';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            api: "candis",
            reponse: [],
            id: ""
        }
        this.handleChangeF = this.handleChangeF.bind(this);
        this.handleSubmitF = this.handleSubmitF.bind(this);
    }

    callAPI() {
        axios.get(`http://localhost:7000/${this.state.api}`)
            .then(res => {
                const elements = res.data;
                this.setState({
                    isLoaded: true,
                    reponse: elements
                });
            });
    }

    UNSAFE_componentWillMount() {
        this.callAPI();
    }

    handleChangeF(event) {
        this.callAPI();
        this.setState({ api: event.target.value });
    }

    handleSubmitF(event) {
        console.log('api : ' + this.state.api);
        event.preventDefault();
    }

    setId(event) {
        console.log('value : ' + event.target.value);
        this.setState({ id: event.target.value });
    }

    formAPI() {
        switch (this.state.api) {
            case 'candis':
                const data = this.state.reponse;
                console.log('DATA : ' + data);
                return (
                    <div>
                        Voila les candidats
                        <form>
                            <select value={this.state.id} onChange={this.setId}>
                                {data.map(candi => (
                                    <option value={candi._id}>{candi.nom}</option>
                                ))}
                            </select>
                        </form>
                    </div>
                )

            case 'progs':
                return (
                    <div>Voila les programmes</div>
                )

            case 'sond':
                return (
                    <div>Voila les sondages</div>
                )

            case 'tweets':
                return (
                    <div>Voila les tweets</div>
                )

            case 'focus':
                return (
                    <div>Voila les focus</div>
                )

            default:
                console.log("Err");
        }
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="forms">
                    <form onSubmit={this.handleSubmitF}>
                        <label>
                            Choisissez le widget à modifier :
                            <select value={this.state.api} onChange={this.handleChangeF}>
                                <option value="candis">Candidats</option>
                                <option value="progs">Programmes</option>
                                <option value="sond">Sondage</option>
                                <option value="tweets">Tweets</option>
                                <option value="focus">Focus</option>
                            </select>
                        </label>
                        <input type="submit" value="Envoyer" />
                    </form>
                    {this.formAPI()}
                </div>
            );
        }
        else {
            return(
                <div className="forms">Chargement des apis...</div>
            )
        }
    }
}

export default Form;