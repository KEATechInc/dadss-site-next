import React from 'react'
import { styled } from '@mui/material'
import theme, { bgOrange, dtpLightBlue } from '../../src/theme'

const Divider = ({ color, size }) => {
  const Break = styled('span')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    width: '100%',
    '& hr': {
      width: '100%',
      color: bgOrange,
      background: color ? color : bgOrange,
      border: color ? `1.5px solid ${color}` : `1.5px solid ${bgOrange}`,
      borderRadius: 10,
      boxShadow: theme.shadows[1],
    },
  })

  const Circle = styled('div')({
    height: 12,
    width: 12,
    minWidth: 12,
    borderRadius: 50,
    background: color ? color : bgOrange,
    margin: '0px 15px',
    boxShadow: theme.shadows[1],
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
