import React, {useState, useEffect} from "react";

export default function MyComponent () {
    const [state, setState] = useState("Initial State");

    // Mock Async Function
    const asyncFunc = async () => {
        return Promise.resolve("Update State");
    };

    useEffect(() => {
        const callAsyncFunc = async () => {
            let val = await asyncFunc();
            setState(val)
        }
        callAsyncFunc();
    },[])

    return <div>{state}</div>
}
