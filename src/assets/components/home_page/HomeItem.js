import Borda from "./src/itemborda.svg"
import "./src/style.scss"

function HomeItem(props) {
    if(props.alterned === false){
        return (
            <div className="home-item" data-aos="fade-right" data-aos-delay="250" >
                <div className="borda-left">
                    <img className="borda-1 " alt = "" src = {Borda}></img>
                    <img className="borda-2 " alt = "" src = {Borda}></img>
                </div>
                <div className="home-item-content">
                    <img alt = "" src = {props.image}></img>
                    <div>
                        <h1 className="home-content-title">{props.title}</h1>
                        <p className="home-content-content">{props.content}</p>
                    </div>
                </div>
                <div className="borda-right">
                    <img className="borda-1 " alt = "" src = {Borda}></img>
                    <img className="borda-2 " alt = "" src = {Borda}></img>
                </div>
            </div>
        );
    }else{
        return (
            <div className="home-item" data-aos="fade-right" data-aos-delay="250" >
                <div className="borda-left">
                    <img className="borda-1 " alt = "" src = {Borda}></img>
                    <img className="borda-2 " alt = "" src = {Borda}></img>
                </div>
                <div className="home-item-content">
                    <h1>hi</h1>
                </div>
                <div className="borda-right">
                    <img className="borda-1 " alt = "" src = {Borda}></img>
                    <img className="borda-2 " alt = "" src = {Borda}></img>
                </div>
            </div>
        );
    }

}



export default HomeItem;
