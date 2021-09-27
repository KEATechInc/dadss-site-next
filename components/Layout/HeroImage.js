import { Container, styled, Typography } from '@mui/material'
import theme, { bgOrange } from '../../src/theme'
import Image from 'next/image'

const HeroImage = ({
  image,
  children,
  extended,
  darken,
  bannerText,
}) => {
  const HeroContainer = styled('div')({
    position: 'relative',
    height: extended ? 425 : 300,
    width: '100%',
    borderBottom: `2px solid ${bgOrange}`,
  })
  const ChildContainer = styled(Container)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    zIndex: 5,
    '& img': {
      objectFit: 'contain',
    },
  })
  const Filter = styled('div')({
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    background: 'black',
    opacity: 0.4,
  })
  const TextBanner = styled('div')({
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: theme.spacing(4),
    background: 'rgba(0, 0, 0, 0.7)',
  })

  if (extended) {
    return (
      <HeroContainer>
        {image && (
          <Image
            src={image}
            layout='fill'
            placeholder='blur'
            objectFit='cover'
            objectPosition='center'
          />
        )}

        <TextBanner>
          <Container>
            <Typography variant='h3' color='textSecondary' align='left'>
              <b>{bannerText}</b>
            </Typography>
          </Container>
        </TextBanner>
      </HeroContainer>
    )
  }

  return (
    <HeroContainer>
      {image && (
        <Image
          src={image}
          layout='fill'
          placeholder='blur'
          objectFit='cover'
          objectPosition='center'
        />
      )}
      {darken && <Filter />}
      {children && <ChildContainer maxWidth='sm'>{children}</ChildContainer>}
    </HeroContainer>
  )
}

export default HeroImage
