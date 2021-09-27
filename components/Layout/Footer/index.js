import Link from 'next/link'
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill'
import { RiYoutubeFill } from '@react-icons/all-files/ri/RiYoutubeFill'
import { RiLinkedinFill } from '@react-icons/all-files/ri/RiLinkedinFill'
import { RiFacebookCircleFill } from '@react-icons/all-files/ri/RiFacebookCircleFill'
import {
  Container,
  Divider,
  Grid,
  Hidden,
  Paper,
  styled,
  Typography,
} from '@mui/material'
import theme, { bgOrange } from '../../../src/theme'
import SocialButton from './SocialButton'
import { linkData, footerLinkData } from '../../../src/linkData'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Box } from '@mui/system'

const logo = '/assets/logos/dadss-logo-bw.svg'

const Footer = () => {
  const router = useRouter()

  return (
    <Paper elevation={4} style={{ background: bgOrange }}>
      <footer>
        <FooterContainer>
          <SocialWrapper>
            <Typography variant='h5'>
              <b>Follow Us On Social Media:</b>
            </Typography>
            <div>
              <SocialButton link='https://www.facebook.com/DADSSTech'>
                <RiFacebookCircleFill />
              </SocialButton>
              <SocialButton link='https://twitter.com/DADSSTech'>
                <RiTwitterFill />
              </SocialButton>
              <SocialButton link='https://www.youtube.com/channel/UC5be5Eh_SVXbn6d6RI8BYtQ'>
                <RiYoutubeFill />
              </SocialButton>
              <SocialButton link='https://www.linkedin.com/company/dadsstech/'>
                <RiLinkedinFill />
              </SocialButton>
            </div>
          </SocialWrapper>

          <FootBreak />

          <Grid container spacing={4}>
            <Hidden mdDown>
              <Grid item md={3}>
                <Box mb={2} style={{ cursor: 'pointer' }}>
                  <Image
                    src={logo}
                    alt='DADSS Logo'
                    height='65px'
                    width='225px'
                    objectFit='contain'
                    onClick={() => router.push('/')}
                  />
                </Box>
                <Typography align='left' variant='body2'>
                  © 2021 Driver Alcohol Detection System for Safety (DADSS). All
                  rights reserved.
                </Typography>
              </Grid>
            </Hidden>

            <Grid item md={9}>
              <Grid container>
                <Grid item xs={12}>
                  <LinkWrapper>
                    {linkData.map((link, i) => {
                      const { url, label, sublinks } = link
                      return (
                        <LinkColumn key={i}>
                          <Typography noWrap gutterBottom>
                            <b>
                              <Link href={url}>{label}</Link>
                            </b>
                          </Typography>
                          {sublinks?.map((sublink, i) => {
                            const { url, label } = sublink
                            return (
                              <Typography noWrap gutterBottom key={i}>
                                <Link href={url}>{label}</Link>
                              </Typography>
                            )
                          })}
                        </LinkColumn>
                      )
                    })}
                  </LinkWrapper>
                </Grid>
                <Grid item xs={12}>
                  <LinkWrapper>
                    {footerLinkData.map((link, i) => {
                      const { url, label } = link
                      return (
                        <LinkColumn key={i}>
                          <Typography noWrap gutterBottom>
                            <b>
                              <Link href={url}>{label}</Link>
                            </b>
                          </Typography>
                        </LinkColumn>
                      )
                    })}
                  </LinkWrapper>
                </Grid>
              </Grid>
            </Grid>

            {/* condition - mobile */}
            <Hidden mdUp>
              <Grid item xs={12}>
                <Divider />
                <Box mt={3} mb={2}>
                  <Image
                    src={logo}
                    alt='DADSS Logo'
                    height='65px'
                    width='225px'
                    objectFit='contain'
                    onClick={() => router.push('/')}
                  />
                </Box>
                <Typography align='center' variant='body2'>
                  © 2021 Driver Alcohol Detection System for Safety (DADSS). All
                  rights reserved.
                </Typography>
              </Grid>
            </Hidden>
          </Grid>
        </FooterContainer>
      </footer>
    </Paper>
  )
}

export default Footer

const FooterContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
})
const SocialWrapper = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
})
const LinkWrapper = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
})
const LinkColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(2),
  '& a': {
    color: theme.palette.text.primary,
  },
})
const FootBreak = styled(Divider)({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
})
