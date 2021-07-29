import theme from '../../src/theme'

const logo = '/assets/logos/dtpLogos/dmv-logo.webp'

const VADMV = () => {
  return (
    <a href='https://www.dmv.virginia.gov/#/' target='_blank' rel='noreferrer'>
      <img src={logo} height={65} width={235} alt='DMV Logo' />
    </a>
  )
}

export default VADMV
