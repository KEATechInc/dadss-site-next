import { Button } from '@mui/material'

const StandardButton = (props) => {
  return (
    <Button sx={{ mt: 1, mb: 2 }} variant={'contained'} {...props}>
      {props.children}
    </Button>
  )
}

export default StandardButton
