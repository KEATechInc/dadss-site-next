import Navbar from './Navbar'
import Footer from './Footer'
import { styled } from '@mui/material'

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
})
