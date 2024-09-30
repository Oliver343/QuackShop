import { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider";
import Book1 from "../img/bookSet1.png";
import Book2 from "../img/bookSet2.png";
import Book3 from "../img/bookSet3.png";
import chipO1 from "../img/chipO1.png";
import chipG1 from "../img/chipG1.png";

export default function Shop() {
    const storeObject = useContext(StoreContextWrapper)
    let maxValue = ((storeObject.width < storeObject.height ? storeObject.width : storeObject.height) - 4 )
    
    function addIngredient(type, value, player1) {
        const setStats = player1 ? storeObject.setPlayer1Stats : storeObject.setPlayer2Stats
        console.log("ADD SOMETHING...")
        setStats((prev) => {
            const newBag = prev.gameBag
            let image = ""
            let color = ""
            let effect = false

            switch(type) {
                case "o":
                    image = chipO1
                    color = "orange"
                    break;
                case "g":
                    image = chipG1
                    color = "green"
                    break;
                case "r":
                    image = chipO1
                    color = "red"
                    effect = true
                    break;
                case "blu":
                    image = chipO1
                    color = "blue"
                    effect = true
                    break;
                case "bla":
                    image = chipO1
                    color = "black"
                    break;
                case "y":
                    image = chipO1
                    color = "yellow"
                    effect = true
                    break;
                case "p":
                    image = chipO1
                    color = "purple"
                    effect = true
                    break;
            }

            newBag.push(
                {
                    color: color,
                    value: value,
                    img: image,
                    effect: effect,
                    volatile: false,
                })

            return {
                ...prev,
                gameBag: newBag,
              };
        })
    }


    return (
        <div>
            <div>
                {(storeObject.pageActive === 3) ? <p>Player 1 buying value: {storeObject.buyPowerP1 }</p> : ""}
            </div>
            <img src={Book1} 
            style={{
                width: 1000, maxWidth: maxValue
            }}
            />
            <br />
            <button disabled={storeObject.buyPowerP1 < 3}>Pumpkin 1</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button disabled={storeObject.buyPowerP1  < 4}>Spider 1</button>
            <button disabled={storeObject.buyPowerP1  < 8}>Spider 2</button>
            <button disabled={storeObject.buyPowerP1  < 14}>Spider 4</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button disabled={storeObject.buyPowerP1  < 6}>Mushroom 1</button>
            <button disabled={storeObject.buyPowerP1  < 10}>Mushroom 2</button>
            <button disabled={storeObject.buyPowerP1  < 16}>Mushroom 4</button>
            <br />
            <img src={Book2} 
            style={{
                width: 1000, maxWidth: maxValue
            }}
            />
            <br />
            <button disabled={storeObject.buyPowerP1  < 5}>Crow Skull 1</button>
            <button disabled={storeObject.buyPowerP1  < 10}>Crow Skull 2</button>
            <button disabled={storeObject.buyPowerP1  < 19}>Crow Skull 4</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button disabled={storeObject.buyPowerP1  < 10}>Moth 1</button>
            <br />
            <img src={Book3} 
            style={{
                width: 1000, maxWidth: maxValue
            }}
            />
                        <br />
            <button disabled={storeObject.buyPowerP1  < 8}>Root 1</button>
            <button disabled={storeObject.buyPowerP1  < 12}>Root 2</button>
            <button disabled={storeObject.buyPowerP1  < 18}>Root 4</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button disabled={storeObject.buyPowerP1  < 9}>Ghost 1</button>
        </div>
    )
}