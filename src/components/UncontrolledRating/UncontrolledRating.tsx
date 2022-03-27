import SuperButton from "../../SuperButton/SuperButton";
import {useState} from "react";

// type UncontrolledRatingType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5
// }


type UncontrolledStarType = {
    selected: boolean
}

export function UncontrolledRating() {

    const [star, setStar] = useState<number>(0)

    const onclickHandler = (number:number) => {
        setStar(number)
    }

    return (
        <div>
            <div>
                <Star selected={star >= 1}/>
                <SuperButton onClick={() => onclickHandler(1)}>1</SuperButton>
            </div>
            <div>
                <Star selected={star >= 2}/>
                <SuperButton onClick={() => onclickHandler(2)}>2</SuperButton>
            </div>
            <div>
                <Star selected={star >= 3}/>
                <SuperButton onClick={() => onclickHandler(3)}>3</SuperButton>
            </div>
            <div>
                <Star selected={star >= 4}/>
                <SuperButton onClick={() => onclickHandler(4)}>4</SuperButton>
            </div>
            <div>
                <Star selected={star >= 5}/>
                <SuperButton onClick={() => onclickHandler(5)}>5</SuperButton>
            </div>
        </div>
    )
}

function Star(props: UncontrolledStarType) {
    return props.selected
        ? <span> star </span>
        : <span style={{opacity: '0.2'}}>star </span>
}
