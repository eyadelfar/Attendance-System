import React from 'react';
import './TEST.css'

const ImageInfo = () => {
  const imageText = 'John Doe\nAdmin John Doe Admin';
  const imageDescription = 'The image appears to be a white rectangle with a blue background and a profile picture of a man in the center. The man is smiling and has a beard. There is a name tag, "John Doe," written underneath the...';

  return (
    <div className="image-info-container">
      <div className="image-text">
        {imageText.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="image-description">
        {imageDescription}
      </div>
    </div>
  );
};

export default ImageInfo;