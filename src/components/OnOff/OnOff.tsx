import React, {useState} from 'react';

type OnOffType = {
    // light: boolean
    // changeLight: (isOn: boolean) => void
    // on:boolean
}

function OnOff(props: OnOffType) {

    const [on, setOn] = useState(false);

    const onStyle = {
        display: 'inline-block',
        height: '30px',
        width: '30px',
        border: '1px solid black',
        padding: '3px 5px',
        margin: '2px',
        background: on ? 'lightGreen' : 'lightGrey',
    }
    const offStyle = {
        display: 'inline-block',
        height: '30px',
        width: '30px',
        border: '1px solid black',
        padding: '3px 5px',
        margin: '2px',
        background: on ? 'lightGrey' : 'red',
    }
    const indicatorStyle = {
        display: 'inline-block',
        height: '30px',
        width: '30px',
        border: '1px solid black',
        borderRadius: '50%',
        padding: '3px 10px',
        margin: '2px',
        color: on ? 'black' : 'white',
        background: on ? 'lightGreen' : 'red'
    }

    const onClickHandler = (v: boolean) => {
        setOn(v)
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

export default OnOff;