import React from 'react';
import './index.css';
import Cat from './Cat';

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

                <div className="conteneur-flexible ligne">
                    <div className="element-flexible-1"></div>
                </div>

                <div className="conteneur-flexible ligne">
                    <div className="element-flexible-2"></div>
                    <div className="element-flexible-2"></div>
                </div>

                <div className="conteneur-flexible ligne">
                    <div className="element-flexible-3"><Cat /></div>
                    <div className="element-flexible-4"></div>
                </div>

                <div className="conteneur-flexible ligne">
                    <div className="element-flexible-1"></div>
                </div>

            </main>
        );
    }
}

export default DashBoard;