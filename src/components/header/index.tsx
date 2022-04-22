import { Link } from 'react-router-dom';
import * as H from './styles'
import Logo from '../../assets/logo'

function Header (){

    return(
        <H.Nav>
          <H.Svg>
            <Logo />
          </H.Svg>

            <H.Links>
            <Link to="/trilhas">Tilhas</Link>
            <Link to="/">Cursos</Link>
            <Link to="/agenda">Agenda</Link>
            </H.Links>
            <Link to='/'>Entrar/Cadastrar</Link>

        </H.Nav>
    )
}

export default Header;