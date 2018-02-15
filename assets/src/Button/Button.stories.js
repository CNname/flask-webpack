/* Helpful imports */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

/* The component to document */
import Button from '.';

storiesOf('Button', module)
  .add('index',
    withInfo()(() => {
      return (
        <div>
            <Button inverted onClick={function(){ alert('You clicked!')}}>I am just a button</Button>
        </div>
      )
  }))
