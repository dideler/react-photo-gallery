import React from 'react';
import PropTypes from 'prop-types';

import './Thumbnail.css';

export default function Thumbnail({ src, width, selected, clickAction }) {
  return (
    <img
      src={src}
      alt="Thumbnail in gallery"
      className={`Thumbnail ${selected && 'ThumbnailSelected'}`}
      style={{ width: `${width}%` }}
      onClick={clickAction}
    />
  );
}
