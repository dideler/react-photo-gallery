import React from 'react';
import PropTypes from 'prop-types';

import './ImageGallery.css';

export default function withGallery(ImageComponent, store) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.images = store;
      this.images.push(props);
      this.state = {
        currentImage: null,
        hidden: true,
      };
    }

    handleImageClick = () => {
      this.setState(currentImage(this.images));
      this.setState(toggleHidden);
    };

    render() {
      return (
        <div>
          <ImageComponent onClick={this.handleImageClick} {...this.props} />
          <ImageGallery
            images={this.images}
            startingImage={this.props.src}
            startingCaption={this.props.caption}
            hidden={this.state.hidden}
          />
        </div>
      );
    }
  };
}

// Declare state changes separately from component class. More functional. Easier to test.
// https://twitter.com/dan_abramov/status/824308413559668744/photo/
function currentImage(images) {
  return (state, props) => ({
    currentImage: images.find(image => image.src === props.src),
  });
}

function selectImage(imageSrc) {
  return state => {
    const img = state.images.find(image => imageSrc.endsWith(image.src));
    return {
      currentImage: img.src,
      currentCaption: img.caption,
    };
  };
}

function rotateImage(position) {
  // TODO
}

function toggleHidden(state) {
  return { hidden: !state.hidden };
}

export class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      currentImage: props.startingImage,
      currentCaption: props.startingCaption,
      hidden: props.hidden,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(toggleHidden);
  }

  handleCloseClick = () => {
    this.setState(toggleHidden);
  };

  handlePrevClick = () => {
    this.setState(rotateImage(-1));
  };

  handleNextClick = () => {
    this.setState(rotateImage(+1));
  };

  handleThumbnailClick = event => {
    this.setState(selectImage(event.target.src));
  };

  render() {
    const { currentImage, currentCaption, hidden } = this.state;
    return (
      <div
        className="ImageGallery"
        style={{ display: hidden ? 'none' : 'block' }}
      >
        <span className="ModalClose" onClick={this.handleCloseClick}>
          &times;
        </span>

        <div className="ModalImageContainer">
          <figure>
            <img
              className="ModalImage"
              src={currentImage}
              alt={this.props.alt}
            />

            {currentCaption && (
              <figcaption className="ModalImageCaption">
                {currentCaption}
              </figcaption>
            )}
          </figure>
          <a className="prev" onClick={this.handlePrevClick}>
            ❮
          </a>
          <a className="next" onClick={this.handleNextClick}>
            ❯
          </a>
          <ThumbnailViewer
            images={this.state.images}
            currentImage={currentImage}
            clickAction={this.handleThumbnailClick}
          />
        </div>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  startingImage: PropTypes.string.isRequired,
  hidden: PropTypes.bool,
};

ImageGallery.defaultProps = {
  hidden: true,
};

// TODO: prop-types
class ThumbnailViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // TODO: Extract func outside component
  calculateWidth(numThumbnails, maxThumbnails = 4) {
    const minWidth = 100 / maxThumbnails;
    const width = 100 / numThumbnails;
    return Math.max(minWidth, width);
  }

  render() {
    const { images, currentImage, clickAction } = this.props;
    const width = this.calculateWidth(images.length);

    // TODO: Consider setting a max-width (e.g. 700px) on div
    return (
      <div className="ThumbnailViewer">
        {this.props.images.map(function(image, index) {
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
}

// TODO: prop-types
function Thumbnail({ src, width, selected, clickAction }) {
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
