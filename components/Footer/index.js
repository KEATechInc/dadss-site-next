import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FooterWrapper } from './footerStyles'
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill'
import { RiYoutubeFill } from '@react-icons/all-files/ri/RiYoutubeFill'

const Footer = () => {
  const router = useRouter()

  return (
    <FooterWrapper>
      <div className='SocialWrapper'>
        Follow us:
        <a
          href='https://twitter.com/DADSSTech'
          target='_blank'
          rel='noreferrer'>
          <RiTwitterFill className='Twitter' />
        </a>
        <a
          href='https://www.youtube.com/channel/UC5be5Eh_SVXbn6d6RI8BYtQ'
          target='_blank'
          rel='noreferrer'>
          <RiYoutubeFill className='Youtube' />
        </a>
      </div>
      <div className='LinkWrapper'>
        <ul>
          <li>
            <Link href='/terms'>Terms</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <Link href='/faq'>FAQ</Link>
          </li>
        </ul>
      </div>
      <div className='RightsWrapper'>
        © 2021 Driver Alcohol Detection System for Safety (DADSS). All rights
        reserved.
      </div>
    </FooterWrapper>
  )
}

export default Footer
