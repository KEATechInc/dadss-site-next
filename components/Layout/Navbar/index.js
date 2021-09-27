import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { AppBar, Container, Hidden, Toolbar, styled, Box } from '@mui/material'
import Hamburger from 'hamburger-react'
import theme, { bgOrange, fontGray } from '../../../src/theme'
import { linkData } from '../../../src/linkData'
import AnimatedLink from './AnimatedLink'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

const logo1 = '/assets/logos/dadss-logo.svg'

const Navbar = () => {
  // set state for mobile menu
  const [isOpen, setOpen] = useState(false)

  const router = useRouter()

  const goHome = () => {
    setOpen(false)
    router.push('/')
  }

  return (
    <AppBar
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.text.secondary,
      }}>
      <GradientBar />

      <Toolbar
        component={Container}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: 64,
        }}>
        {/* clickable logo */}
        <Box
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <Image
            src={logo1}
            alt='DADSS Logo'
            height='45px'
            width='150px'
            onClick={goHome}
          />
        </Box>

        {/* generate links */}
        <Hidden mdDown>
          <div style={{ display: 'flex', height: '64px' }}>
            {linkData?.map((link, i) => {
              return <AnimatedLink link={link} key={i} />
            })}
          </div>
        </Hidden>

        {/* hamburger menu conditionally visible */}
        <Hidden mdUp>
          <Hamburger color={fontGray} toggled={isOpen} toggle={setOpen} />
        </Hidden>
      </Toolbar>

      <MobileMenu isOpen={isOpen} setOpen={setOpen} />
    </AppBar>
  )
}

export default Navbar

const GradientBar = styled('div')({
  height: 2,
  background: bgOrange,
  width: '100%',
})
