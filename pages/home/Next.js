import { Typography, Button } from '@mui/material'
import ContentBlock from '../../components/Layout/ContentBlock'
import { useRouter } from 'next/router'
import Link from 'next/link'

const pr = '/assets/resources/Press Release_Dec 8 Event.pdf'

const Next = () => {
  const router = useRouter()
  return (
    <>
      <ContentBlock header={`Program History & Timeline`} divider>
        <Typography paragraph>
          The DADSS Program began in 2008 and was focused on research and
          creation of proof-of-concept prototypes to determine which
          technological approaches were most promising for vehicle integration.
          After extensive research, it was determined that the breath system and
          touch system were most viable.
        </Typography>
        <Typography paragraph>
          Since that time, the Program has focused on ensuring the technology
          meets strict performance specifications related to accuracy, precision
          and reliability, so sober drivers are not inconvenienced, and so drunk
          drivers are never allowed to operate the vehicle.
        </Typography>
        <Typography paragraph>
          In 2018, the Commonwealth of Virginia announced the{' '}
          <Link href='/driven-to-protect/virginia'>first trial deployment</Link>{' '}
          with James River Transportation (JRT) to conduct in-vehicle, on-road
          test trials of the technology with sober drivers in naturalistic
          settings. This initiative, called Driven to Protect, was expanded to
          Maryland in 2019. That same year, the Program expanded on-road testing
          to include controlled, in-vehicle tests with drinking passengers, to
          determine how the sensors respond to real-world conditions. Those
          tests continue today.
        </Typography>
        <Typography paragraph>
          In 2021, the Program announced the{' '}
          <a
            href='https://www.actsautosafety.org/announcementpage?fbclid=IwAR1wAvDwsa5fIeB9RnkWAWfKIwCd7ykbCD5rwiaXThy-cpSnNcqC3Pzxm9I'
            target='_blank'
            rel='noreferrer'>
            first-generation system
          </a>{' '}
          equipped with the breath technology will be made available for open
          licensing in fleet vehicles for the first time ever. ACTS will begin
          licensing the technology to interested parties and a product equipped
          with the breath technology will be made available in late 2021 to any
          existing fleet or company that wants to outfit it into their vehicles
          – whether it be transportation vehicles, government fleets, rental
          cars, transportation vehicles, trucking companies, etc. This system is
          designed for fleet operators implementing a zero-tolerance alcohol
          policy for their drivers.
        </Typography>
        <Typography paragraph>
          Today, teams of engineers, chemists and data scientists are working to
          reduce the size of the sensors so they are small enough to fit into
          passenger vehicles, can withstand harsh environmental conditions, do
          not require extensive calibration and can last the entire lifetime of
          a vehicle. Previous transportation safety innovations like airbags
          have taken a minimum of 20 years to be tested and approved for the
          public’s use, and the DADSS Program is on track to be completed in
          less time.
        </Typography>
        <Typography paragraph>
          Also in 2021, announced the{' '}
          <a href={pr} target='_blank' rel='noreferrer'>
            largest trial deployment
          </a>{' '}
          of DADSS technology to date, through a new trial deployment with
          Schneider, the first truckload carrier to collaborate with the
          Initiative. The pilot will help generate hundreds of thousands of
          real-world operating miles needed to commercialize fully passive
          vehicle-integrated breath technology — marking a new milestone toward
          the widespread deployment of the DADSS technology.
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
