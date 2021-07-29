import Link from 'next/link'

const logo = '/assets/logos/dtpLogos/dadss-logo.webp'

const DADSS = () => {
  return (
    <Link href='/'>
      <img src={logo} height={65} width={220} alt='DADSS Logo' />
    </Link>
  )
}

export default DADSS
