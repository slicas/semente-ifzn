import "../css/nav.scss";
import Logo from "../img/semente_logo_1.svg";
import Instagram from "../img/Instagram.svg"; 
import { Button } from 'react-bootstrap';

function TopNav() {
    return (
        <nav id="top-nav" >
            <div className="top-nav-content">
                    <a href="https://www.youtube.com/watch?v=IVdBIDSq-9Q"><img  alt ="" src={Instagram}></img></a>
                    <a href="https://www.youtube.com/watch?v=IVdBIDSq-9Q"><img  alt ="" src={Instagram}></img></a>
                    <a href="https://www.youtube.com/watch?v=IVdBIDSq-9Q"><img  alt ="" src={Instagram}></img></a>
                    <a href="https://www.youtube.com/watch?v=IVdBIDSq-9Q"><img  alt ="" src={Instagram}></img></a>
                    
                    
            </div>

        </nav>
    );
}

function BottomNav(props){
    const tabs = [
        { label: "Home", state: "home" ,link : "#"},
        { label: "Gameficação", state: "gameficacao" ,link : "#"},
        { label: "Regulamento", state: "regulamento" ,link : "#"},
        { label: "Pontuação", state: "pontuacao" ,link : "#"},
        { label: "Programação", state: "programacao" ,link : "#"},
    ];
    return(
        <div id="bottom-nav">
            <div className="bottom-nav-content">
            <img src={Logo} alt="Logo"></img>
                    <div id="nav-tabs">
                        {tabs.map((tab) => (
                            <a
                                key={tab.state}
                                className={props.highlight === tab.state ? "highlight" : ""}
                                href = {tab.link}
                            >
                                {tab.label}
                            </a>
                        ))}
                    </div>
                    <div>
                        <Button className="btn btn-success" variant="primary">Login</Button>
                        <Button className="btn btn-success">Registro</Button>
                    </div>
            </div>
        </div>
    )
}

export {BottomNav,TopNav};
