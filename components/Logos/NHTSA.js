import theme from "../../src/theme"

const logo = '/assets/logos/dadss-nhtsa.png'

const NHTSA = () => {
  return (
    <a href='https://www.nhtsa.gov/' target='_blank' rel='noreferrer'>
      <img
        src={logo}
        height={65}
        width={270}
        alt='NHTSA Logo'
        style={{ margin: theme.spacing(2) }}
      />
    </a>
  )
}

export default NHTSA
