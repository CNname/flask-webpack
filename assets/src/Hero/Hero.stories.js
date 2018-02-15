import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'


import Hero from '.'

import image from '../../images/dog/no-idea.jpg';
import bgimage from '../../images/dog/no-idea.jpg';

storiesOf('Hero', module)
.add('default',
  withInfo()(() => {
    return (<Hero
      image={image}
      bgImage={bgimage}
      title={'A Design systems conference'}
      subtitle={'MARCH 14th – 15th, 2018'}
    />)
}))
