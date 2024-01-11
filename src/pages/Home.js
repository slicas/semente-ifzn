import "../assets/css/home.scss"
import {TopNav,BottomNav}   from "../assets/components/NavBar";
import HomeItem from "../assets/components/home_page/HomeItem";

import Capa from "../assets/img/homecapa.svg"
import Controle from "../assets/img/controle.svg"

import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
import { Button } from 'react-bootstrap';



function Home(){
    useEffect(() => {
        AOS.init();
    }, [])
    return(

        <div id="home">
            <TopNav></TopNav>
            <img id="capa" alt="Capa"  src={Capa}></img>                                                 
            <BottomNav highlight = "home"></BottomNav>
            <div className="home-content">
                <section id="home-1st-section" data-aos="fade-right" data-aos-delay="250">
                    <h1>Semente</h1>
                    <p className="p1">e sua trajetória</p>
                    <p className="p2">A semente esta completando 15 anos de puras questões ambientais feitas pelos próprios alunos!</p>
                    <Button className="btn btn-success">Saiba mais</Button>
                </section>
                <section id="home-2st-section">
                    <HomeItem alterned={false} image = {Controle} title = "Gamificação" content = "A gamificação consiste na aplicação de mecanismos e dinâmicas dos jogos no ambito do campus para motivar e fazer um aprendizado de forma mais lúdica de acordo com o tema anual da SEMENTE. Após a gamificação, os alunos inscritos receberão premios e brindes gamificados de acordo com suas pontuações."></HomeItem>
                </section>
            </div>
        </div>
    )
}

export default Home;
