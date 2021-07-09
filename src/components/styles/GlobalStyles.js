import { css } from '@emotion/react';

export const baseStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-display: swap;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: #c2c2c2;
  }

  :-ms-input-placeholder {
    /* Internet Explorer */
    color: #c2c2c2;
  }

  ::placeholder {
    color: #c2c2c2;
  }

  html,
  body {
    font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Roboto Light', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    font-size: 16px;
    scroll-behavior: smooth;
  }

  code {
    font-family: "Work Sans, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace";
    font-size: 90%;
    background: #f1f1f1 !important;
    border: none !important;
    padding: 4px 6px !important;
  }

  a {
    transition: color 0.1s;
    code {
      color: #15171A !important;
      :hover {
        color: #FEDD00 !important;
      }
    }
  }

  .visibleMobile {
    display: none;
  }

  .visibleMobileView {
    display: none !important;
  }

  .video-responsive {
    position: relative;
    padding-bottom: 56.2%;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .displayInline {
    display: inline-block;
  }

  .navBarToggle {
    border: 0px solid #fff;
    border-radius: 4px;
    width: 36px;
    height: 33px;
    position: absolute;
    //right: 20px;
    padding: 8px 5px;
    display: none;
  }

  .navBarToggle .iconBar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin: 0 auto;
    margin-top: 4px;
    background-color: #fff;
  }

  .navBarToggle .iconBar:first-child {
    margin-top: 0px;
  }

  .video-responsive iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .diffNewLine {
    color: #22863a;
    background-color: #f0fff4;
  }

  .diffRemoveLine {
    color: red;
    background-color: #ffcccc;
  }

  .navBarParent {
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
  }

  .divider {
    height: 30px;
    margin: 0 15px;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }

  .navBarULRight {
    /* position: absolute;
  right: 30px; */
  }

  .githubIcon {
    width: 15px;
    margin-right: 5px;
  }

  .githubSection {
    display: flex;
    align-items: center;
    color: #000;
    opacity: 0.5;
  }

  .githubSection:hover {
    text-decoration: none;
    opacity: 1;
  }

  .navbar-default .navbar-toggle .icon-bar {
    background-color: #fff !important;
  }

  .navbar-default .navbar-toggle:focus,
  .navbar-default .navbar-toggle:hover {
    background-color: #001933;
  }

  .headerWrapper {
    border-bottom: 1px solid rgb(212, 218, 223);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    display: flex;
    align-items: center;
  }

  .logo {
    height: 13px;
    margin-top: 6px;
  }

  .formElement {
    background-color: transparent;
    padding: 4px;
    border-radius: 5px;
    position: relative;
  }

  .formElement:focus {
    outline: none;
    border: none;
  }

  .formElement svg path {
    fill: #FEDD00;
  }

  .searchInput {
    width: 100%;
    background-color: rgba(28, 211, 198, .12) !important;
    border-width: 0 !important;
    color: #C2C2C2;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    opacity: .6;
    padding-left: 38px;
    max-width: 600px;
  }

  .searchInput:focus,
  .searchInput:visited,
  .searchInput:hover,
  .searchInput:focus-within {
    outline: none;
    border: 0;
  }

  .searchWrapper {
    padding-left: 0px;
    padding-right: 20px;
    flex: 1;
    position: relative;
  }

  .searchWrapper a {
    font-weight: 500;
  }

  .hitWrapper {
    background-color: #fff;
    padding: 0.7em 1em 0.4em;
    border-radius: 4px;
    position: absolute;
    width: 80vw;
    max-width: 30em;
    top: 40px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
    height: auto;
    max-height: 80vh;
    overflow: scroll;
    left: 0;
  }

  .hitWrapper ul li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid;
    list-style-type: none;
  }

  .hitWrapper ul li:first-child {
    border-top: 0px;
    margin-top: 0px;
    color: black !important;
    padding: 0px;
  }

  .showResults {
    display: block;
  }

  .hideResults {
    display: none;
  }

  .hitWrapper span {
    color: black;
    font-size: 14px;
  }

  .headerTitle {
    height: auto;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
    color: #fff !important;
    margin-top: 16px;
    text-transform: uppercase;
  }

  .headerTitle a {
    color: #fff;
  }

  .headerTitle a:hover {
    text-decoration: none;
    opacity: 0.8;
  }

  .logoWrapper {
    padding: 21px 0;
    padding-left: 20px;
  }

  .logoContent {
    font-family: 'Roboto';
    margin-left: 16px;
    font-size: 28px;
    line-height: 1.5;
    font-weight: 500;
    padding-right: 10px;
  }

  /* Header section starts here */

  .removePadd {
    padding: 0 !important;
  }




  .navBarLeft {
    //background-color: #5c6975;
  }

  //
  //.navBarDefault {
  //  //background-color: #15171a;
  //  //background-color: #FEDD00;
  //  border-radius: 0;
  //  border-top: 0;
  //  margin-bottom: 0;
  //  justify-content: center;
  //  display: flex;
  //  //box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
  //  //-webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
  //  //-moz-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.8);
  //  //-o-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
  //  //z-index: 1;
  //  //padding: 5px;
  //  position: relative;
  //}

  .navBarRight {
    display: flex;
    justify-content: flex-end;
  }

  .navBarUL {
    -webkit-overflow-scrolling: touch;
  }
  .navBarUL li {
    list-style-type: none;
  }
  .navBarUL li a {
    font-family: 'Roboto';
    color: #fff !important;
    font-size: 16px;
    font-weight: 500;
    line-height: 1em;
    opacity: 1;
    padding: 10px 15px;
  }
  //
  //.navBarNav {
  //  display: flex;
  //  align-items: center;
  //}
  //
  //.navBarUL li a img,
  //.navBarUL li a .shareIcon {
  //  width: 20px;
  //}
  //
  //.navBarUL li a:hover {
  //  opacity: 0.7;
  //}

  pre {
    border: 0 !important;
    background-color: rgb(245, 247, 249); /* !important; */
  }

  blockquote {
    color: rgb(116, 129, 141);
    margin: 0px 0px 24px;
    padding: 0px 0px 0px 12px;
    border-left: 4px solid rgb(230, 236, 241);
    border-color: rgb(230, 236, 241);
  }


  /* Header section ends here */

  .sidebarImage {
    background-color: #f1f5f8;
    padding: 2.5rem 1rem 1.5rem;
    display: flex;
    align-items: center;
    margin: auto;

    img {
      background-color: #000;
      border-radius: 50%;
      //padding: 20px;
    }
  }

  .sidebarTitle {
    /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); */
    background-color: #f1f5f8;
    padding: 20px 15px;
    font-size: 20px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  .sidebarSubTitle {
    background-color: #f1f5f8;
    padding: 2px 15px 20px;
    font-size: 14px;
    font-weight: 400;
    color: #001934;
    display: flex;
    align-items: center;
  }

  .sidebarAbout {
    padding: 20px 16px 0px;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    list-style: none;
    color: #3B454E;

    :hover {
      background-color: #FEDD00;
    }
  }

  .sidebarAbout .active > a {
    background-color: #3B454E !important;
  }

  .sideBarShow {
    display: none;
  }

  .sidebarTitle a {
    color: #001934;
  }

  .greenCircle {
    width: 8px;
    height: 8px;
    background-color: #FEDD00;
    border-radius: 50%;
    margin: 0 12px;
  }

  .headerNav {
    font-family: 'Roboto';
    padding: 0px 24px;
    color: #f8f8f8;
    font-size: 24px;
    font-weight: 300;
    line-height: 1em;
  }

  .headerNav a {
    color: #f8f8f8;
    text-decoration: none;
  }

  .headerNav a:hover {
    text-decoration: none;
  }

  .logoWrapper img {
    width: 40px;
  }

  .sideBarUL {
    margin-top: 12px;
  }

  .sideBarUL li {
    list-style-type: none;
    width: auto;
  }

  .sideBarUL li a {
    /* color: #fff; */
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    padding: 5px 15px;
    //padding-left: 10px;
    //padding-right: 10px;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    border-color: transparent currentcolor transparent transparent;
  }

  .currentLink {
    background-color: #f1f5f8;
    border-left: 4px solid #FEDD00 !important;
    color: #3b454E !important;
    font-weight: 500 !important;
  }

  .hideFrontLine .collapser {
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    z-index: 1;
    cursor: pointer;
  }

  .hideFrontLine .active > a {
    background-color: #f1f5f8;
    border-left: 4px solid #FEDD00;
    color: #3b454E !important;
    font-weight: 500;
    :before {
      background-color: #0f62fe;
      width: 4px;
    }
  }

  .firstLevel ul li .collapser svg path {
    fill: #001933 !important;
    opacity: 0.3;
  }

  .active .collapser > svg > path {
    fill: #fff !important;
  }

  .firstLevel ul .item ul .item {
    border-left: 1px solid #e6ecf1;
  }

  .sideBarUL .item {
    list-style: none;
    padding: 0;
  }

  .sideBarUL .item > a {
    color: #FEDD00;
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding-right: 35px;
    padding-left: 15px;
  }

  .showFrontLine .item > a:hover {
    background-color: #001933;
  }

  .showFrontLine .active > a {
    /* color: #fff; */
    background-color: #001933;
  }

  .sideBarUL .item .item {
    margin-left: 16px;
  }

  .firstLevel > ul > .item {
    margin-left: 0 !important;
  }

  .showFrontLine .item .item {
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);
    padding: 0;
    width: calc(100% - 16px) !important;
  }

  .showFrontLine .item .active > a {
    border-color: rgb(230, 236, 241) !important;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    background-color: #FEDD00 !important;
    color: #fff;
  }

  .titleWrapper {
    display: flex;
    align-items: center;
    //border-bottom: 1px solid rgb(230, 236, 241);
    //padding-top: 4rem;
    margin-bottom: 2rem;
    //padding-bottom: 2rem;
    background-color: #15171A;
    width: 100% !important;
  }

  .gitBtn {
    height: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
    opacity: 0.3;
  }

  .gitBtn:hover {
    opacity: 1;
  }

  .gitBtn img {
    width: 15px;
    display: inline-block;
    margin-right: 6px;
  }

  .addPaddTopBottom {
    padding: 50px 0;
  }

  .preRightWrapper {
    display: block;
    margin: 0px;
    flex: 1 1 0%;
    padding: 16px;
    text-align: right;
  }

  .smallContent {
    display: block;
    margin: 0px;
    padding: 0px;
    color: #6e6e6e;
  }

  .smallContent span {
    font-size: 12px;
    line-height: 1.625;
    font-weight: 400;
  }

  /* **************************** */

  .nextRightWrapper {
    display: block;
    margin: 0px;
    padding: 16px;
    flex: 1 1 0%;
  }

  /* tables.css */

  table {
    padding: 0;
  }

  table tr {
    border-top: 1px solid #cccccc;
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }

  table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr td {
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  /* end - tables.css */

  /* Image styling */

  img {
    max-width: 100%;
  }

  /* end image */

  .githubBtn {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 10px 0px;
    padding-left: 15px;
    max-height: 40px;
  }

  .githubBtn span span {
    display: flex;
    align-items: center;
  }

  .communitySection {
    font-size: 24px;
    font-weight: 700;
  }

  .authorSection {
    padding: 20px 0;
  }

  .authorSection,
  .authorName {
    display: flex;
    align-items: center;
  }

  .authorImg img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    min-width: 75px;
    max-width: 75px;
    min-height: 75px;
    max-height: 75px;
  }

  .authorDetails {
    padding-left: 10px;
  }

  .authorDesc {
    padding-top: 5px;
    font-size: 14px;
  }

  .authorName img {
    margin-left: 10px;
    display: inline-block;
    width: 20px;
  }

  .authorName img:hover {
    opacity: 0.7;
  }

  .heading1 {
    font-family: Raleway;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading2 {
    font-family: Raleway;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading3 {
    font-family: Raleway;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading4 {
    font-family: Raleway;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading5 {
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading6 {
    font-family: Raleway;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .paragraph {
    margin: 16px 0px 32px;
    line-height: 1.625;
  }

  .pre {
    font-family: "Raleway";
    font-size: 14px;
    margin: 0px;
    padding: 16px;
    overflow: auto;
  }

  .poweredBy {
    font-size: 0.6em;
    text-align: end;
    padding: 0;
  }

  .topnav {
    //-webkit-transition: top 0.5s, bottom 0.5s;
  }


  @media only screen and (max-width: 1023px) {
    .titleWrapper {
      max-width: 1023px;
    }

    .visibleMobileView {
      display: flex !important;
    }

    .hiddenTablet {
      display: none !important;
    }
  }

  @media only screen and (max-width: 800px) {
    .hiddenMobile {
      display: none !important;
    }

    .formElement svg path {
      fill: #001934;
    }

    .searchInput {
      color: #001934;
    }
    //
    //.socialWrapper {
    //  position: absolute;
    //  right: 10px;
    //  top: 29px;
    //}

    .showMenu {
      //margin-top: 15px;
      //position: relative;
      //padding-bottom: 20px;
      //border-top: 1px solid #fff;
      left: 0 !important;
    }



    hr {
      margin-top: 0;
      margin-bottom: 0;
    }

    .navBarParent {
      display: block;
    }

    .separator {
      margin-top: 20px;
      margin-bottom: 20px;
    }


    .navBarDefault {
      display: flex;
      height: 100%;
      align-items: center;
    }


    .mobileView {
      text-align: left !important;
      padding-left: 0 !important;
    }
  }

  //@media (min-width: 800px) and (max-width: 1280px) {
  //  .divider {
  //    margin: 0 5px;
  //    height: 20px;
  //  }
  //
  //  .hitWrapper {
  //    max-width: 500px;
  //  }
  //
  //  .navBarUL li a {
  //    padding: 10px 5px;
  //  }
  //
  //  .searchWrapper {
  //    padding-left: 0px;
  //  }
  //}
`;
