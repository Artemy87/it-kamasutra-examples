import React, {FC, useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;

        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 8000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }

        return tempResultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS SECRET')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)
export const HelpsToReactMemo = () => {
    console.log('HelpsMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dymich', 'Valera', 'Artem', 'Katya', 'Sveta'])

    const newArray = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'TS', 'Redux', 'TDD', 'Algorithms',])

    const memoizedAddBook = useMemo(() => {
        console.log(books)
        return () => {
            const newBooks = [...books, 'Databases' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => { //useCallBack ???????????????????? useMemo, ?? ?????????? ?????????????? ????????????????????????.
        console.log(books)
        const newBooks = [...books, 'Databases' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook}/>
    </>
}

type BookSecretType = {
    addBook: () => void
}
const BooksSecret: FC<BookSecretType> = ({addBook}) => {
    console.log('BOOKS SECRET')
    return <button onClick={() => addBook()}>add book</button>
}
const Books = React.memo(BooksSecret)
