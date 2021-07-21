import { Container, styled, Typography, Paper } from '@material-ui/core'
import ReactPlayer from 'react-player/lazy'
import { useState } from 'react'
import { dadssGradient } from '../../styles/generalStyles'
import Thumbnail from './Thumbnail'

const VideoPlayer = ({ videos }) => {
  const [current, setCurrent] = useState(0)

  return (
    <Container>
      <VideoPlayerWrapper>
        <PlayerContainer>
          <PlayerWrap>
            <Player
              url={`https://youtu.be/${videos[current].id}`}
              width='100%'
              height='100%'
              controls={true}
            />
          </PlayerWrap>
        </PlayerContainer>

        <VideoSelection>
          {videos.map((video, i) => {
            return (
              <Thumbnail
                key={i}
                index={i}
                current={current}
                setCurrent={setCurrent}
                thumbnail={video.id}
              />
            )
          })}
        </VideoSelection>

        <Typography style={{ color: 'white' }}>
          {videos[current].title}
        </Typography>
      </VideoPlayerWrapper>
    </Container>
  )
}

export default VideoPlayer

const VideoPlayerWrapper = styled(Paper)({
  padding: 16,
  background: dadssGradient,
})

const PlayerContainer = styled(Paper)({
  overflow: 'hidden',
  marginBottom: 8,
})

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

const VideoSelection = styled(Paper)({
  display: 'flex',
  background: 'black',
  overflow: 'hidden',
  overflowX: 'auto',
  marginBottom: 8,
  '& .playerContainer': {
    marginRight: 3,
  },
  '& .playerContainer:last-child': {
    marginRight: 0,
  },
})
