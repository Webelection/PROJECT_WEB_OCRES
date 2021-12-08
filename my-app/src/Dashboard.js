import React from 'react';
import './index.css';
import Cat from './Cat';
import Tweet from './Tweet';
import Candi from './Candi';
import Prog from './Prog';
import Sond from './Sond';
import Focus from './Focus';

class Widget extends React.Component {
    constructor (props) {
      super (props);
      this.state = {
          type: props.type
      }
    }

    render() {
        const classe = `element-flexible-${this.state.type}`;
        return (
            <div className={classe}>
                {this.props.children}
            </div>
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
                <div className="conteneur-flexible-ligne">
                    <Widget type='1'>
                        <h2>Les candidats à la présidentielle 2022</h2>
                        <Candi />
                    </Widget>
                </div>

                <div className="conteneur-flexible-ligne">
                    <Widget type='2'>
                        <h2>Les programmes</h2>
                        <Prog />
                    </Widget>
                    <Widget type='2'>
                        <h2>Les résultats des sondages</h2>
                        <Sond />
                    </Widget>
                </div>

                <div className="conteneur-flexible-ligne">
                    <Widget type='3'>
                        <h2>Un peu de douceur dans ce monde de brutes</h2>
                        <Cat />
                    </Widget>
                    <Widget type='4'>
                        <h2>Les tweets du moment</h2>
                        <Tweet />
                    </Widget>
                </div>

                <div className="conteneur-flexible-ligne">
                    <Widget type='1'>
                        <h2>Focus sur un candidat</h2>
                        <Focus />
                    </Widget>
                </div>

            </main>
        );
    }
}

export default DashBoard;