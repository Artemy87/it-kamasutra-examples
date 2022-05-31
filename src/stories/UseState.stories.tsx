import React, {useEffect, useState} from "react";

export default {
    title: 'useState demo',
}

export const Example1 = () => {
    console.log('Example1')

    // const [hours, setHours] = useState(new Date().getHours())
    // const [minutes, setMinutes] = useState(new Date().getMinutes())
    // const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        console.log('useEffect')
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    return <>
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </>
}