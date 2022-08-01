import logo from '../logo.svg';
function Navbar(props){
    return(
        <nav className = {props.darkMode ? "dark":""}>
         
            <img className='react-logo' src={logo} />
            <h3>ReactFacts</h3>

            <div className="toggler" >
                <p className="toggler--light">Light</p>

                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>

                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
);
}
export default Navbar;