import React, { useEffect, useState } from 'react'

const Gallery = () => {

    const [photo, setPhoto] = useState(0)


    useEffect(() => {
        if(photo > 5){
            alert(`you have ${photo} photo in your portfolio`)
        }
        return() => console.log("your portfolio will be close now")
    },[photo])

  return (
    <div>
        <p>number of photos: {photo}</p>
        <button onClick={() => setPhoto(photo + 1)}>add a photo</button>
    </div>
  )
}

export default Gallery