import { Button, styled } from '@mui/material'
import { dtpLightBlue } from '../../src/theme'

const BlueButton = (props) => {
  return (
    <StyledButton color='secondary' variant='outlined' {...props}>
      {props.children}
    </StyledButton>
  )
}

export default BlueButton

const StyledButton = styled(Button)({
  '&.MuiButton-outlinedSecondary': {
    color: dtpLightBlue,
    border: `1px solid rgba(17, 126, 194, .5)`,
  },
  '&.MuiButton-outlinedSecondary:hover': {
    border: `1px solid ${dtpLightBlue}`,
    backgroundColor: `rgba(17, 126, 194, .04)`,
  },
})
