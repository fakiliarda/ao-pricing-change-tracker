import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const MostVoted = (props) => {
    if (props.voteUsed) {
        return (
            <div>
                <h1>Anecdote with the most votes</h1>
                <Anecdote anecdote={props.anecdote} vote={props.vote}/>
            </div>)
    }
    return (
        <div>
            <h1>No Votes yet</h1>
        </div>
    )
}

const Anecdote = (props) => {
    return (
        <div>
            <p>{props.anecdote}</p>
            <p>has {props.vote} votes</p>
        </div>
    )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf, 0))
    const [voteUsed, setVoteUsed] = useState(false)

    const voteAnecdote = () => () => {
        const copyVotes = [...votes]
        copyVotes[selected] += 1
        setVotes(copyVotes)
        setVoteUsed(true)
    }

    const nextAnecdote = () => () => {
        let randomAnecdote = 0
        do {
            randomAnecdote = Math.floor(Math.random() * props.anecdotes.length)
        } while (randomAnecdote === selected)
        setSelected(randomAnecdote)
    }

    const calculateMostVoted = () => {
        let mostVoted = 0
        const copyVotes = [...votes]
        copyVotes.forEach(vote => {
            if (vote > mostVoted) {
                mostVoted = vote
            }
        })

        return copyVotes.indexOf(mostVoted)
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <Anecdote anecdote={props.anecdotes[selected]} vote={votes[selected]}/>
            <p>
                <Button handleClick={voteAnecdote()} text='vote'/>
                <Button handleClick={nextAnecdote()} text='next anecdote'/>
            </p>
            <MostVoted voteUsed={voteUsed} anecdote={props.anecdotes[calculateMostVoted()]}
                       vote={votes[calculateMostVoted()]}/>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)