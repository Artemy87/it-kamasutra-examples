import {useState} from "react";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

type UncontrolledStarType = {
    selected: boolean
    setStar: (value:RatingType) => void
    value:RatingType
}

export const UncontrolledRating = () => {

    const [star, setStar] = useState<RatingType>(0)

    return (
        <div>
            <Star selected={star >= 1} setStar={ setStar } value={1} />
            <Star selected={star >= 2} setStar={ setStar } value={2} />
            <Star selected={star >= 3} setStar={ setStar } value={3} />
            <Star selected={star >= 4} setStar={ setStar } value={4} />
            <Star selected={star === 5} setStar={ setStar } value={5} />
        </div>
    )
}

function Star(props: UncontrolledStarType) {
    return (
        <span onClick={() => props.setStar(props.value) }>
            {props.selected
                ? 'star '
                : <span style={{opacity: '0.2'}}>star </span>}
        </span>
    )
}
