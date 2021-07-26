import { Typography, Button } from '@material-ui/core'
import ContentBlock from '../../components/ContentBlock'
import Divider from '../../components/Divider'
import theme, { fontGray, bgGray } from '../../src/theme'

const Next = () => {
  return (
    <>
      <ContentBlock
        background={bgGray}
        borderTop={fontGray}
        borderBottom={fontGray}
        header={`What's Next?`}
        headerColor={theme.palette.text.secondary}>
        <Divider />

        <Typography paragraph color={'textSecondary'}>
          When the Program began in 2008, DADSS focused on research and creation
          of proof-of-concept laboratory prototypes to determine which
          technologies were most promising for vehicle integration.
        </Typography>
        <Typography paragraph color={'textSecondary'}>
          In 2013, ACTS and NHTSA extended their agreement to further develop
          and test the breath-based and touch-based prototypes to reduce the
          size and ensure they meet strict performance standards related to
          speed, accuracy, precision and reliability.
        </Typography>
        <Typography paragraph color={'textSecondary'}>
          As part of the ongoing research, the prototypes will be integrated
          into vehicles for a series of field tests, which will allow engineers
          to observe driver behavior in natural settings and thoroughly test the
          systems in real-world scenarios.
        </Typography>
        <Typography paragraph color={'textSecondary'}>
          It will take time for this pioneering technology to be available
          commercially, but developing a system that is seamless, accurate and
          reliable is the first step and a top priority.
        </Typography>
        <Button
          color='primary'
          variant='contained'
          onClick={() => router.push('/news')}>
          More News & Updates
        </Button>
      </ContentBlock>
    </>
  )
}

export default Next
