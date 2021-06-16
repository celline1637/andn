import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Routes from './Routes';
import GlobalStyle from './style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import media from './style/media';

ReactDOM.render(
  <>
    <ThemeProvider theme={{ ...theme, ...media }}>
      <GlobalStyle />
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
