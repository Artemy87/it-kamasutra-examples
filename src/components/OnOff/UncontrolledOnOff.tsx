import React, {useState} from 'react';

export const UncontrolledOnOff = () => {

    const [on, setOn] = useState(false);

    const onClickHandler = (value: boolean) => {
        setOn(value)
    }

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
