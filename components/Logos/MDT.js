import Image from 'next/image'
import theme from '../../src/theme'

import logo from '../../public/assets/logos/MDT-logo.png'

const ACTS = () => {
  return (
    <a
      href='https://mva.maryland.gov/Pages/default.aspx'
      target='_blank'
      rel='noreferrer'
      style={{ margin: theme.spacing(2) }}>
      <Image src={logo} height={65} width={180} alt='MDT Logo' objectFit='contain' />
    </a>
  )
}

export default ACTS
