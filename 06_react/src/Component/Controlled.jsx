import React, { useState } from "react";

function Controlled () {
    const [name, setName] =useState('')


    function handleSubmit(e){
        e.preventDefault();
        alert(name)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </>
    )


}

export default Controlled