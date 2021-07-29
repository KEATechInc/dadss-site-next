import { Container, styled, Typography } from '@material-ui/core'
import theme, { fontGray, transDarkOrange } from '../../src/theme'

const HeroImage = ({
  image,
  children,
  extended,
  position,
  darken,
  bannerText,
}) => {
  const HeroContainer = styled('div')({
    position: 'relative',
    height: extended ? 425 : 300,
    width: '100%',
    backgroundImage: `url(${image})`,
    backgroundPosition: position ? position : 'center',
    backgroundSize: 'cover',
    borderBottom: `3px solid ${fontGray}`,
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
    background: transDarkOrange,
  })

  if (extended) {
    return (
      <HeroContainer>
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
      {darken && <Filter />}
      <ChildContainer maxWidth='sm'>{children}</ChildContainer>
    </HeroContainer>
  )
}

export default HeroImage
