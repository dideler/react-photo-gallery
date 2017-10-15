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

  handleClick = () => {
    this.setState(toggleHidden);
  };

  handlePrevClick = () => {
    this.setState(rotateImage(-1));
  };

  handleNextClick = () => {
    this.setState(rotateImage(+1));
  };

  render() {
    const { currentImage, currentCaption, hidden } = this.state;
    return (
      <div
        className="ImageGallery"
        style={{ display: hidden ? 'none' : 'block' }}
      >
        <span className="ModalClose" onClick={this.handleClick}>
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
          <ThumbnailViewer images={this.state.images} />
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

class ThumbnailViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.images.map(function(image, index) {
          // TODO: calculate Thumbnail width (up to a max number of thumbnails)
          return <Thumbnail src={image.src} key={index} />;
        })}
      </div>
    );
  }
}

function Thumbnail({ src }) {
  return <img src={src} alt="Thumbnail in gallery" style={{ width: '25%' }} />;
}
