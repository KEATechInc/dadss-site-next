import { styled } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { dtpLightBlue } from '../../styles/generalStyles'
import { useSpring, animated as a } from '@react-spring/web'

const Thumbnail = ({ current, setCurrent, thumbnail, index }) => {
  const [active, setActive] = useState(false)

  const handleClick = (index) => {
    setCurrent(index)
  }

  useEffect(() => {
    if (current === index) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [current])

  const thumbnailStyles = useSpring({
    background: active ? dtpLightBlue : 'transparent',
  })

  const ImageHolder = styled('div')({
    height: 100,
    minWidth: 130,
    cursor: 'pointer',
    background: `url(https://img.youtube.com/vi/${thumbnail}/mqdefault.jpg)`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  })

  return (
    <a.div className='playerContainer' style={thumbnailStyles}>
      <ImageHolder onClick={() => handleClick(index)} />
    </a.div>
  )
}

export default Thumbnail
