
const NavBar = () => {
    return (  
        <nav style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-between', padding: '8px 40px 8px 40px', alignItems: 'center'}}>
           <div style={{ display:'flex', justifyContent:'center', alignItems: 'center'}}>
                <img src='https://cdn.icon-icons.com/icons2/2070/PNG/512/parrot_icon_126079.png' alt='logo-bird' height='40px' width='40px'></img>
                <a style={{color:'red',fontFamily: 'Bebas Neue', fontWeight:'bold', fontSize: '50px'}}>
                PETFLIX
                </a>
            </div>
            <div style={{color: 'grey', fontFamily: 'arial'}} >
                <a>Início</a>
                <a style={{paddingLeft: '8px'}}>Caezinhos</a>
                <a style={{paddingLeft: '8px'}}>Gatinhos</a>
                <a style={{paddingLeft: '8px'}}>Variados</a>
            </div>
        </nav>
    )
}

export default NavBar;