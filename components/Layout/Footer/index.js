import Link from 'next/link'
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill'
import { RiYoutubeFill } from '@react-icons/all-files/ri/RiYoutubeFill'
import { Button, Container, styled, Typography } from '@material-ui/core'
import theme from '../../../src/theme'

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <SocialWrapper>
          <Typography>
            Follow Us On Social Media:
          </Typography>
          <div>
            <Button
              color='secondary'
              size='small'
              href='https://twitter.com/DADSSTech'
              target='_blank'
              rel='noreferrer'>
              <RiTwitterFill style={{ fontSize: '1.5rem', color: '#1DA1F2' }} />
            </Button>
            <Button
              color='secondary'
              size='small'
              href='https://www.youtube.com/channel/UC5be5Eh_SVXbn6d6RI8BYtQ'
              target='_blank'
              rel='noreferrer'>
              <RiYoutubeFill style={{ fontSize: '1.5rem', color: '#ff0000' }} />
            </Button>
          </div>
        </SocialWrapper>

        <LinkWrapper>
          <Typography>
            <Link href='/terms'>Terms and Conditions</Link>
          </Typography>

          <Typography>
            <Link href='/contact'>Contact Us</Link>
          </Typography>

          <Typography>
            <Link href='/faq'>FAQ</Link>
          </Typography>
        </LinkWrapper>

        <Typography variant='body2' align='center'>
          © 2021 Driver Alcohol Detection System for Safety (DADSS). All rights
          reserved.
        </Typography>
      </FooterContainer>
    </footer>
  )
}

export default Footer

const FooterContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
})

const SocialWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  flexWrap: 'wrap',
})

const LinkWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  '& p': {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
})
