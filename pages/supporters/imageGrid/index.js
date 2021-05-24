import styled from 'styled-components'
import Image from 'next/image'

const ImageGrid = ({ imageArray, padding }) => {
  return (
    <>
      {imageArray && (
        <GridWrap>
          {imageArray.map((image, index) => {
            return (
              <Image
                key={index}
                src={image.src}
                alt='Supporter Logo'
                height={142}
                width={275}
                onClick={() => window.open(`${image.url}`, '_blank')}
              />
            )
          })}
        </GridWrap>
      )}
    </>
  )
}

export default ImageGrid

const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  min-height: 550px;
  margin-bottom: 25px;
  width: 90%;

  img {
    object-fit: contain;
    object-position: center;
    :hover {
      cursor: pointer;
    }
  }
`
