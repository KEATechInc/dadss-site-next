import { styled, Paper, Typography } from '@material-ui/core'
import { useSpring, animated as a } from '@react-spring/web'
import { useState } from 'react'
import theme from '../../src/theme'
import { useRouter } from 'next/router'

const Thumb = ({ img, url, label }) => {
  const [isHovered, setHovered] = useState(false)
  const router = useRouter()

  const ThumbWrap = styled(Paper)({
    position: 'relative',
    cursor: 'pointer',
    height: 300,
    width: '100%',
    marginBottom: theme.spacing(1),
    overflow: 'hidden',
    '& > div': {
      height: '100%',
      width: '100%',
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      filter: 'blur(1px) brightness(.8)',
    },
  })

  const thumbStyles = useSpring({
    transform: isHovered ? 'scale(1.25)' : 'scale(1)',
  })

  return (
    <ThumbWrap
      onClick={() => router.push(url)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <a.div style={thumbStyles}></a.div>
      <CenterText variant='h4' color='textSecondary'>
        <b>{label}</b>
      </CenterText>
    </ThumbWrap>
  )
}

export default Thumb

const CenterText = styled(Typography)({
  position: 'absolute',
  top: 0,
  left: 0,
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
})
