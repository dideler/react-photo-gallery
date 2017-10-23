import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from 'components/Thumbnail';
import './ThumbnailViewer.css';

function calculateWidth(numThumbnails, maxThumbnails = 4) {
  const minWidth = 100 / maxThumbnails;
  const width = 100 / numThumbnails;
  return Math.max(minWidth, width);
}

export default function ThumbnailViewer({ images, currentImage, clickAction }) {
  const width = calculateWidth(images.length);
  return (
    <div className="ThumbnailViewer">
      {images.map(function(image, index) {
        return (
          <Thumbnail
            src={image.src}
            key={index}
            width={width}
            selected={currentImage === image.src}
            clickAction={clickAction}
          />
        );
      })}
    </div>
  );
}

ThumbnailViewer.propTypes = {
  images: PropTypes.array.isRequired,
  currentImage: PropTypes.string,
  clickAction: PropTypes.func,
};
