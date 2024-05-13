import { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { StoreContextWrapper } from "../store/ContextProvider"
import Header from "../components/Header"
import './Home.css';

export default function Home() {
    const storeObject = useContext(StoreContextWrapper)

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [menuShow, setMenuShow] = useState(true)
    let menuHight = 81

    if(!menuShow) {menuHight = 4}

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }

    function handleMenuToggle() {
        console.log("TOGGLE MENU CLICK")
        setMenuShow((pre) =>  !pre) 
    }

    window.addEventListener('resize', handleResize);

    console.log(storeObject)

    return (
        <div className="homeMain">
            {menuShow ? <Header toggleMenu={handleMenuToggle} /> : ""}
            <div 
            className="homeBody" 
            style={{minHeight: (height - menuHight)}}
            >
                <div className ="buttonBox">
                    {menuShow ? "." : <button className="menuToggleBtn" onClick={handleMenuToggle}><FontAwesomeIcon icon={faBars} /></button>}
                </div>
                HOME - {storeObject.checkState}
                <br />
                width - {width}
                <br />
                height - {height}
            </div>
        </div>
    )
}