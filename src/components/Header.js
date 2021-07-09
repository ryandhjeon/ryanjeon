import React, { useState } from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import Link from './link';
import Loadable from 'react-loadable';
import config from '../../config.js';
import LoadingProvider from './mdxComponents/loading';
import Sidebar from './sidebar';
import headerImage from '/src/components/images/logo.png'

const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

const NavBarWrapper = styled('div')`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #15171a;
  height: 3rem;
  width: 100%;
  padding: 0 1.5rem;
  border-bottom: 1px solid #3C3C3C;
`

const NavBarBrand = styled('div')`
  display: flex;
  justify-content: center;
  flex: 1;

  @media only screen and (max-width: 1023px) {
    display: flex;
    justify-content: left;
    margin-left: 1.5rem;
  }
`

const MenuIcon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1rem;
  height: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.2rem;
    height: .06rem;
    background: white;
    border-radius: 5px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0deg)'}
    }

    :nth-child(2) {
      opacity: ${({nav}) => nav ? '0' : '1'}
    }

    :nth-child(3) {
      opacity: ${({nav}) => nav ? '0' : '1'}
    }

    :nth-child(4) {
      transform: ${({nav}) => nav ? 'rotate(-45deg)' : 'rotate(0deg)'}
    }
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background-color: #15171a;
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 300ms;
  transform: ${({nav}) => nav ? "translateY(0)" : "translateY(-100%)"};

  ul {
    list-style-type: none;
  }

  li {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-family: Raleway;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 2.8rem;
    transition: color 300ms;

    :hover {
      color: #FEDD00;
    }
  }
`

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={data => {
      const {
        site: {
          siteMetadata: { headerTitle, githubUrl, headerLinks, helpUrl, logo },
        },
      } = data;

      const [nav, showNav] = useState(false)

      return (
        <NavBarWrapper>
          <MenuIcon className={'visibleMobileView'} nav={nav} onClick={() => showNav(!nav)}>
            <div />
            <div />
            <div />
            <div />
          </MenuIcon>
          <MenuLinks nav={nav}>
            <ul>
              <li><Link to={'/'} nav={nav} onClick={() => showNav(!nav)}>About</Link></li>
              <li><Link to={'/projects'} nav={nav} onClick={() => showNav(!nav)}>Projects</Link></li>
              <li><a href="https://www.github.com/ryandhjeon" target="_blank" nav={nav} onClick={() => showNav(!nav)}>Github</a></li>
              <li><a href="https://www.linkedin.com/in/ryandhjeon" target="_blank" nav={nav} onClick={() => showNav(!nav)}>LinkedIn</a></li>
              <li><a href="mailto:ryandhjeon@gmail.com" nav={nav} onClick={() => showNav(!nav)}>Email</a></li>
            </ul>
          </MenuLinks>
          <NavBarBrand>
            <Link to="/"><img src={headerImage} className={'logo'}/></Link>
          </NavBarBrand>
        </NavBarWrapper>
      );
    }}
  />
);

export default Header;
