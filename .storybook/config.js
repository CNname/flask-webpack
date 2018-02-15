import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure } from '@storybook/react';
import 'loki/configure-react';
import { setConsoleOptions } from '@storybook/addon-console';

const req = require.context('../assets/src', true, /\.stories\.js$/)

setConsoleOptions({
  panelExclude: [],
})

setConsoleOptions({
  panelExclude: [],
})

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
