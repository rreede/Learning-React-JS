import GoalItem from './GoalItem';

function GoalList(props) {
    return (
        <>
        <GoalItem id='1' title='First Goal' text="I'm the first Goal" />

        <GoalItem id='2' title='Second Goal' text="I'm the second Goal" />

        <GoalItem id='3' title='Third Goal' text="I'm the Third Goal" />
        </>
    )
}

export default GoalList;