import React, { useEffect, useState } from 'react'

const PhotoCounter = () => {
    const [photoView, setPhotoView] = useState(0);
    const [ message, setMessage] = useState(' ');

    useEffect(() => {
        setMessage(`photo has been viewed ${photoView} times`);
        return () => console.log(`the component is being removed`);
    },[photoView])

  return (
    <div>
        <p>{message}</p>
        <button onClick={() => setPhotoView(photoView+1)}>View Photo</button>
    </div>
  )
}

export default PhotoCounter