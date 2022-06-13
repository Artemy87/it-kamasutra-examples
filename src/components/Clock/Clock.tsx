import {FC, useEffect, useState} from "react";
import styles from './Clock.module.css';

export const Clock:FC = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {clearInterval(intervalId)}
    }, [])

    const formatClock = (num: number) => num < 10 ? `0${num}` : num;

    return (
        <div className={styles.clock}>
            <span>{formatClock(date.getHours())}</span>
            :
            <span>{formatClock(date.getMinutes())}</span>
            :
            <span>{formatClock(date.getSeconds())}</span>
        </div>
    )
}