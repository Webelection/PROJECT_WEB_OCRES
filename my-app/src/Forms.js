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
            id: "",
            request: "post"
        }
        this.handleChangeF = this.handleChangeF.bind(this);
        this.handleSubmitF = this.handleSubmitF.bind(this);
        this.setId = this.setId.bind(this);
        this.setReq = this.setReq.bind(this);
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
            return (
                <div className="forms">Chargement des apis...</div>
            )
        }
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

    callElementCPo(nom, parti, photo) {
        const candi = {
            nom: nom,
            parti: parti,
            photo: photo
        };
        axios.post(`http://localhost:7000/${this.state.api}`, {candi})
            .then(res => {
                console.log('res : ' + res);
                console.log('res.data : ' + res.data);
            })
    }

    UNSAFE_componentWillMount() {
        this.callAPI();
    }

    handleChangeF(event) {
        this.callAPI();
        this.setState({ api: event.target.value });
    }

    handleSubmitF(event) {
        event.preventDefault();
    }

    setId(event) {
        this.setState({ id: event.target.value });
    }

    setReq(event) {

        this.setState({ request: event.target.value });
    }

    formAPI() {
        switch (this.state.api) {
            case 'candis':
                const data = this.state.reponse;
                return (
                    <div>
                        Voila les candidats
                        <form>
                            <select value={this.state.id} onChange={this.setId}>
                                {data.map(candi => (
                                    <option value={candi._id}>{candi.nom}</option>
                                ))}
                            </select>
                            <select value={this.state.request} onChange={this.setReq}>
                                <option value='post'>Ajouter un candidat</option>
                                <option value='put'>Modifier un candidat</option>
                                <option value='delete'>Supprimer un candidat</option>
                            </select>
                        </form>
                        {this.formElement()}
                    </div>
                );

            case 'progs':
                return (
                    <div>Voila les programmes</div>
                );

            case 'sond':
                return (
                    <div>Voila les sondages</div>
                );

            case 'tweets':
                return (
                    <div>Voila les tweets</div>
                );

            case 'focus':
                return (
                    <div>Voila les focus</div>
                );

            default:
                console.log("Err");
        }
    }

    formElement() {
        console.log('request : ' + this.state.request);
        switch (this.state.request) {
            case 'post':
                var nom = "";
                var parti = "";
                var photo = "";
                return (
                    <form onSubmit={this.callElementCPo(nom, parti, photo)}>
                        <label>
                            Nom : 
                            <textarea value={nom}/>
                        </label>
                        <label>
                            Parti : 
                            <textarea value={parti}/>
                        </label>
                        <label>
                            URL de la photo : 
                            <textarea value={photo}/>
                        </label>
                        <input type="submit" value="Envoyer" />
                    </form>
                );

            case 'put':
                return (
                    null
                );

            case 'delete':
                return (
                    null
                );

            default:
                console.log('ERR');
        }
    }
}

export default Form;