import SuperButton from "../../SuperButton/SuperButton";
import {useState} from "react";

// type UncontrolledRatingType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5
// }


type UncontrolledStarType = {
    selected: boolean
}

export const UncontrolledRating = () => {

    const [star, setStar] = useState<number>(0)

    const onClickHandler = (number:number) => {
        setStar(number)
    }

    return (
        <div>
            <div>
                <Star selected={star >= 1}/>
                <SuperButton onClick={() => onClickHandler(1)}>1</SuperButton>
            </div>
            <div>
                <Star selected={star >= 2}/>
                <SuperButton onClick={() => onClickHandler(2)}>2</SuperButton>
            </div>
            <div>
                <Star selected={star >= 3}/>
                <SuperButton onClick={() => onClickHandler(3)}>3</SuperButton>
            </div>
            <div>
                <Star selected={star >= 4}/>
                <SuperButton onClick={() => onClickHandler(4)}>4</SuperButton>
            </div>
            <div>
                <Star selected={star === 5}/>
                <SuperButton onClick={() => onClickHandler(5)}>5</SuperButton>
            </div>
        </div>
    )
}

function Star(props: UncontrolledStarType) {
    return props.selected
        ? <span> star </span>
        : <span style={{opacity: '0.2'}}>star </span>
}
