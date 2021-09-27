import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/assets/logos/dadss-logo.png'
import { Box } from '@mui/material'

const DADSS = () => {
  return (
    <Link href='/' passHref>
      <Box m={2}>
        <Image
          src={logo}
          height={65}
          width={235}
          alt='DADSS Logo'
          objectFit='contain'
          priority={true}
        />
      </Box>
    </Link>
  )
}

export default DADSS
