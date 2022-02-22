import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h2>Header do site</h2>
            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/contato">Contato</Link><br/>
            <Link to="/produto/0">Produto</Link><br/>
        </header>
    );
}