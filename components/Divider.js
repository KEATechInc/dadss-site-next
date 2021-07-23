import React from 'react'
import { styled } from '@material-ui/core'
import { bgOrange, dtpLightBlue, breakShadow } from '../styles/generalStyles'

const Divider = ({ color, size }) => {
  const Break = styled('span')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '16px 0',
    width: '100%',
    '& hr': {
      width: '100%',
      color: bgOrange,
      background: color ? color : bgOrange,
      border: color ? `1.5px solid ${color}` : `1.5px solid ${bgOrange}`,
      borderRadius: 10,
      boxShadow: breakShadow,
    },
  })

  const Circle = styled('div')({
    height: 12,
    width: 12,
    minWidth: 12,
    borderRadius: 50,
    background: color ? color : bgOrange,
    margin: '0px 15px',
    boxShadow: breakShadow,
    '&.White': {
      background: 'white',
    },
    '&.DTPLightBlue': {
      background: dtpLightBlue,
    },
  })

  if (size === 'small') {
    return (
      <Break>
        <hr />
      </Break>
    )
  }

  return (
    <Break>
      <hr /> <Circle /> <hr />
    </Break>
  )
}

export default Divider
