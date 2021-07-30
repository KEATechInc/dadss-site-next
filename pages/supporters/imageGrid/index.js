import { Grid, styled } from '@material-ui/core'

const ImageGrid = ({ imageArray }) => {
  return (
    <>
      {imageArray && (
        <GridWrap container justifyContent='center' align='center'>
          {imageArray.map((image, index) => {
            return (
              <Grid item md={3} key={index}>
                <img
                  src={image.src}
                  alt='Supporter Logo'
                  height={110}
                  width={235}
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
