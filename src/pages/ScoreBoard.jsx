import { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import scoreBoard from "../img/scoreboard.png"
import chipO1 from "../img/chipO1.png";

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

    function rollDie(player1) {
        const randomNo = Math.floor(Math.random() * dice.length);
        console.log(dice[randomNo])

        const setStats = player1 ? storeObject.setPlayer1Stats : storeObject.setPlayer2Stats

        switch(randomNo) {
            case 0:
                console.log("ADD A PUMPKIN HERE")
                setStats((prev) => {
                    const newBag = prev.p1GameBag
                    newBag.push(
                        {
                            color: "orange",
                            value: 1,
                            img: chipO1,
                            effect: false,
                            volatile: false,
                        })

                    return {
                        ...prev,
                        p1GameBag: newBag,
                      };
                })
                break;
            case 1:
                addVP(player1)
                break;
            case 2:
                addVP(player1)
                break;
            case 3:
                addVP(player1)
                addVP(player1)
                break;
            case 4:
                addRuby(player1)
                break;
            case 4:
                console.log("ADD A DROP HERE")
                break;
        }
        console.log(storeObject.player1Stats)
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
        addRuby(1)
    }

    function checkRuby() {
        if (storeObject.scoreTrack[storeObject.p1ChipSpace +1].rubySpace) {
            console.log("PLAYER GETS RUBY")
            addRuby(1)
        } else {
            console.log("NO RUBY")
        }
        storeObject.setScoreboardStep(prev => prev + 1)
    }

    function scoreVP() {
        console.log(storeObject.scoreTrack[storeObject.p1ChipSpace +1].victoryPoints)
        for(let i = 0; i < storeObject.scoreTrack[storeObject.p1ChipSpace +1].victoryPoints; i ++) {
            addVP(1)
        }
        storeObject.setScoreboardStep(prev => prev + 1)
    }

    function skip() {
        storeObject.setScoreboardStep(prev => prev + 1)
    }

    function addRuby(player1) {
        const setStats = player1 ? storeObject.setPlayer1Stats : storeObject.setPlayer2Stats
        setStats((prev) => {
            const newRubyCount = prev.rubies + 1
            return {
                ...prev,
                score: newRubyCount,
                };
        })
    }

    function addVP(player1) {
        const setStats = player1 ? storeObject.setPlayer1Stats : storeObject.setPlayer2Stats
        setStats((prev) => {
            const newVPCount = prev.score + 1
            return {
                ...prev,
                score: newVPCount,
                };
        })
    }

    return(
        <div>
            <div className="boardBar">
                <div className="buttonBox">
                    <div>
                        {" "}
                        {((storeObject.pageActive === 2) && (storeObject.scoreboardStep === 0)) ? <button onClick={() => {rollDie(1)}} disabled={
                            storeObject.p1ChipSpace < storeObject.p2ChipSpace || storeObject.p1Exploded 
                        }>Player 1 Roll the dice</button> : ""}
                        {((storeObject.pageActive === 2) && (storeObject.scoreboardStep === 0)) ? <button onClick={() => {rollDie(1)}} disabled={
                            storeObject.p1ChipSpace > storeObject.p2ChipSpace || storeObject.p2Exploded 
                        }>Player 2 Roll the dice</button> : ""}
                        {((storeObject.pageActive === 2) && (storeObject.scoreboardStep === 1)) ? <button onClick={checkSpider}>Check for Moth / Spider / Ghost</button> : ""}
                        {((storeObject.pageActive === 2) && (storeObject.scoreboardStep === 2)) ? <button onClick={checkRuby}>Check for Ruby</button> : ""}
                        {((storeObject.pageActive === 2) && (storeObject.scoreboardStep === 3)) ? <button onClick={scoreVP}>Score VP</button> : ""}

                        {(storeObject.pageActive === 2) ? <button onClick={skip}>Skip / Next</button> : ""}
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
            <div>Player One Score: {storeObject.player1Stats.score}</div>
            <div>Player One Rubies: {storeObject.player1Stats.rubies}</div>
        </div>
        
    )
}