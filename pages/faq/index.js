import styled from 'styled-components'
import {
  ContentBlock,
  Content,
  HeadBlock,
  Header1,
  Header3,
  Hyperlink,
  Break,
  Circle,
} from '../../styles/generalStyles'
import Head from 'next/head'

const FAQ = () => {
  const description = `What is the Driver Alcohol Detection System for Safety (DADSS)
	research program? Learn about this and more in our FAQ section.`

  return (
    <>
      <Head>
        <title>DADSS | FAQ</title>
        <meta name='description' content={description} />
      </Head>
      <FAQWrapper>
        <HeadBlock>
          <Header1>Frequently Asked Questions</Header1>
          <Break>
            <hr />
            <Circle />
            <hr />
          </Break>
        </HeadBlock>
        <ContentBlock className='FAQWrapper'>
          <Header3>
            What is the Driver Alcohol Detection System for Safety (DADSS)
            research program?
          </Header3>
          <Content>
            The Driver Alcohol Detection System for Safety (DADSS) Research
            Program is developing a first-of-its-kind alcohol detection
            technology that can detect when a driver is impaired with a blood
            alcohol content (BAC) at or above the legal limit of 0.08% and will
            prevent the car from moving. Once DADSS technology has met vigorous
            performance standards, it will be voluntarily offered to vehicle
            owners as a safety option, similar to other driver assist systems
            like automatic braking or lane departure warning.
          </Content>
          <Content>
            The Program brings together the Automotive Coalition for Traffic
            Safety (ACTS), which represents the world’s leading automakers, and
            the National Highway Traffic Safety Administration (NHTSA), in one
            of the most important government and private sector partnerships in
            recent years. Public-private partnerships like DADSS have led to
            innovations that enhance our everyday lives, such as the internet,
            GPS and the microchip.
          </Content>
          <Header3>What is the overall goal of the program?</Header3>
          <Content>
            DADSS is a collaborative research program dedicated to advancing the
            state of alcohol detection systems for vehicles. Despite progress
            over the past three decades, drunk driving in the U.S. claims
            approximately 10,000 lives and costs the U.S. $194 billion every
            year. The DADSS Program is developing a first-of-its-kind technology
            that holds the greatest promise we have seen to reverse this trend.
            With support from safety advocates and the auto industry, Congress
            has recognized the Program’s life-saving potential and made it part
            of a multi-faceted national commitment to reduce and help eliminate
            drunk driving.
          </Content>
          <Header3>When did this program begin and where is it now?</Header3>
          <Content>
            When the Program began in 2008, DADSS focused on research and
            creation of proof-of-concept prototypes to determine which
            technological approaches were most promising for vehicle
            integration. After extensive research, it was determined that two
            technology options were most viable: a breath-based system and a
            touch-based system.
          </Content>
          <Content>
            In 2013, ACTS and NHTSA extended their agreement, and the Program
            entered a new phase to reduce the size of the systems and ensure
            strict performance specifications are met relating to speed,
            accuracy, precision and reliability. As part of the ongoing
            research, the prototypes will be integrated in vehicles for a series
            of field tests, which will allow engineers to observe driver
            behavior in natural settings and thoroughly test the systems in
            real-world scenarios. Once completed, auto manufacturers will be
            able to offer the system as a safety option in new vehicles. It will
            take time for this pioneering technology to be available
            commercially, but developing a system that is seamless, accurate and
            reliable is the first step and a top priority.
          </Content>
          <Header3>Who is involved in this program?</Header3>
          <Content>
            The Automotive Coalition for Traffic Safety (ACTS) and the National
            Highway Traffic Safety Administration (NHTSA) are working together
            in collaborative research to develop the DADSS technology. ACTS is a
            nonprofit organization wholly funded by the world’s leading auto
            makers, including BMW, Fiat Chrysler Automobiles, Ford, General
            Motors, Honda, Hyundai, Jaguar Land Rover, Kia, Mazda,
            Mercedes-Benz, Mitsubishi, Nissan, Porsche, Subaru, Toyota,
            Volkswagen and Volvo.
          </Content>
          <Header3>How might the technology work?</Header3>
          <Content>
            Two technologies are being researched: a touch-based and a
            breath-based system. The breath-based system measures alcohol as a
            driver breathes normally, when in the driver’s seat. It will be
            designed to take instantaneous readings as the driver breathes
            normally and to accurately and reliably distinguish between the
            driver’s breath and that of any passengers. The touch-based system
            measures blood alcohol levels under the skin’s surface by shining an
            infrared-light through the fingertip of the driver. It will be
            integrated into current vehicle controls, such as the start button
            or steering wheel, and take multiple, accurate readings.
          </Content>
          <Header3>Will the technology be sufficiently reliable?</Header3>
          <Content>
            A significant part of the DADSS Research Program has been the
            establishment of DADSS Performance Specifications related to speed,
            accuracy, precision and reliability. These rigorous standards are
            based on the Department of Defense’s technology and manufacturing
            readiness levels, and they are in addition to manufacturers’
            six-sigma quality requirements, which demand that every piece of
            safety equipment installed in passenger vehicles as original
            equipment performs correctly 99.9997% of the time.
          </Content>
          <Content>
            With this combination, the DADSS technology will be held to
            unprecedented standards to ensure BAC levels are measured quickly
            and reliably. Not even medical instruments are engineered to have
            such strict specifications. The DADSS Program is being overseen by a
            team of engineers and scientists, and will be further tested in
            real-world operating conditions and by independent third parties
            before being made available as a consumer option.
          </Content>
          <Header3>
            How is DADSS technology different from interlocks and existing
            alcohol sensing technology?
          </Header3>
          <Content>
            The DADSS technology is not an ignition interlock but rather a
            driver assistance system. First, the system is being designed to
            take accurate, unobtrusive readings in less than a second while the
            driver interacts with the vehicle as they would otherwise. Second,
            the system will be offered as a voluntary safety option in new
            vehicles much like automatic braking, lane departure warning and
            other advanced driver-assist vehicle technologies. Third, the system
            will meet strict performance standards related to speed, accuracy,
            precision and reliability that are higher than any other alcohol
            detection technology available today. And finally, the alcohol
            detection will be set at 0.08%, the legal limit for every state
            except Utah.
          </Content>
          <Header3>
            How is this going to stop people who are most likely to drink and
            drive?
          </Header3>
          <Content>
            The DADSS technology is designed to take the guesswork out of BAC
            measurement and give drivers the certainty they will never put
            themselves or others in danger by driving over the legal limit. The
            system can also give parents an extra layer of protection and
            additional peace of mind knowing that if their children have been
            drinking, they won’t be able to drive.
          </Content>
          <Content>
            For the first time, all drivers will be able to take advantage of a
            system that is seamless and nonintrusive, representing a
            breakthrough in technology and vehicle safety. We believe that
            consumers will want to purchase the technology as a safety option
            once they learn more about its life-saving potential.
          </Content>
          <Header3>
            Can the technology be set at a limit other than 0.08?
          </Header3>
          <Content>
            The national Program was authorized and funded under strict
            performance specifications based on a blood alcohol concentration
            (BAC) level of 0.08% – the legal limit in every state except Utah.
            While the DADSS Program is aware of the developments in Utah, they
            do not affect the research being conducted, and the Program will
            continue its direction based on the national standard of 0.08%. The
            exception is for underage drivers. Since no level of alcohol is
            legal for drivers under 21, parents can have the system programmed
            for a zero-tolerance policy.
          </Content>
          <Header3>
            When do you expect the system to be in U.S. cars and trucks?
          </Header3>
          <Content>
            Based on the latest results from the lab, we are nearing the date
            when we’re ready to move out of the lab and onto the roads for the
            first in-vehicle tests. These Pilot Field Operation Tests (PFOTs)
            are an early assessment of the DADSS technology designed to test the
            prototypes in regular driving conditions and to better understand
            how drivers interact with the sensors.
          </Content>
          <Content>
            Pilot manufacturing, vehicle installations and field operation tests
            will take place beginning in 2018. The DADSS Research Program will
            use the information gathered in these tests to narrow gaps between
            actual performance and the performance specifications that need to
            be met to allow widespread use, make improvements to the technology
            for long-term installation in cars and trucks and bring us one step
            closer to the day when the technology is ready to be offered to both
            automakers and consumers as an optional safety system.
          </Content>
          <Header3>
            Will DADSS technology be installed in every new car and truck?
          </Header3>
          <Content>
            The national Program was authorized and funded as a research program
            to advance the state of alcohol detection technology. Congress did
            not mandate the use of any technology in the authorization. When the
            Program is complete, automakers can further develop and install the
            technology into cars and trucks. They will be able to offer the
            system voluntarily in new cars the way they do for other advanced
            vehicle technology features, such as lane departure warning or
            automatic braking, and consumers will have the choice whether they
            want to purchase it as a safety option.
          </Content>
          <Header3>What happens when a driver is over the legal limit?</Header3>
          <Content>
            With the alcohol detection technology, when a driver has a blood
            alcohol concentration (BAC) above the legal limit of 0.08%, the
            vehicle will start, but not move. This allows the driver to remain
            warm (or cool) and safe in the vehicle, make a call for help or
            charge a phone. The system will reset and be ready for another test
            less than a second after each reading, and will move only when the
            driver’s BAC is below the legal limit.
          </Content>
          <Header3>
            How will the technology be able to tell the difference between
            drivers and passengers?
          </Header3>
          <Content>
            The alcohol detection technology is being designed to accurately
            distinguish between the driver and other passengers. The touch-based
            technology could, for example, be based on a touchpoint programmed
            by the driver, similar to today’s smart phones, which could also
            serve as an anti-theft measure. The breath-based technology is
            testing sensors near the driver’s seat to best isolate the driver’s
            breath. Either system will require a retest if the person in the
            driver’s seat gets out of the seat and another person sits down.
          </Content>
          <Header3>How will the technology prevent tampering?</Header3>
          <Content>
            Because the technology will be seamless and integrated into the
            vehicle’s cabin, it will not contain large pieces of physical
            equipment that could be tampered with from inside the vehicle.
          </Content>
          <Header3>
            Will DADSS technology be installed in every new car and truck?
          </Header3>
          <Content>
            Yes, the technology will be an additional cost for those who choose
            to purchase it as a safety option for their new vehicle. While the
            exact cost per vehicle has not yet been established, it will be in
            line with other voluntary safety systems like automatic braking or
            lane departure warning. As with any new technology, the more
            vehicles are equipped with the system, the lower the price will be.
          </Content>
          <Header3>
            Will data on tests be recorded or shared with law enforcement?
          </Header3>
          <Content>
            Maintaining data privacy has been considered from the early stages
            of the DADSS Program and remains an important priority for all those
            involved. Both the legislation authorizing the Program and the
            cooperative agreement ACTS and NHTSA are operating under state
            specifically that security measures and operating procedures must be
            put in place to protect data from the inadvertent release or
            disclosure to unauthorized parties.
          </Content>
          <Content>
            Today, all automakers have security measures in place to protect
            customer data from being accessed by unauthorized parties, and DADSS
            will be no different. In the meantime, the leading automakers
            involved in the DADSS Program have joined with consumer advocacy
            groups to establish voluntary privacy principles and to provide
            standards and guidance on future in-vehicle technologies. For more
            about these principles,{' '}
            <Hyperlink
              href='https://autoalliance.org/connected-cars/automotive-privacy/'
              target='_blank'
              referrer='noreferrer'>
              click here.
            </Hyperlink>
          </Content>
          <Header3>Will the system test for drugs such as marijuana?</Header3>
          <Content>
            The sole focus of the DADSS Program is on developing a system that
            detects a driver’s alcohol concentration. In theory, a similar
            system can be developed that might detect when drivers are under the
            influence of THC but the development of such a system would present
            additional challenges beyond those faced by an alcohol detection
            technology. For example, drugs like marijuana linger in the system
            longer than alcohol, and researchers have not yet determined where
            the legal limit should be set. These challenges, and more, face
            researchers as they look at the different types of drugs that could
            affect safe driving behavior, whether over-the-counter, prescription
            or illegal.
          </Content>
          <Header3>
            Why would an Alcohol Detection System be necessary if we are
            eventually going to have driverless cars?
          </Header3>
          <Content>
            Self-driving cars are a key part of the future of vehicle technology
            and vehicle safety. However, the same questions of reliability,
            policy and liability that face the alcohol detection system face
            self-driving cars, but on a larger scale. While it may be
            technically possible to have a self-driving vehicle in the next
            decade, these early models will rely heavily on the ability of an
            unimpaired driver to take control of the wheel as a precaution.
            Self-driving car technology is still decades away from completely
            removing the need for an unimpaired driver.
          </Content>
        </ContentBlock>
      </FAQWrapper>
    </>
  )
}

const FAQWrapper = styled.div`
  margin-top: 85px;

  .FAQWrapper {
    h3 {
      width: 100%;
      text-align: left;
    }
  }
`

export default FAQ
