import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import config from '../../config.js';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};

  .sideBarUL li a {
    color: ${({ theme }) => theme.colors.text};
  }

  .sideBarUL .item > a:hover {
    background-color: #FEDD00;
    color: #fff !important;
    fill: #fff !important;
  }

  @media only screen and (max-width: 1023px) {
    justify-content: center;
  }
`;

const Content = styled('main')`
  display: flex;
  align-items: center;

  padding-top: 2.5rem;
  background: ${({ theme }) => theme.colors.background};

  div {
    max-width: 700px;
  }

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 699px) {
    margin: 0 !important;
    padding: 0 !important;
    max-width: 100%;
  }
`;

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <div className={'hiddenMobile'}>
          <Sidebar location={location} />
        </div>
        {/*{config.sidebar.title ? (*/}
        {/*  <div*/}
        {/*    className={'sidebarTitle sideBarShow'}*/}
        {/*    dangerouslySetInnerHTML={{ __html: config.sidebar.title }}*/}
        {/*  />*/}
        {/*) : null}*/}
        <Content>
          <div>
            {children}
          </div>
        </Content>
        <div className={'hiddenTablet'}>
          <RightSidebar location={location} />
        </div>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
