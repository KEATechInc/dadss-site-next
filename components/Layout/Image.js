import { Paper, styled } from '@material-ui/core'
import I from 'next/image'

const Image = ({ src, alt, marginBottom, marginTop }) => {
  const ImageWrap = styled(Paper)({
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    marginBottom: marginBottom ? 16 : null,
    marginTop: marginTop ? 16 : null,
  })
  return (
    <ImageWrap>
      <ImageHolder
        src={src}
        alt={alt}
        layout='responsive'
        placeholder='blur'
      />
    </ImageWrap>
  )
}

export default Image

const ImageHolder = styled(I)({
  height: '100%',
  width: '100%',
})
