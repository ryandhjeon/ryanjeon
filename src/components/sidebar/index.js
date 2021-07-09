import React from 'react';
import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { User, Star, GitHub, Linkedin, Mail, ExternalLink } from 'react-feather';
import config from '../../../config';
import me from '/src/components/images/rj2.jpeg'
import Link from '../link';

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </li>
  );
})`
  list-style: none;
  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: #FEDD00 !important;
    }

    ${props =>
      props.active &&
      `
      // color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 0.28rem;
    }
  }
`;

const ListAbout = styled(({ className, active, level, ...props }) => {
  return (
    <li id='sideAbout' className={className}>
      <Link to={props.to} {...props} rel="noopener noreferrer">
        {props.children}
      </Link>
    </li>
  );
})`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    //&:active {
    //  background-color: #f1f5f8;
    //  border-left: 4px solid #FEDD00 !important;
    //  color: #3b454E !important;
    //  font-weight: 500 !important;
    //}

    &:hover {
      background-color: #FEDD00 !important;
      color: #FFF !important;
    }

    ${props =>
      props.active &&
      `
      // color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 0.28rem;
    }
  }
`;

// function currentLinkActive() {
//   var x = document.getElementById('sideAbout');
//
//   if (x.className == 'listAbout') {
//     x.className += ' currentLink';
//     console.log('TEST')
//   } else {
//     x.className -= ' currentLink';
//   }
// }

const Sidebar = styled('aside')`
  height: 100vh;
  width: 250px;
  overflow: auto;
  position: fixed;
  padding-left: 0;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  padding-right: 0;
  -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
  background: #fff;

  @media only screen and (max-width: 1023px) {
    display: none;
  }
  //@media (min-width: 767px) and (max-width: 1023px) {
  //  padding-left: 0;
  //}
  //
  //@media only screen and (max-width: 767px) {
  //  padding-left: 0px;
  //  height: auto;
  //}
`;

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
  }
`;

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <Sidebar>
          <div className={'sidebarImage hiddenMobile'}>
            <img src={me} alt="Ryan Jeon"/>
          </div>
          {/*<div*/}
          {/*  className={'sidebarImage hiddenMobile'}*/}
          {/*  dangerouslySetInnerHTML={{ __html: config.sidebar.image }}*/}
          {/*/>*/}
          {config.sidebar.title ? (
            <div
              className={'sidebarTitle hiddenMobile'}
              dangerouslySetInnerHTML={{ __html: config.sidebar.title }}
            />
          ) : null}
          {config.sidebar.subtitle ? (
            <div
              className={'sidebarSubTitle hiddenMobile'}
              dangerouslySetInnerHTML={{ __html: config.sidebar.subtitle }}
            />
          ) : null}
          <ul className={'sideBarUL'}>
            {config.sidebar.about && config.sidebar.about.length > 0}
            {config.sidebar.about.map((link, key) => {
              if (link.link !== '' && link.text !== '') {
                return (
                  <ListAbout
                    key={key}
                    to={link.link}
                    className={'listAbout'}
                    activeClassName={'currentLink'}>
                    {link.text}
                    <User size={14} />
                  </ListAbout>
                );
              }
            })}
            <Tree edges={allMdx.edges} />
            {config.sidebar.github && config.sidebar.github.length > 0 && <Divider />}
            {config.sidebar.github.map((link, key) => {
              if (link.link !== '' && link.text !== '') {
                return (
                  <ListItem key={key} to={link.link}>
                    {link.text}
                    <GitHub size={14} />
                  </ListItem>
                );
              }
            })}
            {config.sidebar.linkedin && config.sidebar.linkedin.length > 0}
            {config.sidebar.linkedin.map((link, key) => {
              if (link.link !== '' && link.text !== '') {
                return (
                  <ListItem key={key} to={link.link}>
                    {link.text}
                    <Linkedin size={14} />
                  </ListItem>
                );
              }
            })}
            {config.sidebar.email && config.sidebar.email.length > 0}
            {config.sidebar.email.map((link, key) => {
              if (link.link !== '' && link.text !== '') {
                return (
                  <ListItem key={key} to={link.link}>
                    {link.text}
                    <Mail size={14} />
                  </ListItem>
                );
              }
            })}
          </ul>
        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
