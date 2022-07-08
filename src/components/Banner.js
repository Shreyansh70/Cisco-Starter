import React from 'react'
import './Banner.css'
function Banner(props) {
  return (
    <div className="Banner">
      <h1>{props.bannerText}</h1>
    </div>
  );
}

export default Banner