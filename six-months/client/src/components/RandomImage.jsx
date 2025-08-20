import React, { useEffect, useState } from 'react';

function RandomImage({ city, className }) {
  const [randomImageUrl, setRandomImageUrl] = useState(null);

  useEffect(() => {
    if (!city) return;

    fetch(`http://localhost:5000/api/images/${city}`)
      .then(res => res.json())
      .then(images => {
        if (!images || images.length === 0) {
          console.warn('No images found for this city.');
          return;
        }

        const randomFile = images[Math.floor(Math.random() * images.length)];
        const imageUrl = `http://localhost:5000/trip-images/${city}/${randomFile}`;
        setRandomImageUrl(imageUrl);
      })
      .catch(err => {
        console.error('Error fetching image list:', err);
      });
  }, [city]);

  return (
    <div>
      {randomImageUrl ? (
        <img
          className={className}
          src={randomImageUrl}
          alt={`Random from ${city}`}
          style={{ width: '100%', maxWidth: '600px' }}
        />
      ) : (
        <p>Loading a random image from {city}...</p>
      )}
    </div>
  );
}

export default RandomImage;