import Image from 'next/image'
import theme from '../../src/theme'
import logo from '../../public/assets/logos/dtpLogos/acts.png'

const ACTS = () => {
  return (
    <a
      href='https://www.actsautosafety.org/'
      target='_blank'
      rel='noreferrer'
      style={{ margin: theme.spacing(2) }}>
      <Image
        src={logo}
        alt='ACTS Logo'
        objectFit='contain'
        height='65px'
        width='135px'
        priority={true}
      />
    </a>
  )
}

export default ACTS
