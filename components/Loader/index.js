import styled from 'styled-components'
import { darkOrange } from '../../src/theme'

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`
const LoaderWrapper = styled.div`
  &.lds-facebook {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  &.lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: ${darkOrange};
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  &.lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  &.lds-facebook div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  &.lds-facebook div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`
const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderWrapper className='lds-facebook'>
        <div></div>
        <div></div>
        <div></div>
      </LoaderWrapper>
    </LoaderContainer>
  )
}
export default Loader
