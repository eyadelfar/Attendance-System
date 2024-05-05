import React from 'react';
import './TEST.css'

const ImageInfo = () => {
  const imageText = 'John Doe\nAdmin John Doe Admin';
  const imageDescription = 'The image appears to be a white rectangle with a blue background and a profile picture of a man in the center. The man is smiling and has a beard. There is a name tag, "John Doe," written underneath the...';

  return (
    <div className="image-info-container">
      <iframe 
        title="gp dashboard"
        width="1140" 
        height="541.25" 
        src="https://app.powerbi.com/reportEmbed?reportId=15bb7554-7f5e-47d6-8a94-f5966c168e5c&autoAuth=true&ctid=aadc0e0a-65ee-471a-99a1-9f86faecbaed" 
        frameborder="0" 
        allowFullScreen="true">
        </iframe>
    </div>
  );
};

export default ImageInfo;