import { Typography } from '@material-ui/core'
import Head from 'next/head'
import ContentBlock from '../../components/Layout/ContentBlock'

const Terms = () => {
  const description = `By utilizing this site, you assume full responsibility for ensuring\
	your appropriate use and reliance upon the information and agree to\
	hold harmless ACTS and DADSS sponsors and partners for any claims\
	connected to your use of the information, other than those resulting\
	from ACTS violation of any third party’s proprietary rights.`

  return (
    <>
      <Head>
        <title>DADSS | Terms</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <ContentBlock header='Terms And Conditions' divider>
          <Typography paragraph>
            Except for ACTS warranty that the information contained in the DADSS
            website has been provided from what it believes are reliable
            sources, the information in the DADSS website is provided “as is”
            and{' '}
            <b>
              no representation or warranty, express or implied, including any
              warranty of merchantability or of fitness for a particular purpose
              is made regarding the information. ACTS disclaims all
              responsibility and liability for the accuracy, completeness or
              currentness of the website.
            </b>
          </Typography>
          <Typography paragraph>
            By utilizing this site, you assume full responsibility for ensuring
            your appropriate use and reliance upon the information and agree to
            hold harmless ACTS and DADSS sponsors and partners for any claims
            connected to your use of the information, other than those resulting
            from ACTS violation of any third party’s proprietary rights.
          </Typography>
        </ContentBlock>
      </main>
    </>
  )
}

export default Terms
