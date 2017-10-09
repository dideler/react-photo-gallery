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
            startingImage={this.props.src}
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

function toggleHidden(state) {
  return { hidden: !state.hidden };
}

export class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: props.startingImage,
      hidden: props.hidden,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(toggleHidden);
  }

  handleClick = () => {
    this.setState(toggleHidden);
  };

  render() {
    return (
      <div
        className="ImageGallery"
        style={{ display: this.state.hidden ? 'none' : 'block' }}
      >
        <span className="ModalClose" onClick={this.handleClick}>
          &times;
        </span>
        <img className="ModalImage" src={this.state.currentImage} />
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
