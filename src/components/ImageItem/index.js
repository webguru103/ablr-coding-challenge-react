import React from 'react';
import { Col, Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import './style.scss';

const ImageItem = ({ data }) => {
  return (
    <Col xs={12} md={6} className="Image-item">
      <div className="Image-item__container">
        <LazyLoad height={330} once>
          <Image rounded src={data.photo} className="Image-item__image" />
        </LazyLoad>
        <div className="Image-item__content">
          <Image className="Image-item__content-logo" roundedCircle src={data.logo} />
          <div className="Image-item__content-detail">
            <div className="Image-item__content-title text-left">
              {data.title}
            </div>
            <div className="Image-item__content-location text-left">
              {data.location}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ImageItem;
