import React from 'react';

type OnOffType = {
    turnOn: boolean
    setOn:(value:boolean) => void
}

export const OnOff = (props: OnOffType) => {

    const onClickHandler = (value: boolean) => {
        props.setOn(value)
    }

    const onStyle = {
        display: 'inline-block',
        height: '30px',
        width: '30px',
        border: '1px solid black',
        padding: '3px 5px',
        margin: '2px',
        background: props.turnOn ? 'lightGreen' : 'lightGrey',
    }
    const offStyle = {
        display: 'inline-block',
        height: '30px',
        width: '30px',
        border: '1px solid black',
        padding: '3px 5px',
        margin: '2px',
        background: props.turnOn ? 'lightGrey' : 'red',
    }
    const indicatorStyle = {
        display: 'inline-block',
        height: '30px',
        width: '30px',
        border: '1px solid black',
        borderRadius: '50%',
        padding: '3px 10px',
        margin: '2px',
        color: props.turnOn ? 'black' : 'white',
        background: props.turnOn ? 'lightGreen' : 'red'
    }

    return (
        <div>
            <div
                style={onStyle}
                onClick={() => onClickHandler(true)}>On</div>
            <div
                style={offStyle}
                onClick={() => onClickHandler(false)}>Off</div>
            <div style={indicatorStyle}
            >ind</div>
        </div>
    )
}