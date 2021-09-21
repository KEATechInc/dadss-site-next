import { styled, Typography, Paper } from '@mui/material'
import ReactPlayer from 'react-player'
import { useState } from 'react'
import theme, { dadssGradient } from '../../src/theme'
import Thumbnail from './Thumbnail'

const VideoPlayer = ({ videos }) => {
  const [current, setCurrent] = useState(0)

  return (
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

      <Typography variant='h6' style={{ color: 'white' }}>
        {videos[current].title}
      </Typography>
    </VideoPlayerWrapper>
  )
}

export default VideoPlayer

const VideoPlayerWrapper = styled(Paper)({
  padding: 16,
  width: '100%',
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
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  '& .playerContainer': {
    marginRight: 3,
  },
  '& .playerContainer:last-child': {
    marginRight: 0,
  },
})
