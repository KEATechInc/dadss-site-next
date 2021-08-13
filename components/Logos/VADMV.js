import theme from '../../src/theme'
import Image from 'next/image'

import logo from '../../public/assets/logos/dtpLogos/dmv-logo.webp'

const VADMV = () => {
  return (
    <a href='https://www.dmv.virginia.gov/#/' target='_blank' rel='noreferrer' style={{ margin: theme.spacing(2) }}>
      <Image src={logo} height={65} width={235} alt='DMV Logo' objectFit='contain' priority={true}/>
    </a>
  )
}

export default VADMV
