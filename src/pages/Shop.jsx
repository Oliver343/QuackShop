import { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider";
import Book1 from "../img/bookSet1.png";
import Book2 from "../img/bookSet2.png";
import Book3 from "../img/bookSet3.png";
import chipO1 from "../img/chipO1.png";
import chipG1 from "../img/chipG1.png";
import chipG2 from "../img/chipG2.png";
import chipG4 from "../img/chipG4.png";
import chipR1 from "../img/chipR1.png";
import chipR2 from "../img/chipR2.png";
import chipR4 from "../img/chipR4.png";
import chipBLU1 from "../img/chipBLU1.png";
import chipBLU2 from "../img/chipBLU2.png";
import chipBLU4 from "../img/chipBLU4.png";
import chipY1 from "../img/chipY1.png";
import chipY2 from "../img/chipY2.png";
import chipY4 from "../img/chipY4.png";
import chipBLA1 from "../img/chipBLA1.png";
import chipP1 from "../img/chipP1.png";


export default function Shop() {
    const storeObject = useContext(StoreContextWrapper)
    let maxValue = ((storeObject.width < storeObject.height ? storeObject.width : storeObject.height) - 4 )
    
    function finishShopping() {
        storeObject.setPageActive(2)
    } 

    function buyIngredient(type, value, cost, player1) {

        // Reduce buy power by cost
        storeObject.setBuyPowerP1((prev => prev - cost)) 

        const setStats = player1 ? storeObject.setPlayer1Stats : storeObject.setPlayer2Stats
        setStats((prev) => {
            const newItems = []
            let image = chipO1
            let color = "orange"
            let effect = false

            switch(type) {
                case "o":
                    image = chipO1
                    color = "orange"
                    break;
                case "g":
                    if(value === 4) {
                        image = chipG4
                    } else if (value === 2) {
                        image = chipG2
                    } else {
                        image = chipG1
                    }
                    color = "green"
                    break;
                case "r":
                    if(value === 4) {
                        image = chipR4
                    } else if (value === 2) {
                        image = chipR2
                    } else {
                        image = chipR1
                    }
                    color = "red"
                    effect = true
                    break;
                case "blu":
                    if(value === 4) {
                        image = chipBLU4
                    } else if (value === 2) {
                        image = chipBLU2
                    } else {
                        image = chipBLU1
                    }
                    color = "blue"
                    effect = true
                    break;
                case "bla":
                    image = chipBLA1
                    color = "black"
                    break;
                case "y":
                    if(value === 4) {
                        image = chipY4
                    } else if (value === 2) {
                        image = chipY2
                    } else {
                        image = chipY1
                    }
                    color = "yellow"
                    effect = true
                    break;
                case "p":
                    image = chipP1
                    color = "purple"
                    effect = true
                    break;
            }

            newItems.push(
                {
                    color: color,
                    value: value,
                    img: image,
                    effect: effect,
                    volatile: false,
                })

            const updatedBag = prev.gameBag.concat(newItems)
            
            return {
                ...prev,
                gameBag: updatedBag,
              };
        })
    }

    console.log("storeObject.buyPowerP1")
    console.log(storeObject.buyPowerP1)


    return (
        <div>
            <div>
                {(storeObject.pageActive === 3) ? <button onClick={finishShopping}>Finish Shopping</button> : ""}
                {(storeObject.pageActive === 3) ? <p>Player 1 buying value: {storeObject.buyPowerP1}</p> : ""}
            </div>
            <img src={Book1} 
            style={{
                width: 1000, maxWidth: maxValue
            }}
            />
            <br />
            <button onClick={() => buyIngredient("o", 1, 3, true)} disabled={(storeObject.buyPowerP1 < 3) || (storeObject.pageActive !== 3)}>Pumpkin 1</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button onClick={() => buyIngredient("g", 1, 4, true)} disabled={(storeObject.buyPowerP1  < 4) || (storeObject.pageActive !== 3)}>Spider 1</button>
            <button onClick={() => buyIngredient("g", 2, 8, true)} disabled={(storeObject.buyPowerP1  < 8) || (storeObject.pageActive !== 3)}>Spider 2</button>
            <button onClick={() => buyIngredient("g", 4, 14, true)} disabled={(storeObject.buyPowerP1  < 14) || (storeObject.pageActive !== 3)}>Spider 4</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button onClick={() => buyIngredient("r", 1, 6, true)} disabled={(storeObject.buyPowerP1  < 6) || (storeObject.pageActive !== 3)}>Mushroom 1</button>
            <button onClick={() => buyIngredient("r", 2, 10, true)} disabled={(storeObject.buyPowerP1  < 10) || (storeObject.pageActive !== 3)}>Mushroom 2</button>
            <button onClick={() => buyIngredient("r", 4, 16, true)} disabled={(storeObject.buyPowerP1  < 16) || (storeObject.pageActive !== 3)}>Mushroom 4</button>
            <br />
            <img src={Book2} 
            style={{
                width: 1000, maxWidth: maxValue
            }}
            />
            <br />
            <button onClick={() => buyIngredient("blu", 1, 5, true)} disabled={(storeObject.buyPowerP1  < 5) || (storeObject.pageActive !== 3)}>Crow Skull 1</button>
            <button onClick={() => buyIngredient("blu", 2, 10, true)} disabled={(storeObject.buyPowerP1  < 10) || (storeObject.pageActive !== 3)}>Crow Skull 2</button>
            <button onClick={() => buyIngredient("blu", 4, 19, true)} disabled={(storeObject.buyPowerP1  < 19) || (storeObject.pageActive !== 3)}>Crow Skull 4</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button onClick={() => buyIngredient("bla", 1, 10, true)} disabled={(storeObject.buyPowerP1  < 10) || (storeObject.pageActive !== 3)}>Moth 1</button>
            <br />
            <img src={Book3} 
            style={{
                width: 1000, maxWidth: maxValue
            }}
            />
                        <br />
            <button onClick={() => buyIngredient("y", 1, 8, true)} disabled={(storeObject.buyPowerP1  < 8) || (storeObject.pageActive !== 3)}>Root 1</button>
            <button onClick={() => buyIngredient("y", 2, 12, true)} disabled={(storeObject.buyPowerP1  < 12) || (storeObject.pageActive !== 3)}>Root 2</button>
            <button onClick={() => buyIngredient("y", 4, 18, true)} disabled={(storeObject.buyPowerP1  < 18) || (storeObject.pageActive !== 3)}>Root 4</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button onClick={() => buyIngredient("p", 1, 9, true)} disabled={(storeObject.buyPowerP1  < 9) || (storeObject.pageActive !== 3)}>Ghost 1</button>
        </div>
    )
}