import React, { useRef, useState } from 'react'
import './TicTacToe.css'


let Data = ["", "", "", "", "", "", "", "", ""]

const TicTacTo = () => {
    let [count, setCount] = useState(0)
    let [lock, setlock] = useState(false)
    let titleRef = useRef(null)
    let Box1 = useRef(null)
    let Box2 = useRef(null)
    let Box3 = useRef(null)
    let Box4 = useRef(null)
    let Box5 = useRef(null)
    let Box6 = useRef(null)
    let Box7 = useRef(null)
    let Box8 = useRef(null)
    let Box9 = useRef(null)
    let box_array = [Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8, Box9]
    let toggle = (e, num) => {
        if (lock || Data[num] !== "") {
            return 0
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `X`
            Data[num] = "X";
            setCount(++count)
        } else {
            e.target.innerHTML = `O`
            Data[num] = "O";
            setCount(++count)

        }
        checkWin()

    }
    const reset = () => {
        setlock(false)
        Data = ["", "", "", "", "", "", "", "", ""]
        titleRef.current.innerHTML = 'Tic Tac Toe Game <span >React</span>'
        box_array.map((e) => {
            e.current.innerHTML = "";
        })

    }
    let checkWin = () => {
        if (Data[0] === Data[1] && Data[1] === Data[2] && Data[2] !== "") {
            won(Data[2])
        } else if (Data[3] === Data[4] && Data[4] === Data[5] && Data[5] !== "") {
            won(Data[5])
        } else if (Data[6] === Data[7] && Data[7] === Data[8] && Data[8] !== "") {
            won(Data[8])
        }
        else if (Data[0] === Data[3] && Data[3] === Data[6] && Data[6] !== "") {
            won(Data[6])
        }
        else if (Data[1] === Data[4] && Data[4] === Data[7] && Data[7] !== "") {
            won(Data[7])
        }
        else if (Data[2] === Data[5] && Data[5] === Data[8] && Data[8] !== "") {
            won(Data[8])
        }
        else if (Data[0] === Data[4] && Data[4] === Data[8] && Data[8] !== "") {
            won(Data[8])
        }
        else if (Data[2] === Data[4] && Data[4] === Data[6] && Data[6] !== "") {
            won(Data[6])
        }
    }
    let won = (winner) => {
        setlock(true)
        if (winner === "X") {
            titleRef.current.innerHTML = `Congratulations${" " + winner + " "} Winner`;
        } else {
            titleRef.current.innerHTML = `Congratulations${" " + winner + " "} Winner`;
        }
        console.log("win")
    }
    return (
        <div className='container' style={{

        }}>
            {/* <img src={bgimg} alt="" /> */}
            <h1 className='title' ref={titleRef}> Tic Tac Toe Game <span >React</span></h1>
            <div className="board" >
                <div className="roe1">
                    <div className="boxes" ref={Box1} onClick={(e) => toggle(e, 0)}></div>
                    <div className="boxes" ref={Box2} onClick={(e) => toggle(e, 1)}></div>
                    <div className="boxes" ref={Box3} onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className="roe2">
                    <div className="boxes" ref={Box4} onClick={(e) => toggle(e, 3)}></div>
                    <div className="boxes" ref={Box5} onClick={(e) => toggle(e, 4)}></div>
                    <div className="boxes" ref={Box6} onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className="roe3">
                    <div className="boxes" ref={Box7} onClick={(e) => toggle(e, 6)}></div>
                    <div className="boxes" ref={Box8} onClick={(e) => toggle(e, 7)}></div>
                    <div className="boxes" ref={Box9} onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button className='resetBtn' onClick={reset}>Reset</button>
        </div>
    )
}

export default TicTacTo
