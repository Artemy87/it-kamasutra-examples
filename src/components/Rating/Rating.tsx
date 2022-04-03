export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected: boolean
    setRating: (number:RatingType)=>void
    value: RatingType
}

type RatingPropsType = {
    rating: RatingType
    setRating: (number:RatingType)=>void
}

export const Rating = (props: RatingPropsType) => {
    return (
        <div>
            <Star selected={props.rating >= 1} setRating={props.setRating} value={1} />
            <Star selected={props.rating >= 2} setRating={props.setRating} value={2} />
            <Star selected={props.rating >= 3} setRating={props.setRating} value={3} />
            <Star selected={props.rating >= 4} setRating={props.setRating} value={4} />
            <Star selected={props.rating >= 5} setRating={props.setRating} value={5} />
        </div>
    )
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => { props.setRating(props.value) }}>
            { props.selected
                ? 'star '
                : <span style={{opacity: '0.2'}}> star </span> }
        </span>
    )
}
