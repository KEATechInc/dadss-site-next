import { styled, Typography } from '@material-ui/core'
import { useSpring, animated as a } from '@react-spring/web'
import { useState } from 'react'
import theme, { dadssGradient, darkOrange } from '../../../src/theme'
import Link from 'next/link'

const AnimatedLink = ({ link }) => {
  const [isHovered, setHovered] = useState(false)

  const colorBarStyles = useSpring({
    opacity: isHovered ? 1 : 0,
  })
  const submenuStyles = useSpring({
    opacity: isHovered ? 1 : 0,
    visibility: isHovered ? 'visible' : 'hidden',
  })
  const SubMenu = styled(a.div)({
    position: 'absolute',
    top: 64.3,
    left: 0,
    boxShadow: theme.shadows[4],
    background: theme.palette.background.default,
  })

  return (
    <LinkWrap
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <Link href={link.url} passHref>
        <Label color='textPrimary' noWrap>
          {link.label}
        </Label>
      </Link>

      {/* if sublinks, dont show gradient bar */}
      {!link.sublinks ? (
        <GradientBar style={colorBarStyles} />
      ) : (
        <div style={{ height: 20.2 }} />
      )}

      {/* conditional dropdown, if sublinks */}
      {link.sublinks ? (
        <SubMenu style={submenuStyles}>
          <div style={{ padding: theme.spacing(2), paddingBottom: 0 }}>
            {link.sublinks?.map((sublink, i) => {
              return (
                <Link href={sublink.url} passHref key={i}>
                  <Label color='textPrimary' paragraph>
                    {sublink.label}
                  </Label>
                </Link>
              )
            })}
          </div>
          <GradientBar style={{ marginTop: 0 }} />
        </SubMenu>
      ) : null}
    </LinkWrap>
  )
}

export default AnimatedLink

const Label = styled(Typography)({
  cursor: 'pointer',
  '&:hover': {
    color: darkOrange,
  },
})
const LinkWrap = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: theme.spacing(1),
  paddingBottom: 0,
  height: '100%',
})
const GradientBar = styled(a.div)({
  width: '100%',
  background: dadssGradient,
  minHeight: 5,
  marginTop: theme.spacing(1.9),
})
