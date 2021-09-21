import { Grid, styled } from '@mui/material'
import Image from 'next/image'

const ImageGrid = ({ imageArray }) => {
  return (
    <>
      {imageArray && (
        <GridWrap container justifyContent='center' align='center'>
          {imageArray.map((image, index) => {
            return (
              <Grid item md={3} key={index}>
                <Image
                  src={image.src}
                  alt='Supporter Logo'
                  height={110}
                  width={235}
                  priority={true}
                  onClick={() => window.open(`${image.url}`, '_blank')}
                />
              </Grid>
            )
          })}
        </GridWrap>
      )}
    </>
  )
}

export default ImageGrid

const GridWrap = styled(Grid)({
  '& img': {
    objectFit: 'contain',
    objectPosition: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
})
