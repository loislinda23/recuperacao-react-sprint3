// estilizacao
import "./style.css";

// rotas
import { Link } from "react-router-dom";

// imagens
import imgWhats from "../../assets/img/whats1.png"
import imgFace from "../../assets/img/face1.png"
import imgInsta from "../../assets/img/instag1.png"


function Footer() {

    return (
        <footer>
            <div className="container footer_container">
                <p>Todos os direitos reservados ®</p>
                <div>
                    <Link to={"#"}>
                        <img src={imgWhats} alt="" />
                        <Link to={"#"}>
                        </Link>
                        <img src={imgFace} alt="" />
                    </Link>
                    <Link to={"#"}>
                        <img src={imgInsta} alt="" />
                    </Link>
                </div>
            </div>
        </footer>

    );
}

export default Footer;     