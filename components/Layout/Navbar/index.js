import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { AppBar, Container, Hidden, Toolbar, styled } from '@material-ui/core'
import Hamburger from 'hamburger-react'
import theme, { dadssGradient } from '../../../src/theme'
import { linkData } from '../../../src/linkData'
import AnimatedLink from './AnimatedLink'

const logo1 = '../../../assets/logos/dadss-logo.svg'

const Navbar = () => {
  // set state for mobile menu
  const [isOpen, setOpen] = useState(false)

  const router = useRouter()

  const goHome = () => {
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
        style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* clickable logo */}
        <img
          src={logo1}
          alt='DADSS Logo'
          height='45px'
          width='150px'
          onClick={goHome}
          style={{ cursor: 'pointer' }}
        />

        {/* generate links */}
        <Hidden xsDown>
          <div style={{ display: 'flex', height: '64px' }}>
            {linkData?.map((link, i) => {
              return <AnimatedLink url={link.url} label={link.label} key={i} />
            })}
          </div>
        </Hidden>

        {/* hamburger menu conditionally visible */}
        <Hidden xsUp>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

const GradientBar = styled('div')({
  height: 3,
  background: dadssGradient,
  width: '100%',
})
