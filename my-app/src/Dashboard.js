import React from 'react';
import './index.css';
import Cat from './Cat';
import Tweet from './Tweet';
import Candi from './Candi';
import Prog from './Prog';
import Sond from './Sond';

class Widget extends React.Component {
    /*constructor (props) {
      super (props);
      //this.state
    }*/

    render() {
        return (
            /* IMAGE EN REACT
            <div>
            <img src={img} alt="img not found"></img>
            Pipouuuuuuuuuuuuuuuuuu
            </div>*/
            null
        );
    }
}

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widgets: Array(6).fill(null),
        };
    }

    render() {
        return (
            <main>
                <Widget />

                <div className="conteneur-flexible-ligne">
                    <div className="element-flexible-1">
                        <h2>Les candidats à la présidentielle 2022</h2>
                        <Candi />
                    </div>
                </div>

                <div className="conteneur-flexible-ligne">
                    <div className="element-flexible-2">
                        <h2>Les programmes</h2>
                        <Prog />
                    </div>
                    <div className="element-flexible-2">
                        <h2>Les résultats des sondages</h2>
                        <Sond />
                    </div>
                </div>

                <div className="conteneur-flexible-ligne">
                    <div className="element-flexible-3">
                        <h2>Un peu de douceur dans ce monde de brutes</h2>
                        <Cat />
                    </div>
                    <div className="element-flexible-4"><Tweet /></div>
                </div>

                <div className="conteneur-flexible-ligne">
                    <div className="element-flexible-1"></div>
                </div>

            </main>
        );
    }
}

export default DashBoard;