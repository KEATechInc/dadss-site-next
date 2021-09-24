import Navbar from './Navbar'
import Footer from './Footer'
import { styled } from '@mui/material'
import theme from '../../src/theme'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageWrap>{children}</PageWrap>
      <Footer />
    </>
  )
}

export default Layout

const PageWrap = styled('div')({
  paddingTop: 65,
  paddingBottom: theme.spacing(6),
  minHeight: '65vh',
})
