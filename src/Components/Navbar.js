import './Navbar.css'
import {useState} from 'react'
import on from '../images/audioon.png'
import off from '../images/audiooff.png'
import Logo from '../images/logo.png'
import { Switch,Link,NavLink } from "react-router-dom";
const Navbar = () => {
    const [son,setson]=useState(false); 
    const music = ()=>{
        setson(!son);
    }
    return (
        <div>
            <Switch>
        <nav>
            {
            son ? <div className="son" onClick={music}>
            <img src={on}/>
        </div>
        : <div className="son" onClick={music}>
        <img src={off} />
    </div>
            }
            <div className="logo">
               <Link to="/"><img src={Logo} /></Link>
            </div>
            <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/characters">Characters</NavLink></li>
            <li><NavLink to="/weapons">Weapons</NavLink></li>
            <li><NavLink to="/aboutthis">About This</NavLink></li>
            <li><NavLink to="/aboutme">About Me</NavLink></li>
            </ul>
        </nav>
        </Switch>
        </div>
      );
}
 
export default Navbar;