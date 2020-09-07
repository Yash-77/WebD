import React, { useState } from 'react';

function Button(props) {
    return <button onClick={props.incrementCounter}> Click me! </button>
}

function Counter(props) {
    return <p> Count = {props.value} </p>
}

export default function HomePage() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => { setCounter(counter + 1); };
    return (
        <>
            <p style={{color:"rainbow"}} > Hello World </p>
            <Button incrementCounter={incrementCounter} />
            <Counter value={counter} />
        </>
    )
}