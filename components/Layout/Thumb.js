import { styled, Paper, Typography } from '@material-ui/core'
import { useSpring, animated as a } from '@react-spring/web'
import { useState } from 'react'
import theme from '../../src/theme'
import { useRouter } from 'next/router'

const Thumb = ({ img, url, external, label, background, filterDark }) => {
  const [isHovered, setHovered] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    if (external) {
      window.open(url, '_blank', 'noopener')
    } else {
      router.push(url)
    }
  }

  const ThumbWrap = styled(Paper)({
    position: 'relative',
    cursor: 'pointer',
    height: 300,
    width: '100%',
    overflow: 'hidden',
    '& > div': {
      height: '100%',
      width: '100%',
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      filter: filterDark
        ? 'blur(1px) brightness(.2)'
        : 'blur(1px) brightness(.7)',
    },
  })
  const CenterText = styled(a(Typography))({
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
    padding: theme.spacing(2),
  })

  const thumbStyles = useSpring({
    transform: isHovered ? 'scale(1.25)' : 'scale(1)',
  })
  const bgStyles = useSpring({
    background: isHovered ? 'transparent' : background,
  })

  return (
    <ThumbWrap
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <a.div style={thumbStyles}></a.div>
      <CenterText
        variant='h4'
        align='center'
        color='textSecondary'
        style={bgStyles}>
        <b>{label}</b>
      </CenterText>
    </ThumbWrap>
  )
}

export default Thumb
