import styled from 'styled-components'
import { darkOrange, fontGray } from '../../../src/theme'

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background: white;
  .SocialWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${fontGray};
    svg {
      font-size: 1.8rem;
      margin-left: 10px;
      opacity: 0.7;
    }
    .Twitter {
      color: #1da1f2;
      :hover {
        cursor: pointer;
        opacity: 1;
      }
    }
    .Youtube {
      color: #ff0000;
      :hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
  .LinkWrapper {
    ul {
      display: flex;
      justify-content: center;
      width: 100%;
      list-style-type: none;
      padding: 0;
      margin: 15px 0;
      li {
        margin: 0 15px;
        a {
          color: ${darkOrange};
          font-weight: 600;
          :hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .RightsWrapper {
    font-size: 0.8rem;
    color: ${fontGray};
    text-align: center;
  }
`
