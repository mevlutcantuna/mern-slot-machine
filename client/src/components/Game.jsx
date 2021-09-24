import React, { useState,useEffect } from 'react';
import "../styles/Game.scss";

import { useDispatch, useSelector } from 'react-redux';

import Reel1 from "../assets/reel1.png"
import Reel2 from "../assets/reel2.png"
import Reel3 from "../assets/reel3.png"

import { incOrDescCoin } from '../store/actions/auth';
import { errorMessage } from '../utils/notifications';

import { slots1,slots2,slots3 } from '../utils/slots';

const Game = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user);
    const loading = useSelector(state => state.auth.loading)
    const error = useSelector(state => state.auth.error);
    const [gameStart,setGameStart] = useState(false);

    const [s1,setS1] = useState()
    const [s2,setS2] = useState();
    const [s3,setS3] = useState();

    const [slotValue1,setSlotValue1] = useState({backgroundImage: `url(${Reel1})`,backgroundRepeat:"no-repeat"});
    const [slotValue2,setSlotValue2] = useState({backgroundImage: `url(${Reel2})`,backgroundRepeat:"no-repeat"});
    const [slotValue3,setSlotValue3] = useState({backgroundImage: `url(${Reel3})`,backgroundRepeat:"no-repeat"});

    const play = () => {
        // when work slot machine,it takes 1 coin
        dispatch(incOrDescCoin(user?.coins-1,user?._id))

        // if incOrDescCoin func does not work correcty,it shows error message
        if((!loading && !error?.split("").length > 0)){
            setGameStart(true)
        }else{
            return errorMessage("Something is Wrong...")
        }

        // it gives chosen fruit 
        setS1(Math.floor(Math.random()*8))
        setS2(Math.floor(Math.random()*8))
        setS3(Math.floor(Math.random()*8))

        // when machine working, shows animation for 3 seconds
        setTimeout(() => {
            setGameStart(false)
        },3000)
    }

    useEffect(() => {

        //dispatch(getUser())

        // it shows chosen fruit
        if(gameStart){
            setSlotValue1({backgroundImage: `url(${Reel1})`,backgroundRepeat:"no-repeat",backgroundPosition:`0 -${90*s1}px`})
            setSlotValue2({backgroundImage: `url(${Reel2})`,backgroundRepeat:"no-repeat",backgroundPosition:`0 -${90*s2}px`})
            setSlotValue3({backgroundImage: `url(${Reel3})`,backgroundRepeat:"no-repeat",backgroundPosition:`0 -${90*s3}px`})        
        }

        // win or lose conditions
        if(slots1[s1] === "cherry" && slots2[s2] === "cherry" && slots3[s3] === "cherry"){
            !gameStart && dispatch(incOrDescCoin(user?.coins+50,user?._id,50,gameStart))
        }else if(slots1[s1] === "cherry" && slots2[s2] === "cherry" && slots3[s3] !== "cherry"){
            !gameStart &&  dispatch(incOrDescCoin(user?.coins+40,user?._id,40,gameStart))
        }else if(slots1[s1] !== "cherry" && slots2[s2] === "cherry" && slots3[s3] === "cherry"){
            !gameStart &&  dispatch(incOrDescCoin(user?.coins+40,user?._id,40,gameStart))
        }else if(slots1[s1] === "apple" && slots2[s2] === "apple" && slots3[s3] === "apple"){//
            !gameStart &&  dispatch(incOrDescCoin(user?.coins+20,user?._id,20,gameStart))
        }else if(slots1[s1] === "apple" && slots2[s2] === "apple" && slots3[s3] !== "cherry"){
            !gameStart &&  dispatch(incOrDescCoin(user?.coins+10,user?._id,10,gameStart))
        }else if(slots1[s1] !== "apple" && slots2[s2] === "apple" && slots3[s3] === "apple"){
            !gameStart &&  dispatch(incOrDescCoin(user?.coins+10,user?._id,10,gameStart))
        }else if(slots1[s1] === "banana" && slots2[s2] === "banana" && slots3[s3] === "banana"){//
            !gameStart &&  dispatch(incOrDescCoin(user?.coins+15,user?._id,15,gameStart))
        }else if(slots1[s1] === "banana" && slots2[s2] === "banana" && slots3[s3] !== "banana"){
            !gameStart &&  dispatch(incOrDescCoin(user?.coins+5,user?._id,5,gameStart))
        }else if(slots1[s1] !== "banana" && slots2[s2] === "banana" && slots3[s3] === "banana"){
            !gameStart &&  dispatch(incOrDescCoin(user?.coins+5,user?._id,5,gameStart))
        }else if(slots1[s1] === "lemon" && slots2[s2] === "lemon" && slots3[s3] === "lemon"){
            !gameStart &&  dispatch(incOrDescCoin(user?.coins+3,user?._id,3,gameStart))
        } 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[gameStart,s1,s2,s3]);

    return (
        <div className="game">
            <h1 className="game__title">Spin</h1>
            <div className="game__slots">
            <div style={!gameStart ? slotValue1 : {}} className={`game__slots__slot ${gameStart && "slot1-active"}`}></div>
                <div  style={!gameStart ? slotValue2 : {}} className={`game__slots__slot ${gameStart && "slot2-active"}`}></div>
                <div  style={!gameStart ? slotValue3 : {}} className={`game__slots__slot ${gameStart && "slot3-active"}`}></div>
            </div>
            <button disabled={gameStart} onClick={play} className="game__play">{gameStart ? "spinning" : "play"}</button>
        </div> 
    )
}

export default Game; 