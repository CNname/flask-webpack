import React from 'react'
import * as s from './styles.js'
import PropTypes from 'prop-types';

const Hero = (props) => {
return (
  <s.Hero bgImage={props.bgImage}>
  <div>
    <s.Image src={props.image}/>
    <s.Title>{props.title}</s.Title>
    <s.Subtitle>{props.subtitle}</s.Subtitle>
    {props.cta}
  </div>
  </s.Hero>
)
}

Hero.propTypes = {
bgImage: PropTypes.string,
image: PropTypes.string,
title: PropTypes.string,
subtitle: PropTypes.string,
cta: PropTypes.element
}

export default Hero
