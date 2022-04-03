import React from 'react';
import SuperButton from "../../SuperButton/SuperButton";

type OnOffType = {
    switchOn: boolean
    setSwitchOn:(value:boolean) => void

}

export const OnOff = (props: OnOffType) => {

    const onStyle = {
        // display: 'inline-block',
        // border: '1px solid black',
        // borderRadius: '5px',
        // width: '50px',
        // padding: '7px 10px',
        // marginRight: '3px',
        background: props.switchOn ? 'lightGreen' : 'lightGrey',
    }
    const offStyle = {
        // display: 'inline-block',
        // border: '1px solid black',
        // borderRadius: '5px',
        // width: '50px',
        // padding: '7px 10px',
        // marginRight: '3px',
        background: props.switchOn ? 'lightGrey' : 'red',
    }
    const indicatorStyle = {
        display: 'inline-block',
        border: '1px solid black',
        borderRadius: '50%',
        padding: '10px 10px',
        color: props.switchOn ? 'black' : 'white',
        background: props.switchOn ? 'lightGreen' : 'red'
    }

    return (
        <div>
            <SuperButton style={onStyle}
                onClick={() => props.setSwitchOn(true)}>On</SuperButton>
            <SuperButton style={offStyle}
                onClick={() => props.setSwitchOn(false)}>Off</SuperButton>
            <div style={indicatorStyle}>Indicator</div>
        </div>
    )
}