import styled from 'styled-components'
import {
  bgGray,
  darkOrange,
  bgOrange,
  fontGray,
  boxShadow,
  dadssGradient,
  dadssGradientBG,
} from '../../styles/generalStyles'

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  background: white;
  color: #3b3b3b;
  font-size: 1.1rem;
  position: fixed;
  top: 0;
  z-index: 9;
  :after {
    content: '';
    position: absolute;
    top: 80px;
    width: 100%;
    height: 5px;
    background: ${dadssGradientBG};
    background: ${dadssGradient};
    box-shadow: ${boxShadow};
  }
  .Hamburger {
    font-size: 2rem;
    margin: 0 15px 0 60px;

    :hover {
      cursor: pointer;
      color: ${darkOrange};
    }
  }
  .LinkWrapper {
    display: none;
  }
  @media only screen and (min-width: 1050px) {
    .Hamburger {
      display: none;
    }
    .LinkWrapper {
      display: flex;
      height: 100%;
      .Links {
        flex-direction: row;
        align-items: center;
        height: 100%;
        li {
          display: flex;
          align-items: center;
          padding: 0;
          margin: 0 20px;
          font-size: 1.2rem;
          height: 100%;
        }
      }
    }
  }
`

export const Logo = styled.img`
  height: 50px;
  width: 184px;
  cursor: pointer;
  margin: 0 20px;
`

// Links styled by default for mobile
export const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: 600;
  a {
    color: ${fontGray};
    text-decoration: none;

    &:hover {
      color: ${darkOrange};
      cursor: pointer;
    }
  }
  li {
    margin: 0;
    padding: 15px 10px;
    font-size: 1.4rem;
    color: ${fontGray};
    :hover {
      color: ${darkOrange};
      cursor: pointer;
    }
    a {
      color: ${fontGray};
      text-decoration: none;
      &:hover {
        color: ${darkOrange};
        cursor: pointer;
      }
    }
  }

  .DropdownWrapper {
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    :hover {
      .Dropdown {
        opacity: 1;
        visibility: visible;
      }
    }
    .Dropdown {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: center;
      position: absolute;
      top: 75px;
      padding: 10px 15px;
      background: white;
      z-index: 10;
      opacity: 0;
      visibility: hidden;
      box-shadow: 0px 8px 8px rgb(0, 0, 0, 0.3);
      transition: 0.2s ease;
      &.Resources {
        left: -21px;
        width: 150%;
      }
      &.DTP {
        left: -8px;
        width: 110%;
      }
      li {
        margin: 10px 0;
        padding: 0;
      }
      :after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 5px;
        background: ${dadssGradientBG};
        background: ${dadssGradient};
        box-shadow: ${boxShadow};
      }
    }
  }
`

// Mobile menu styles
export const MobileNavigation = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: white;
  z-index: 11;
  padding: 25px;
  border-left: 5px solid ${bgOrange};
  box-shadow: 0px 1px 4px ${bgGray};
`
export const MenuMask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0, 0.5);
  z-index: 10;
`
