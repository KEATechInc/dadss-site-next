import { Container, styled } from '@mui/material'
import ReactPlayer from 'react-player'

const HomeHero = ({ videoUrl, background }) => {
  const SectionWrapper = styled('section')({
    width: '100%',
    background: background ? background : 'black',
  })

  return (
    <SectionWrapper>
      <Container>
        <PlayerWrap>
          <Player url={videoUrl} width='100%' height='100%' controls={true} />
        </PlayerWrap>
      </Container>
    </SectionWrapper>
  )
}

export default HomeHero

const PlayerWrap = styled('div')({
  position: 'relative',
  paddingTop: '56.25%',
  width: '100%',
  height: '100%',
})

const Player = styled(ReactPlayer)({
  position: 'absolute',
  top: 0,
  left: 0,
})
