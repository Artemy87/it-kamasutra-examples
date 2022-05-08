import exp from "constants";
import React, {useState} from "react";

export default {
    title: 'React.memo demo',
}

const NewMessagesCounter = (props:any) => {
    return <div>{props.count}</div>
}


const Users = (props:{users: Array<string>}) => {
    console.log('users secret')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const NewMessagesCounterMemo = React.memo(NewMessagesCounter)
const UsersMemo = React.memo(Users)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dymich', 'Valera', 'Artem'])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessagesCounterMemo count={counter}/>
        <UsersMemo users={users} />
    </>
}