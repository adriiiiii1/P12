import './Header.css';
import Button from "../Button/Button.jsx";
import logo from '../../assets/logo.svg';

function Header(){

return(
    <header className="header">
                <div className="logo-container">
                <div href="index.html" className="lien-icone">
          <img src={logo} className='logo' alt="logo" />
        </div>
                </div>
                <div className="lien-nav">       
                    <a href="#services">services</a>
                    <a href="#expérience">expérience</a>
                    <a href="#skills">skills</a>
                    <a href="#portfolio">portfolio</a>
                    <a href="#contact">contact</a>
                </div>
                <div><Button></Button>
                </div>
                
    </header>
);
    }


export default Header