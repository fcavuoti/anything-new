import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

let Wrap = styled.div`

`;

let NavContainer = styled.div `
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100vw;

  ${({ fixed }) => fixed && `
    left: 0;
    position: fixed;
    top: 0;
    z-index: 5;
  `}
`

let LogoContainer = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  //width: 35%;
  //justify-content: center;
  
`
let ShaftLogo = styled.h4`
  padding: 0;
  width: auto;
  background-color: ${props => props.theme.mediumGray};
`

let SpecLogo = styled.div`
  height: inherit;
  width: 100%;
  justify-content: center;
  margin-right: auto;
  border-bottom: solid .2rem ${props => props.theme.yellow};
  padding: 0 .5rem 0.5rem 2.5rem;
  text-align: left;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
`

let MenuContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
  width: 35%;
`

let MenuRow = styled.div`
  border-bottom: solid .2rem ${props => props.theme.lightGreen};
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
`

let MenuLink = styled(NavLink)`
  border-bottom: none;
  color: ${props => props.theme.darkGreen};
  padding: 0 2.5rem 0.5rem 0.5rem;
  text-align: center;
  text-decoration: none;
  font-weight: 200;
  //text-transform: uppercase;

    :hover {
      color: ${props => props.theme.lightGray};
    }

    :focus {
      color: ${props => props.theme.lightGray};
    }

    &.navLinkActive {
      border-bottom: solid 2px ${props => props.theme.white};
    }

  ${({ mobile }) => !!mobile && `
    border: none;
    padding: 10px 0;
    margin: 20px 0;
  `}
`

let NavBuffer = styled.div`
  height: 60px;
  width: 100%;
`

let MenuColumn = styled.div`
  align-items: center;
  background-color: rgba(0,0,0,0.85);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 0;
  overflow: hidden;
  position: absolute;
  top: 60px;
  right: 0;
  transition: width 0.2s ease-out;
  z-index: 1;
`

let MenuBtn = styled.input`
  display: none;

  &:checked ~ ${MenuColumn} {
    width: 50vw;
  }
`

let MenuIcon = styled.label`
  cursor: pointer;
  margin-left: auto;
  padding: 28px 10%;
  user-select: none;
`

let NavIcon = styled.span`
  background: ${props => props.theme.white};
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 24px;

  :before,
  :after {
    background: ${props => props.theme.white};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }

  :before {
    top: 8px;
  }

  :after {
    top: -8px;
  }

  ${MenuBtn}:checked ~ ${MenuIcon} & {
    background: transparent;

    &::before {
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }

  ${MenuBtn}:checked ~ ${MenuIcon}:not(.steps) & {
    :before,
    :after {
      top: 0;
    }
  }
`

let DisabledMenuLink = styled(MenuLink)`
  color: ${props => props.theme.mediumGray};
  pointer-events: none;
`

let Soon = styled.h6`
  color: ${props => props.theme.mediumGray};
  font-size: 0.7rem;

  ${({ mobile }) => !mobile && `
    //position: absolute;
    margin-top: 0px;
  `}
`

let DesktopItem = styled.h4`
  color: inherit;
`

let MobileItem = styled.h3`
  color: inherit;
`


export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedForMobile: false,
      width: window.innerWidth
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.forceClose = this.forceClose.bind(this);
    this.getMenuItems = this.getMenuItems.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  handleCheckboxChange(e) {
    this.setState({ checkedForMobile: e.target.checked });
  }

  forceClose() {
    this.setState({ checkedForMobile: false });
  }

  negateClick(e) {
    e.preventDefault();
  }

  getMenuItems(isMobile) {
    let index = 0
    return this.props.menuItems.map((item) => {
      if (item["disabled"]) {
        return <DisabledMenuLink
          key={index++}
          styled={{isMobile}}
          mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
          to={""}
          onClick={this.negateClick}
          style={{backgroundColor: '#555555'}}
        >
          {isMobile ? <MobileItem>{item["name"]}</MobileItem> : <DesktopItem>{item["name"]}</DesktopItem>}
          <Soon mobile={isMobile}>Coming Soon!</Soon>
        </DisabledMenuLink>
      }
      else {
        return <MenuLink
          key={index++}
          styled={{isMobile}}
          mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
          as={item["external"] ? "a" : undefined}
          href={item["external"] ? item["link"] : undefined}
          target={item["external"] ? "_blank" : undefined}
          to={item["external"] ? undefined : item["link"]}
          activeClassName={item["external"] ? undefined : "navLinkActive"}
          onClick={this.forceClose}
        >
          {isMobile ? <MobileItem>{item["name"]}</MobileItem> : <DesktopItem>{item["name"]}</DesktopItem>}
        </MenuLink>
      }
    });
  }

  render() {
    const isMobile = this.state.width <= 700;
    const desktopMenu = (
      <React.Fragment>
        <LogoContainer>
            <SpecLogo>francesca cavuoti's portfolio 🌿</SpecLogo>
        </LogoContainer>
        <MenuContainer>
          <MenuRow>
            {this.getMenuItems(isMobile)}
          </MenuRow>
        </MenuContainer>
      </React.Fragment>
    );
    const mobileMenu = (
      <React.Fragment>
        <MenuBtn 
          type="checkbox" 
          id="menu-btn" 
          checked={this.state.checkedForMobile}
          onChange={this.handleCheckboxChange}
        />
        <MenuIcon htmlFor="menu-btn">
          <NavIcon></NavIcon>
        </MenuIcon>
        <MenuColumn>
          {this.getMenuItems(isMobile)}
          <MenuLink
            key={this.props.menuItems.length}
            styled={{isMobile}}
            mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
            as="a"
            href="https://www.columbiaspectator.com/"
            target="_blank"
            onClick={this.forceClose}
          >
            <SpecLogo />
          </MenuLink>
        </MenuColumn>
      </React.Fragment>
    );
    return (
      <Wrap>
        <NavContainer fixed={this.props.fixed}>
            {isMobile ? mobileMenu : desktopMenu}
        </NavContainer>
        {this.props.fixed && <NavBuffer></NavBuffer>}
      </Wrap>
    );
  }
}
