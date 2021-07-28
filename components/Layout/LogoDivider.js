import Divider from './Divider'
import theme from '../../src/theme'
import { styled } from '@material-ui/core'

const LogoDivider = ({ children }) => {
  return (
    <>
      <Divider />
      <LogoWrap>{children}</LogoWrap>
      <Divider />
    </>
  )
}

export default LogoDivider

const LogoWrap = styled('div')({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& img': {
    margin: theme.spacing(2),
  },
})
