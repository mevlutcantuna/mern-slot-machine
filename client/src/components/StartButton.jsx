import React from 'react';
import "../styles/startButton.scss";

import { getUser, incOrDescCoin } from "../store/actions/auth";
import { useDispatch,useSelector } from 'react-redux';
import { errorMessage } from '../utils/notifications';


const StartButton = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)

    const startGame = () => {
        if(user?.coins === 0) {
            return errorMessage("You don't have Coins...");
        }

        dispatch(incOrDescCoin(user?.coins - 20,user?._id));
        dispatch(getUser())
    }

    return (
        <div className="start">
            <button className="start__button" onClick={startGame}>Start Game</button>
            <div className="start__summary">Starting Price is 20 Coins...</div>
        </div>
    )
}

export default StartButton
