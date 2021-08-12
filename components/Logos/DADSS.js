import Link from 'next/link'
import Image from 'next/image'
import theme from '../../src/theme'

import logo from '../../public/assets/logos/dtpLogos/dadss-logo.webp'
import { Box } from '@material-ui/core'

const DADSS = () => {
  return (
    <Link href='/' passHref>
      <Box m={2}>
        <Image
          src={logo}
          height={65}
          width={220}
          alt='DADSS Logo'
          objectFit='contain'
        />
      </Box>
    </Link>
  )
}

export default DADSS
