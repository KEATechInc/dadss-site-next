import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Wrapper,
  Logo,
  Links,
  MobileNavigation,
  MenuMask,
} from './navStyles'
import { FaBars } from '@react-icons/all-files/fa/FaBars'

const logo1 = '../../../assets/logos/dadss-logo.svg'

const Navbar = () => {
  // Store state for mobile menu
  const [showMenu, setShowMenu] = useState(false)

  //Initializing variables for mobile menu and close on click function
  let mobileMenu
  let menuMask

  const closeMenu = () => {
    setShowMenu(false)
  }

  // Store useHistory function into variable and create a function
  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  // If showMenu is true, mobile navigation will be rendered with menuMask
  if (showMenu) {
    mobileMenu = (
      <MobileNavigation>
        <Links>
          <li>
            <Link href='/supporters' onClick={closeMenu}>
              Supporters
            </Link>
          </li>
          <li>
            <Link href='/resources' onClick={closeMenu}>
              Resources
            </Link>
          </li>
          <li>
            <Link href='/driven-to-protect' onClick={closeMenu}>
              Driven to Protect
            </Link>
          </li>
          <li>
            <Link href='/fleets' onClick={closeMenu}>
              Fleets
            </Link>
          </li>
          <li>
            <Link href='/news' onClick={closeMenu}>
              News
            </Link>
          </li>
          <li>
            <a
              href='https://www.discoveryhub.actsautosafety.org/'
              target='_blank'
              rel='noreferrer'>
              Discovery Hub
            </a>
          </li>
        </Links>
      </MobileNavigation>
    )

    menuMask = <MenuMask onClick={closeMenu} />
  }

  return (
    <Wrapper>
      <Logo src={logo1} alt='DADSS Logo' onClick={goHome} />
      <div className='LinkWrapper'>
        <Links className='Links'>
          <li>
            <Link href='/supporters'>Supporters</Link>
          </li>
          <li className='DropdownWrapper'>
            <Link href='/resources' className='Link'>
              Resources
            </Link>
            <ul className='Dropdown Resources'>
              <li>
                <Link href='/resources/events'>Events</Link>
              </li>
              <li>
                <Link href='/resources/publications'>Publications</Link>
              </li>
            </ul>
          </li>
          <li className='DropdownWrapper'>
            <Link href='/driven-to-protect' className='Link'>
              Driven to Protect
            </Link>
            <ul className='Dropdown DTP'>
              <li>
                <Link href='/driven-to-protect/virginia'>Virginia</Link>
              </li>
              <li>
                <Link href='/driven-to-protect/maryland'>Maryland</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href='/fleets'>Fleets</Link>
          </li>
          <li>
            <Link href='/news'>News</Link>
          </li>
          <li>
            <a
              href='https://www.discoveryhub.actsautosafety.org/'
              target='_blank'
              rel='noreferrer'>
              Discovery Hub
            </a>
          </li>
        </Links>
      </div>

      <FaBars className='Hamburger' onClick={() => setShowMenu(!showMenu)} />
      {menuMask}
      {mobileMenu}
    </Wrapper>
  )
}

export default Navbar
