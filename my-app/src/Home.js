import React from 'react';
import './index.css';
import Header from './Header';
import DashBoard from './Dashboard';
import Footer from './Footer';

function Home() {
    return(
        <div>
            <Header />
            <DashBoard />
            <Footer />
        </div>
    );
}

export default Home;