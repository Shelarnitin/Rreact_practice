import React, { useRef, useState } from 'react'

function BirthdayGuestBook() {
    const [greetings, setGreetings] = useState([]);
    const inputRef = useRef();

    const addGreeting = () => {
        const newGreeting = {
            id: greetings.length + 1,
            text: inputRef.current.value,
        }
        setGreetings([...greetings, newGreeting]);
        inputRef.current.value = ''
    }

  return (
    <div>
        <h1>Virtual Birthday Party</h1>
        <label htmlFor="greetingInput">Write Greeting :</label>
        <input type="text" id='greetingInput' ref={inputRef} placeholder='Write Greeting...'/>

        <button onClick={addGreeting}>Add Greeting</button>

        <div>
            {greetings.map((greet, index) => (
                <p key={index}>{greet.text}</p>
            ))}
        </div>
    </div>
    
  )
}

export default BirthdayGuestBook