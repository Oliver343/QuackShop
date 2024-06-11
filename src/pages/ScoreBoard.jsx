import { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMehRollingEyes } from '@fortawesome/free-solid-svg-icons'

import scoreBoard from "../img/scoreboard.png"

export default function ScoreBoard(props) {
    const storeObject = useContext(StoreContextWrapper)
    const dice = [
        {name: "Pumpkin"},
        {name: "1VP"},
        {name: "1VP"},
        {name: "2VP"},
        {name: "Ruby"},
        {name: "Droplet"},
    ]
    let maxValue = ((storeObject.width < storeObject.height ? storeObject.width : storeObject.height) - 4 )

    function rollDie() {
        const randomNo = Math.floor(Math.random() * dice.length);
        console.log(dice[randomNo])
        storeObject.setScoreboardStep(prev => prev + 1)
    }

    function checkSpider() {
        if (storeObject.p1PotCurrentRound.length > 0) {
            if (storeObject.p1PotCurrentRound[storeObject.p1PotCurrentRound.length - 1].color === "green") {
                spiderEffect()
            }
        }
        if (storeObject.p1PotCurrentRound.length > 1) {
            if (storeObject.p1PotCurrentRound[storeObject.p1PotCurrentRound.length - 2].color === "green") {
                spiderEffect()
            }
        }
        storeObject.setScoreboardStep(prev => prev + 1)
    }

    function spiderEffect() {
        console.log("SPIDER EFFECT")
    }

    function checkRuby() {
        if (storeObject.scoreTrack[storeObject.p1ChipSpace +1].rubySpace) {
            console.log("PLAYER GETS RUBY")
            storeObject.setPlayer1Stats((prev) => {
                console.log(prev)
                const newRubyCount = prev.p1Rubies + 1
                console.log(newRubyCount)
                return {
                    ...prev,
                    p1Rubies: newRubyCount,
                  };
            })

        } else {
            console.log("NO RUBY")
        }
        storeObject.setScoreboardStep(prev => prev + 1)
    }

    return(
        <div>
            <div className="boardBar">
                <div className="buttonBox">
                    <div>
                        {" "}
                        {((storeObject.pageActive === 2) && (storeObject.scoreboardStep === 0)) ? <button onClick={rollDie}>Roll the dice</button> : ""}
                        {((storeObject.pageActive === 2) && (storeObject.scoreboardStep === 1)) ? <button onClick={checkSpider}>Check for Moth / Spider / Ghost</button> : ""}
                        {((storeObject.pageActive === 2) && (storeObject.scoreboardStep === 2)) ? <button onClick={checkRuby}>Check for Ruby</button> : ""}
                    </div>
            <div>
              {storeObject.menuShow ? "" : <button className="menuToggleBtn" onClick={props.handleMenuToggle}><FontAwesomeIcon icon={faBars} /></button>}
            </div>
        </div>
      </div>
            <div 
                className="newBoard" 
                style={{backgroundImage: 
                "url(" + scoreBoard + ")", 
                backgroundSize: 'contain', 
                backgroundRepeat: 'no-repeat', 
                width: 1000, maxWidth: maxValue, 
                height: 914, maxHeight: maxValue}}
            ></div>
            <div>Player One Score: {storeObject.player1Stats.p1Score}</div>
            <div>Player One Rubies: {storeObject.player1Stats.p1Rubies}</div>
        </div>
        
    )
}