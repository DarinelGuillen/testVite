import Logo from '../../assets/img/dice-d20.png'

import '../../assets/style/Header.css'
function Header() {
    return ( 
        <header>
            <img src={Logo} alt="Logo de la pagina SPA Single page aplication" />
            <h1>Programacion Web</h1>
        </header>
     );
}

export default Header;