import React from 'react';
import './index.css';
import Header from './Header';
import Footer from './Footer';

function Error() {
    return(
        <div>
            <Header />
            <main>
                <h2>Erreur, veuillez retournez sur la page d'accueil</h2>
            </main>
            <Footer />
        </div>
    );
}

export default Error;