import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Header from './components/Header'
import Produto from './pages/Produto'
import Erro from './pages/Erro'

/*
REACT-ROUTER-DOM: Nao recarregar as paginas (mais performance)

yarn add react-router-dom
npm install react-router-dom

IMPORTANT:
yarn add react-router-dom@5.3.0

exact: invoca somente se for identico ao path
Switch: apenas um unico componente é chamado
path="/produto/:id" Informe :{param} para tornar dinamico
path="*": quando a rota nao existe (404). ->
Deve sempre ser a ultima rota!

*/

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sobre" component={Sobre} />
                <Route exact path="/contato" component={Contato} />
                <Route exact path="/produto/:id" component={Produto} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;