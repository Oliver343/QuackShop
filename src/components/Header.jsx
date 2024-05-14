import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {

    return(
        <div className="headerMain">
            <div className='headerSub'>
                Quacks Shop
            </div>
            <div className="buttonBox">
                <button className='menuToggleBtn' onClick={props.toggleMenu}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
        </div>
    )
}