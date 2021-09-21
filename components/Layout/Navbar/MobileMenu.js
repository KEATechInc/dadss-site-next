import { styled, Typography } from '@mui/material'
import { useSpring, animated as a } from '@react-spring/web'
import theme from '../../../src/theme'
import { linkData } from '../../../src/linkData'
import Link from 'next/link'

const MobileMenu = ({ isOpen, setOpen }) => {
  const dropStyles = useSpring({
    height: isOpen ? '95vh' : '0vh',
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' : 'hidden',
  })
  return (
    <DropdownContainer onClick={() => setOpen(false)} style={dropStyles}>
      <div style={{ paddingTop: theme.spacing(3) }}>
        {linkData.map((link, i) => {
          return (
            <LinkWrapper key={i}>
              <Link href={link.url} passHref>
                <Typography variant='h6' color='primary' gutterBottom>
                  <b>{link.label}</b>
                </Typography>
              </Link>
              {link.sublinks ? (
                <SubWrapper key={i}>
                  {link.sublinks.map((sublink, i) => {
                    return (
                      <Link key={i} href={sublink.url} passHref>
                        <Typography variant='h6' color='secondary' gutterBottom>
                          {sublink.label}
                        </Typography>
                      </Link>
                    )
                  })}
                </SubWrapper>
              ) : null}
            </LinkWrapper>
          )
        })}
      </div>
    </DropdownContainer>
  )
}

export default MobileMenu

const DropdownContainer = styled(a.div)({
  width: '100%',
  background: 'white',
})
const LinkWrapper = styled('div')({
  paddingLeft: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
})
const SubWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: theme.spacing(2),
})
