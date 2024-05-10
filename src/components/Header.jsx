export default function Header(props) {

    return(
        <div className="headerMain">
            <div className="buttonBox">
                <button onClick={props.toggleMenu}>CLOSE MENU</button>
            </div>
            HEADER
        </div>
    )
}