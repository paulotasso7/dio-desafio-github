import React from 'react';
import './SlideButton.scss'

const SlideButton = ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span>
     \/
    </span>
  </button>
);

export default SlideButton;