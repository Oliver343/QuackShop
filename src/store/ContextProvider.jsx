import { createContext, useState } from "react";

import chipG1 from "../img/chipG1.png";
import chipO1 from "../img/chipO1.png";
import chipW1 from "../img/chipW1.png";
import chipW2 from "../img/chipW2.png";
import chipW3 from "../img/chipW3.png";

export const StoreContextWrapper = createContext({
    checkState: "",
    scoreTrack: [],
    bag: []
    // These are only used to help with auto complete
})

export default function ContextProvider({children}){
    const [checkState] = useState("State working");
    const [scoreTrack] = useState([
      {
        number: 0,
        buyingPower: 0,
        victoryPoints: 0,
        rubySpace: false,
        end: false
      },
      {
        number: 1,
        buyingPower: 1,
        victoryPoints: 0,
        rubySpace: false,
        end: false
      },
      {
        number: 2,
        buyingPower: 2,
        victoryPoints: 0,
        rubySpace: false,
        end: false
      },
      {
        number: 3,
        buyingPower: 3,
        victoryPoints: 0,
        rubySpace: false,
        end: false
      },
      {
        number: 4,
        buyingPower: 4,
        victoryPoints: 0,
        rubySpace: false,
        end: false
      },
      {
        number: 5,
        buyingPower: 5,
        victoryPoints: 0,
        rubySpace: true,
        end: false
      },
      {
        number: 6,
        buyingPower: 6,
        victoryPoints: 1,
        rubySpace: false,
        end: false
      },
      {
        number: 7,
        buyingPower: 7,
        victoryPoints: 1,
        rubySpace: false,
        end: false
      },
      {
        number: 8,
        buyingPower: 8,
        victoryPoints: 1,
        rubySpace: false,
        end: false
      },
      {
        number: 9,
        buyingPower: 9,
        victoryPoints: 1,
        rubySpace: true,
        end: false
      },
      {
        number: 10,
        buyingPower: 10,
        victoryPoints: 2,
        rubySpace: false,
        end: false
      },
      {
        number: 11,
        buyingPower: 11,
        victoryPoints: 2,
        rubySpace: false,
        end: false
      },
      {
        number: 12,
        buyingPower: 12,
        victoryPoints: 2,
        rubySpace: false,
        end: false
      },
      {
        number: 13,
        buyingPower: 13,
        victoryPoints: 2,
        rubySpace: true,
        end: false
      },
      {
        number: 14,
        buyingPower: 14,
        victoryPoints: 3,
        rubySpace: false,
        end: false
      },
      {
        number: 15,
        buyingPower: 15,
        victoryPoints: 3,
        rubySpace: false,
        end: false
      },
      {
        number: 16,
        buyingPower: 15,
        victoryPoints: 3,
        rubySpace: true,
        end: false
      },
      {
        number: 17,
        buyingPower: 16,
        victoryPoints: 3,
        rubySpace: false,
        end: false
      },
      {
        number: 18,
        buyingPower: 16,
        victoryPoints: 4,
        rubySpace: false,
        end: false
      },
      {
        number: 19,
        buyingPower: 17,
        victoryPoints: 4,
        rubySpace: false,
        end: false
      },
      {
        number: 20,
        buyingPower: 17,
        victoryPoints: 4,
        rubySpace: true,
        end: false
      },
      {
        number: 21,
        buyingPower: 18,
        victoryPoints: 4,
        rubySpace: false,
        end: false
      },
      {
        number: 22,
        buyingPower: 18,
        victoryPoints: 5,
        rubySpace: false,
        end: false
      },
      {
        number: 23,
        buyingPower: 19,
        victoryPoints: 5,
        rubySpace: false,
        end: false
      },
      {
        number: 24,
        buyingPower: 19,
        victoryPoints: 5,
        rubySpace: true,
        end: false
      },
      {
        number: 25,
        buyingPower: 20,
        victoryPoints: 5,
        rubySpace: false,
        end: false
      },
      {
        number: 26,
        buyingPower: 20,
        victoryPoints: 6,
        rubySpace: false,
        end: false
      },
      {
        number: 27,
        buyingPower: 21,
        victoryPoints: 6,
        rubySpace: false,
        end: false
      },
      {
        number: 28,
        buyingPower: 21,
        victoryPoints: 6,
        rubySpace: true,
        end: false
      },
      {
        number: 29,
        buyingPower: 22,
        victoryPoints: 7,
        rubySpace: false,
        end: false
      },
      {
        number: 30,
        buyingPower: 22,
        victoryPoints: 7,
        rubySpace: true,
        end: false
      },
      {
        number: 31,
        buyingPower: 23,
        victoryPoints: 7,
        rubySpace: false,
        end: false
      },
      {
        number: 32,
        buyingPower: 23,
        victoryPoints: 8,
        rubySpace: false,
        end: false
      },
      {
        number: 33,
        buyingPower: 24,
        victoryPoints: 8,
        rubySpace: false,
        end: false
      },
      {
        number: 34,
        buyingPower: 24,
        victoryPoints: 8,
        rubySpace: true,
        end: false
      },
      {
        number: 35,
        buyingPower: 25,
        victoryPoints: 9,
        rubySpace: false,
        end: false
      },
      {
        number: 36,
        buyingPower: 25,
        victoryPoints: 9,
        rubySpace: true,
        end: false
      },
      {
        number: 37,
        buyingPower: 26,
        victoryPoints: 9,
        rubySpace: false,
        end: false
      },
      {
        number: 38,
        buyingPower: 26,
        victoryPoints: 10,
        rubySpace: false,
        end: false
      },
      {
        number: 39,
        buyingPower: 27,
        victoryPoints: 10,
        rubySpace: false,
        end: false
      },
      {
        number: 40,
        buyingPower: 27,
        victoryPoints: 10,
        rubySpace: true,
        end: false
      },
      {
        number: 41,
        buyingPower: 28,
        victoryPoints: 11,
        rubySpace: false,
        end: false
      },
      {
        number: 42,
        buyingPower: 28,
        victoryPoints: 11,
        rubySpace: true,
        end: false
      },
      {
        number: 43,
        buyingPower: 29,
        victoryPoints: 11,
        rubySpace: false,
        end: false
      },
      {
        number: 44,
        buyingPower: 29,
        victoryPoints: 12,
        rubySpace: false,
        end: false
      },
      {
        number: 45,
        buyingPower: 30,
        victoryPoints: 12,
        rubySpace: false,
        end: false
      },
      {
        number: 46,
        buyingPower: 30,
        victoryPoints: 12,
        rubySpace: true,
        end: false
      },
      {
        number: 47,
        buyingPower: 31,
        victoryPoints: 12,
        rubySpace: false,
        end: false
      },
      {
        number: 48,
        buyingPower: 31,
        victoryPoints: 13,
        rubySpace: false,
        end: false
      },
      {
        number: 49,
        buyingPower: 32,
        victoryPoints: 13,
        rubySpace: false,
        end: false
      },
      {
        number: 50,
        buyingPower: 32,
        victoryPoints: 13,
        rubySpace: true,
        end: false
      },
      {
        number: 51,
        buyingPower: 33,
        victoryPoints: 14,
        rubySpace: false,
        end: false
      },
      {
        number: 52,
        buyingPower: 33,
        victoryPoints: 14,
        rubySpace: true,
        end: false
      },
      {
        number: 53,
        buyingPower: 35,
        victoryPoints: 15,
        rubySpace: false,
        end: true
      },
    ])

    const [starterBag] = useState([
      {
        color: "white",
        value: 1,
        img: chipW1,
        effect: false,
        volatile: true,
      },
      {
        color: "white",
        value: 1,
        img: chipW1,
        effect: false,
        volatile: true,
      },
      {
        color: "white",
        value: 1,
        img: chipW1,
        effect: false,
        volatile: true,
      },
      {
        color: "white",
        value: 1,
        img: chipW1,
        effect: false,
        volatile: true,
      },
      {
        color: "white",
        value: 2,
        img: chipW2,
        effect: false,
        volatile: true,
      },
      {
        color: "white",
        value: 2,
        img: chipW2,
        effect: false,
        volatile: true,
      },
      {
        color: "white",
        value: 3,
        img: chipW3,
        effect: false,
        volatile: true,
      },
      {
        color: "green",
        value: 1,
        img: chipG1,
        effect: false,
        volatile: false,
      },
      {
        color: "orange",
        value: 1,
        img: chipO1,
        effect: false,
        volatile: false,
      },
    ])

    let player1Stats = {
      p1GameBag: [
      ...starterBag
    ],
    p1Droplet: 0,
    p1Rattails: 0,
    p1Rubys: 0,
    }

    const [p1BagCurrentRound, setP1BagCurrentRound] = useState([...player1Stats.p1GameBag])
    const [p1PotCurrentRound, setP1PotCurrentRound] = useState([])
    const [p1Exploded, setP1Exploded] = useState(false);
    const [p1Stopped, setP1Stopped] = useState(false);
    const [p1ChipSpace, setP1ChipSpace] = useState(0);

    const chipTopArr = [
      1.475,
      1.37,
      1.59,
      2,
      2.1,
      1.91,
      1.55,
      1.255,
      1.12,
      1.095,
      1.145,
      1.28,
      1.57,
      2.07,
    ]

    const chipLeftArr = [
      1.085,
      0.93,
      0.843,
      0.908,
      1.068,
      1.282,
      1.46,
      1.38,
      1.17,
      0.97,
      0.836,
      0.749,
      0.716,
      0.736,
    ]


    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    let smaller = (width < height) ? width : height
    let chipSize = (smaller < 1000) ? smaller / 13 : 78
    const [menuShow, setMenuShow] = useState((height < 600) ? false : true)
    // Header only shown by default on screen with greater than 600px height
    let centerHeight =0
    let centerWidth = 0
    const [pageTarget, setPageTarget] = useState(1)
    const [pageActive, setPageActive] = useState(1)

    function recalcCenter() {
      if((window.innerHeight > 1000) && (window.innerWidth > 1000)) {
        centerHeight = 500;
        centerWidth = 500;
      } else if (window.innerHeight < window.innerWidth) {
        centerHeight = window.innerHeight / 2;
        centerWidth = window.innerHeight / 2;
      } else {
        centerHeight = window.innerWidth / 2;
        centerWidth = window.innerWidth / 2;
      }
    }
    
    recalcCenter()


    function handleResize() {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
      recalcCenter()
    }

    window.addEventListener('resize', handleResize);


return (
    <StoreContextWrapper.Provider value={{
      checkState,
      scoreTrack,
      width,
      height,
      chipSize,
      centerHeight,
      centerWidth,
      menuShow,
      setMenuShow,
      chipLeftArr,
      chipTopArr,
      pageTarget,
      setPageTarget,
      pageActive,
      setPageActive,
      starterBag,
      player1Stats,
      p1BagCurrentRound,
      setP1BagCurrentRound,
      p1PotCurrentRound,
      setP1PotCurrentRound,
      p1Exploded,
      setP1Exploded,
      p1Stopped,
      setP1Stopped,
      p1ChipSpace,
      setP1ChipSpace,
    }}>
        {children}
    </StoreContextWrapper.Provider>
)
}