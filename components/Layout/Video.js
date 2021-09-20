import { Container, Paper, styled } from '@material-ui/core'
import ReactPlayer from 'react-player'

const Video = ({ videoUrl }) => {
  return (
    <Container style={{ padding: 0 }}>
      <PlayerWrap>
        <Player url={videoUrl} width='100%' height='100%' controls={true} />
      </PlayerWrap>
    </Container>
  )
}

export default Video

const PlayerWrap = styled(Paper)({
  position: 'relative',
  paddingTop: '56.25%',
  width: '100%',
  height: '100%',
  lineHeight: 0,
})

const Player = styled(ReactPlayer)({
  position: 'absolute',
  top: 0,
  left: 0,
})
