import { styled, Typography } from '@mui/material'
import { useSpring, animated as a } from '@react-spring/web'
import { useState } from 'react'
import theme, { dadssGradient, darkOrange } from '../../../src/theme'
import { useRouter } from 'next/router'
import Link from 'next/link'

const AnimatedLink = ({ link }) => {
  const [isHovered, setHovered] = useState(false)
  const router = useRouter()

  const colorBarStyles = useSpring({
    opacity: isHovered ? 1 : 0,
    config: {
      tension: 350,
    },
  })
  const submenuStyles = useSpring({
    opacity: isHovered ? 1 : 0,
    visibility: isHovered ? 'visible' : 'hidden',
    config: {
      tension: 350,
    },
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
      onClick={() => router.push(link.url)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <Typography color='textPrimary' noWrap>
        {link.label}
      </Typography>

      {/* if sublinks, dont show gradient bar */}
      {!link.sublinks ? (
        <GradientBar style={colorBarStyles} />
      ) : (
        <div style={{ height: 20.2 }} />
      )}

      {/* conditional dropdown, if sublinks */}
      {link.sublinks ? (
        <SubMenu style={submenuStyles} onClick={(e) => e.stopPropagation()}>
          <div style={{ padding: theme.spacing(2) }}>
            {link.sublinks?.map((sublink, i) => {
              return (
                <Link href={sublink.url} passHref key={i}>
                  <Label color='textPrimary' noWrap gutterBottom>
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
  '&:hover': {
    color: darkOrange,
  },
})
const LinkWrap = styled('div')({
  cursor: 'pointer',
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
  minHeight: 2,
  marginTop: theme.spacing(2.4),
})
