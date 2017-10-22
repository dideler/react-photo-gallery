import React from 'react';
import PropTypes from 'prop-types';

import './Thumbnail.css';

export default function Thumbnail({ src, alt, width, selected, clickAction }) {
  const selectedStyle = selected ? 'ThumbnailSelected' : '';
  return (
    <img
      src={src}
      alt={alt}
      className={`Thumbnail ${selectedStyle}`}
      style={{ width: `${width}%` }}
      onClick={clickAction}
    />
  );
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  selected: PropTypes.bool,
  clickAction: PropTypes.func,
};

Thumbnail.defaultProps = {
  alt: 'Thumbnail in gallery',
};
