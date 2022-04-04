import React, {useState} from 'react';
import SuperButton from "../../SuperButton/SuperButton";

export const UncontrolledOnOff = () => {

    const [on, setOn] = useState(false);

    const onStyle = {
        // display: 'inline-block',
        // border: '1px solid black',
        // borderRadius: '5px',
        // padding: '7px 10px',
        // marginRight: '3px',
        background: on ? 'lightGreen' : 'lightGrey',
    }
    const offStyle = {
        // display: 'inline-block',
        // border: '1px solid black',
        // borderRadius: '5px',
        // padding: '7px 10px',
        // marginRight: '3px',
        background: on ? 'lightGrey' : 'red',
    }
    const indicatorStyle = {
        display: 'inline-block',
        border: '1px solid black',
        borderRadius: '50%',
        padding: '10px 10px',
        color: on ? 'black' : 'white',
        background: on ? 'lightGreen' : 'red'
    }

    const onClickHandler = () => {
        setOn(true)
    }

    const offClickHandler = () => {
        setOn(false)
    }

    return (
        <div>
            <SuperButton style={onStyle} onClick={ onClickHandler }
            >Start
            </SuperButton>
            <SuperButton style={offStyle} onClick={ offClickHandler }
            >Stop
            </SuperButton>
            <div style={indicatorStyle}>Indicator</div>
        </div>
    )
}
