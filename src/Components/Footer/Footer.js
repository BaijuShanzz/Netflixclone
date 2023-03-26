// footer sectio css
import './Footer.css';

const Footer = () =>{
    return(
        <div className="footer-section">
            <hr />
            <div className="contact-number">
                <h4>Questions? Call 1-98765432</h4>
            </div>
            <div className="contact-details-container">
                <div className="contact-list">
                    <ul className="list-items">
                        <li className="list-item">FAQ</li>
                        <li className="list-item">Investor Relations</li>
                        <li className="list-item">Ways to Watch</li>
                        <li className="list-item">Corporate Information</li>
                        <li className="list-item">Netflix Originals</li>
                    </ul>
                </div>
                <div className="contact-list">
                    <ul className="list-items">
                        <li className="list-item">Help Center</li>
                        <li className="list-item">Jobs</li>
                        <li className="list-item">Terms od Use</li>
                        <li className="list-item">Contact us</li>
                    </ul>
                </div>
                <div className="contact-list">
                    <ul className="list-items">
                        <li className="list-item">Account</li>
                        <li className="list-item">Redeem Gift Cards</li>
                        <li className="list-item">Privacy</li>
                        <li className="list-item">Speed Test</li>
                    </ul>
                </div>
                <div className="contact-list">
                    <ul className="list-items">
                        <li className="list-item">Media Center</li>
                        <li className="list-item">Buy Gift Cards</li>
                        <li className="list-item">Cookie Preference</li>
                        <li className="list-item">Legeal Notices</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default  Footer;