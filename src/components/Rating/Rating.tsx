type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
type StarPropsType = {
    selected: boolean
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value >= 1} />
            <Star selected={props.value >= 2} />
            <Star selected={props.value >= 3} />
            <Star selected={props.value >= 4} />
            <Star selected={props.value >= 5} />
        </div>
    )
}

function Star(props: StarPropsType) {
    return props.selected
        ? <span><b>star</b> </span>
        : <span>star </span>
}
