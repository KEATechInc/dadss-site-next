import Navbar from '../Navbar'
import Footer from '../Footer'
import { styled } from '@material-ui/core'

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
  paddingTop: 70,
})
