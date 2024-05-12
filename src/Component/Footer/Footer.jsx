import './Footer.css';
import logo from '../../assets/logo.svg';

function Footer(){

return(
    <footer className="footer">
                <div href="index.html">
          <img src={logo} className='logo' alt="logo" />
        </div>
        <p>&copy; {new Date().getFullYear()} adriendev. All rights reserved</p>
    </footer>
);
    }


export default Footer