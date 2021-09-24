import React from 'react'
import { Button, styled } from '@mui/material'

const SocialButton = ({ link, iconColor, children }) => {
  const ButtonContainer = styled(Button)({
    '& svg': {
      fontSize: '2rem',
      color: iconColor ? iconColor : '#fff',
    },
  })

  return (
    <ButtonContainer
      color='secondary'
      size='small'
      href={link}
      target='_blank'
      rel='noreferrer'>
      {children}
    </ButtonContainer>
  )
}

export default SocialButton
