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
            nom: "",
            parti: "",
            photo: "",
            textes: [],
            request: "post"
        }
        this.handleChangeF = this.handleChangeF.bind(this);
        this.handleSubmitF = this.handleSubmitF.bind(this);
        this.callElementD = this.callElementD.bind(this);
        this.callElementCPo = this.callElementCPo.bind(this);
        this.callElementCPu = this.callElementCPu.bind(this);
        this.callElementPPo = this.callElementPPo.bind(this);
        this.callElementPPu = this.callElementPPu.bind(this);
        this.callElementSPo = this.callElementCPo.bind(this);
        this.callElementSPu = this.callElementCPu.bind(this);
        this.callElementTPo = this.callElementCPo.bind(this);
        this.callElementTPu = this.callElementCPu.bind(this);
        this.callElementFPo = this.callElementCPo.bind(this);
        this.callElementFPu = this.callElementCPu.bind(this);
        this.setId = this.setId.bind(this);
        this.setReq = this.setReq.bind(this);
        this.setN = this.setN.bind(this);
        this.setPa = this.setPa.bind(this);
        this.setPh = this.setPh.bind(this);
        this.setTextes = this.setTextes.bind(this);
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="forms" style={{ height: "650px", margin: "20px" }}>
                    <form onSubmit={this.handleSubmitF}>
                        <label>
                            <h3>Choisissez le widget à modifier :</h3>
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


    //FONCTIONS POUR CHAQUE WIDGET
    //Global
    callAPI(api) {
        axios.get(`http://localhost:7000/${api}`)
            .then(res => {
                const elements = res.data;
                this.setState({
                    isLoaded: true,
                    reponse: elements
                });
            });
    }

    //DELETE
    callElementD(event) {
        axios.delete(`http://localhost:7000/${this.state.api}/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        event.preventDefault();
    }

    //Candidats
    //Get par id
    callAPIC() {
        console.log('called');
        axios.get(`http://localhost:7000/${this.state.api}/${this.state.id}`)
            .then(res => {
                const element = res.data;
                this.setState({
                    nom: element.nom,
                    parti: element.parti,
                    photo: element.photo
                });
            });
    }

    //POST
    callElementCPo(event) {
        var candi = {
            nom: this.state.nom,
            parti: this.state.parti,
            photo: this.state.photo
        }
        axios.post(`http://localhost:7000/${this.state.api}`, candi)
            .then(res => {
                console.log('res : ' + res);
                console.log('res.data : ' + res.data);
            })
        event.preventDefault();
    }

    //PUT
    callElementCPu(event) {
        var candi = {
            nom: this.state.nom,
            parti: this.state.parti,
            photo: this.state.photo
        }
        axios.put(`http://localhost:7000/${this.state.api}/${this.state.id}`, candi)
            .then(res => {
                console.log('res : ' + res);
                console.log('res.data : ' + res.data);
            })
        event.preventDefault();
    }


    //Programmes
    //POST
    callElementPPo(event) {
        var prog = {
            candi: this.state.nom,
            parti: this.state.parti,
            texte: this.state.photo
        }
        axios.post(`http://localhost:7000/${this.state.api}`, prog)
            .then(res => {
                console.log('res : ' + res);
                console.log('res.data : ' + res.data);
            })
        event.preventDefault();
    }

    //PUT
    callElementPPu(event) {
        var prog = {
            candi: this.state.nom,
            parti: this.state.parti,
            texte: this.state.photo
        }
        axios.put(`http://localhost:7000/${this.state.api}/${this.state.id}`, prog)
            .then(res => {
                console.log('res : ' + res);
                console.log('res.data : ' + res.data);
            })
        event.preventDefault();
    }

    //Sondage
    //POST
    callElementSPo(event) {
        var stat = {
            candi: this.state.nom,
            num: this.state.parti,
            col: this.state.photo
        }
        axios.post(`http://localhost:7000/${this.state.api}`, stat)
            .then(res => {
                console.log('res : ' + res);
                console.log('res.data : ' + res.data);
            })
        event.preventDefault();
    }

    //PUT
    callElementSPu(event) {
        var stat = {
            candi: this.state.nom,
            num: this.state.parti,
            col: this.state.photo
        }
        axios.put(`http://localhost:7000/${this.state.api}/${this.state.id}`, stat)
            .then(res => {
                console.log('res : ' + res);
                console.log('res.data : ' + res.data);
            })
        event.preventDefault();
    }

    //Tweets
    //POST
    callElementTPo(event) {
        var tweet = {
            candi: this.state.nom,
            num: this.state.parti
        }
        axios.post(`http://localhost:7000/${this.state.api}`, tweet)
            .then(res => {
                console.log('res : ' + res);
                console.log('res.data : ' + res.data);
            })
        event.preventDefault();
    }

    //PUT
    callElementTPu(event) {
        var tweet = {
            candi: this.state.nom,
            num: this.state.parti
        }
        axios.put(`http://localhost:7000/${this.state.api}/${this.state.id}`, tweet)
            .then(res => {
                console.log('res : ' + res);
                console.log('res.data : ' + res.data);
            })
        event.preventDefault();
    }

    //Focus
    //POST
    callElementFPo(event) {
        var focus = {
            candi: this.state.nom,
            textes: this.state.textes
        }
        axios.post(`http://localhost:7000/${this.state.api}`, focus)
            .then(res => {
                console.log('res : ' + res);
                console.log('res.data : ' + res.data);
            })
        event.preventDefault();
    }

    //PUT
    callElementFPu(event) {
        var focus = {
            candi: this.state.nom,
            textes: this.state.textes
        }
        axios.put(`http://localhost:7000/${this.state.api}/${this.state.id}`, focus)
            .then(res => {
                console.log('res : ' + res);
                console.log('res.data : ' + res.data);
            })
        event.preventDefault();
    }


    UNSAFE_componentWillMount() {
        this.callAPI('candis');
    }

    handleChangeF(event) {
        this.setState({ api: event.target.value });
        this.callAPI(event.target.value);
    }

    handleSubmitF(event) {
        event.preventDefault();
    }


    //Setters
    setId(event) {
        this.setState({ id: event.target.value, tewtes:[] });
    }

    setReq(event) {
        this.setState({ request: event.target.value });
    }

    setN(event) {
        this.setState({ nom: event.target.value });
    }

    setPa(event) {
        this.setState({ parti: event.target.value });
    }

    setPh(event) {
        this.setState({ photo: event.target.value });
    }

    setTextes(event) {
        var tab = this.state.textes;
        tab.push({date: this.state.parti, texte: this.state.photo});
        this.setState({textes: tab});
    }

    formAPI() {
        switch (this.state.api) {
            case 'candis':
                const data = this.state.reponse;
                return (
                    <div>
                        <h4>Liste des candidats :</h4>
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
                        {this.formElementC()}
                    </div>
                );

            case 'progs':
                const data2 = this.state.reponse;
                return (
                    <div>
                        <h4>Liste des programmes :</h4>
                        <form>
                            <select value={this.state.id} onChange={this.setId}>
                                {data2.map(prog => (
                                    <option value={prog._id}>{prog.candi}</option>
                                ))}
                            </select>
                            <select value={this.state.request} onChange={this.setReq}>
                                <option value='post'>Ajouter un programme</option>
                                <option value='put'>Modifier un programme</option>
                                <option value='delete'>Supprimer un programme</option>
                            </select>
                        </form>
                        {this.formElementP()}
                    </div>
                );

            case 'sond':
                const data3 = this.state.reponse;
                return (
                    <div>
                        <h4>Liste des statistiques :</h4>
                        <form>
                            <select value={this.state.id} onChange={this.setId}>
                                {data3.map(stat => (
                                    <option value={stat._id}>{stat.candi}</option>
                                ))}
                            </select>
                            <select value={this.state.request} onChange={this.setReq}>
                                <option value='post'>Ajouter une stat</option>
                                <option value='put'>Modifier une stat</option>
                                <option value='delete'>Supprimer une stat</option>
                            </select>
                        </form>
                        {this.formElementS()}
                    </div>
                );

            case 'tweets':
                const data4 = this.state.reponse;
                return (
                    <div>
                        <h4>Liste des tweets :</h4>
                        <form>
                            <select value={this.state.id} onChange={this.setId}>
                                {data4.map((tweet, index) => (
                                    <option value={tweet._id}>{`Tweet n°${index + 1}`}</option>
                                ))}
                            </select>
                            <select value={this.state.request} onChange={this.setReq}>
                                <option value='post'>Ajouter un tweet</option>
                                <option value='put'>Modifier un tweet</option>
                                <option value='delete'>Supprimer un tweet</option>
                            </select>
                        </form>
                        {this.formElementT()}
                    </div>
                );

            case 'focus':
                const data5 = this.state.reponse;
                return (
                    <div>
                        <h4>Liste des focus :</h4>
                        <form>
                            <select value={this.state.id} onChange={this.setId}>
                                {data5.map(focus => (
                                    <option value={focus._id}>{focus.candi}</option>
                                ))}
                            </select>
                            <select value={this.state.request} onChange={this.setReq}>
                                <option value='post'>Ajouter un focus</option>
                                <option value='put'>Modifier un focus</option>
                                <option value='delete'>Supprimer un focus</option>
                            </select>
                        </form>
                        {this.formElementF()}
                    </div>
                );

            default:
                console.log("Err");
        }
    }

    formElementC() {
        switch (this.state.request) {
            case 'post':
                return (
                    <form onSubmit={this.callElementCPo}>
                        <label>
                            Nom :
                            <textarea value={this.state.nom} onChange={this.setN} />
                        </label>
                        <label>
                            Parti :
                            <textarea value={this.state.parti} onChange={this.setPa} />
                        </label>
                        <label>
                            URL de la photo :
                            <textarea value={this.state.photo} onChange={this.setPh} />
                        </label>
                        <input type="submit" value="Créer candidat" />
                    </form>
                );

            case 'put':
                return (
                    <form onSubmit={this.callElementCPu}>
                        <label>
                            Nom :
                            <textarea value={this.state.nom} onChange={this.setN} />
                        </label>
                        <label>
                            Parti :
                            <textarea value={this.state.parti} onChange={this.setPa} />
                        </label>
                        <label>
                            URL de la photo :
                            <textarea value={this.state.photo} onChange={this.setPh} />
                        </label>
                        <input type="submit" value="Modifier candidat" />
                    </form>
                );

            case 'delete':
                return (
                    <form onSubmit={this.callElementD}>
                        <input type="submit" value="EFFACER CANDIDAT" />
                    </form>
                );

            default:
                console.log('ERR');
        }
    }

    formElementP() {
        switch (this.state.request) {
            case 'post':
                return (
                    <form onSubmit={this.callElementPPo}>
                        <label>
                            Nom du candidat :
                            <textarea value={this.state.nom} onChange={this.setN} />
                        </label>
                        <label>
                            Parti :
                            <textarea value={this.state.parti} onChange={this.setPa} />
                        </label>
                        <label>
                            Programme :
                            <textarea value={this.state.photo} onChange={this.setPh} />
                        </label>
                        <input type="submit" value="Créer programme" />
                    </form>
                );

            case 'put':
                return (
                    <form onSubmit={this.callElementPPu}>
                        <label>
                            Nom du candidat :
                            <textarea value={this.state.nom} onChange={this.setN} />
                        </label>
                        <label>
                            Parti :
                            <textarea value={this.state.parti} onChange={this.setPa} />
                        </label>
                        <label>
                            Programme :
                            <textarea value={this.state.photo} onChange={this.setPh} />
                        </label>
                        <input type="submit" value="Modifier programme" />
                    </form>
                );

            case 'delete':
                return (
                    <form onSubmit={this.callElementD}>
                        <input type="submit" value="EFFACER PROGRAMME" />
                    </form>
                );

            default:
                console.log('ERR');
        }
    }

    formElementS() {
        switch (this.state.request) {
            case 'post':
                return (
                    <form onSubmit={this.callElementSPo}>
                        <label>
                            Nom du candidat :
                            <textarea value={this.state.nom} onChange={this.setN} />
                        </label>
                        <label>
                            Pourcentage de voies :
                            <textarea value={this.state.parti} onChange={this.setPa} />
                        </label>
                        <label>
                            Couleur d'affichage :
                            <textarea value={this.state.photo} onChange={this.setPh} />
                        </label>
                        <input type="submit" value="Créer stat" />
                    </form>
                );

            case 'put':
                return (
                    <form onSubmit={this.callElementSPu}>
                        <label>
                            Nom du candidat :
                            <textarea value={this.state.nom} onChange={this.setN} />
                        </label>
                        <label>
                            Pourcentage de voies :
                            <textarea value={this.state.parti} onChange={this.setPa} />
                        </label>
                        <label>
                            Couleur d'affichage :
                            <textarea value={this.state.photo} onChange={this.setPh} />
                        </label>
                        <input type="submit" value="Modifier stat" />
                    </form>
                );

            case 'delete':
                return (
                    <form onSubmit={this.callElementD}>
                        <input type="submit" value="EFFACER STATISTIQUE" />
                    </form>
                );

            default:
                console.log('ERR');
        }
    }

    formElementT() {
        switch (this.state.request) {
            case 'post':
                return (
                    <form onSubmit={this.callElementTPo}>
                        <label>
                            URL de la photo :
                            <textarea value={this.state.nom} onChange={this.setN} />
                        </label>
                        <label>
                            URL du tweet :
                            <textarea value={this.state.parti} onChange={this.setPa} />
                        </label>
                        <input type="submit" value="Créer tweet" />
                    </form>
                );

            case 'put':
                return (
                    <form onSubmit={this.callElementTPu}>
                        <label>
                            URL de la photo :
                            <textarea value={this.state.nom} onChange={this.setN} />
                        </label>
                        <label>
                            URL du tweet :
                            <textarea value={this.state.parti} onChange={this.setPa} />
                        </label>
                        <input type="submit" value="Modifier tweet" />
                    </form>
                );

            case 'delete':
                return (
                    <form onSubmit={this.callElementD}>
                        <input type="submit" value="EFFACER TWEET" />
                    </form>
                );

            default:
                console.log('ERR');
        }
    }

    formElementF() {
        switch (this.state.request) {
            case 'post':
                return (
                    <form onSubmit={this.callElementFPo}>
                        <label>
                            Nom du candidat :
                            <textarea value={this.state.nom} onChange={this.setN} />
                        </label>
                        <label>
                            Date :
                            <textarea value={this.state.parti} onChange={this.setPa} />
                        </label>
                        <input type="submit" value="Créer focus" />
                    </form>
                );

            case 'put':
                return (
                    <form onSubmit={this.callElementFPu}>
                        <label>
                            Nom du candidat :
                            <textarea value={this.state.nom} onChange={this.setN} />
                        </label>
                        <label>
                            Date :
                            <textarea value={this.state.parti} onChange={this.setPa} />
                        </label>
                        <input type="submit" value="Modifier focus" />
                    </form>
                );

            case 'delete':
                return (
                    <form onSubmit={this.callElementD}>
                        <input type="submit" value="EFFACER CANDIDAT" />
                    </form>
                );

            default:
                console.log('ERR');
        }
    }

}

export default Form;