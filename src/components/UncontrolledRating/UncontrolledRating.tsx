import {useState} from "react";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

type UncontrolledStarType = {
    selected: boolean
    setStar: (value:RatingType) => void
}

type UncontrolledRatingType = {
    defaultValue?: RatingType
    onChange: (value: RatingType) => void
}

export const UncontrolledRating = (props: UncontrolledRatingType) => {

    const [star, setStar] = useState<RatingType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={star >= 1} setStar={ () => {setStar(1); props.onChange(1)}}/>
            <Star selected={star >= 2} setStar={ () => {setStar(2); props.onChange(2) }} />
            <Star selected={star >= 3} setStar={ () => {setStar(3); props.onChange(3) }} />
            <Star selected={star >= 4} setStar={ () => {setStar(4); props.onChange(4) }} />
            <Star selected={star === 5} setStar={ () => {setStar(5); props.onChange(5) }} />
        </div>
    )
}

function Star(props: UncontrolledStarType) {
    return (
        <span onClick={() => props.setStar }>
            {props.selected
                ? 'star '
                : <span style={{opacity: '0.2'}}>star </span>}
        </span>
    )
}
