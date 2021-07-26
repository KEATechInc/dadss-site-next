import { Grid, styled } from '@material-ui/core'

const ImageGrid = ({ imageArray }) => {
  return (
    <>
      {imageArray && (
        <GridWrap container justifyContent='center' align='center'>
          {imageArray.map((image, index) => {
            return (
              <Grid item md={4}>
                <img
                  key={index}
                  src={image.src}
                  alt='Supporter Logo'
                  height={125}
                  width={250}
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
