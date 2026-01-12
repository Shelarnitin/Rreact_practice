import React, { useEffect, useState } from 'react'

const PhotoCount = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const addedPhotos = ['sunset.jpg', 'mountain.png']
    setPhotos(addedPhotos)
  }, [])

  return (
    <div>
      <h1>Photo Count: {photos.length}</h1>
      <button onClick={() => alert(`Total Photos: ${photos.length}`)}>
        Show Count
      </button>
    </div>
  )
}

export default PhotoCount
