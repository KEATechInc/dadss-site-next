import { styled } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { dtpLightBlue } from '../../styles/generalStyles'

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

  const ImageHolder = styled('div')({
    height: 100,
    minWidth: 130,
    cursor: 'pointer',
    background: `url(https://img.youtube.com/vi/${thumbnail}/mqdefault.jpg)`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  })

  const ImageWrapper = styled('div')({
    background: active ? dtpLightBlue : 'black',
  })

  return (
    <ImageWrapper className='playerContainer'>
      <ImageHolder onClick={() => handleClick(index)} />
    </ImageWrapper>
  )
}

export default Thumbnail
