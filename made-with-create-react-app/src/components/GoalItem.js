function GoalItem(props) {

return (

    <div>
<span>
            {props.id}
        </span>
        <br/>
        <span>
            {props.title}
        </span>
        <br/>
        <span>
            {props.text}
        </span>
    </div>
)

}

export default GoalItem;