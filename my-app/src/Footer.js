import './index.css';

function Footer() {
    return (
        <footer>
            <div className="social">
                <a href="/"><i className="icon ion-social-instagram"></i></a>
                <a href="/"><i className="icon ion-social-snapchat"></i></a>
                <a href="/"><i className="icon ion-social-twitter"></i></a>
                <a href="/"><i className="icon ion-social-facebook"></i></a>
            </div>
            <p className="copyright">Webelection © 2021</p>
        </footer>
    );
}

export default Footer;