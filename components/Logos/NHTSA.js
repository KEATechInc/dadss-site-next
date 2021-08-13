import theme from '../../src/theme'
import Image from 'next/image'

import logo from '../../public/assets/logos/dadss-nhtsa.png'

const NHTSA = () => {
  return (
    <a
      href='https://www.nhtsa.gov/'
      target='_blank'
      rel='noreferrer'
      style={{ margin: theme.spacing(2) }}>
      <Image
        src={logo}
        height={65}
        width={270}
        alt='NHTSA Logo'
        objectFit='contain'
        priority={true}
      />
    </a>
  )
}

export default NHTSA
