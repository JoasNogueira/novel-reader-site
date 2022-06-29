import { Link } from 'react-router-dom';
import './styles.css'


export default function Menu(){
    
    
    return(
            <nav className="navMenu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="novels">Novels</Link></li>
                    <li><Link to="sobre">Sobre</Link></li>
                    <li><Link to="contato">Contato</Link></li>
                    <li><Link to="donations">Donations</Link></li>
                    <li><Link to="discord">Discord</Link></li>
                    <li><Link to="login">Login</Link></li>
                </ul>
            </nav>
    );
}