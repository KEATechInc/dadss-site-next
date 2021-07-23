import { styled, Typography } from '@material-ui/core'
import { useSpring, animated as a } from '@react-spring/web'
import { useState } from 'react'
import theme, { dadssGradient } from '../../../src/theme'
import { useRouter } from 'next/router'

const AnimatedLink = ({ url, label }) => {
  const [isHovered, setHovered] = useState(false)
  const router = useRouter()

  const colorBarStyles = useSpring({
    opacity: isHovered ? 1 : 0,
    config: {
      friction: 15,
    }
  })

  const handleClick = () => {
    router.push(url)
  }

  return (
    <LinkWrap
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <Typography>{label}</Typography>
      <GradientBar style={colorBarStyles} />
    </LinkWrap>
  )
}

export default AnimatedLink

const LinkWrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: theme.spacing(1),
  paddingBottom: 0,
  cursor: 'pointer',
  height: '100%',
})

const GradientBar = styled(a.div)({
  width: '100%',
  background: dadssGradient,
  minHeight: 5,
  marginTop: theme.spacing(1.9),
})
