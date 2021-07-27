import { styled } from '@material-ui/core'
import { fontGray } from '../../src/theme'

const HeroImage = ({ image, children }) => {
  const HeroContainer = styled('div')({
    height: 250,
    width: '100%',
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderBottom: `3px solid ${fontGray}`,
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backdropFilter: 'blur(2px) brightness(.7)',
    },
  })

  return <HeroContainer>{children}</HeroContainer>
}

export default HeroImage
