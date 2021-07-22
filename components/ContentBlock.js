import { Container, styled, Typography } from '@material-ui/core'
import React from 'react'
import theme from '../src/theme'

const ContentBlock = ({
  children,
  background,
  border,
  header,
  headerColor,
  fontColor,
}) => {
  const SectionWrapper = styled('section')({
    background: background,
    borderTop: border ? `5px solid ${border}` : null,
    borderBottom: border ? `5px solid ${border}` : null,
    width: '100%',
  })
  const HeadText = styled(Typography)({
    color: headerColor ? headerColor : theme.palette.text.primary,
  })
  const ContentContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    color: fontColor ? fontColor : theme.palette.text.primary,
  })

  return (
    <SectionWrapper>
      <ContentContainer>
        <HeadText variant='h3' gutterBottom>
          {header}
        </HeadText>
        {children}
      </ContentContainer>
    </SectionWrapper>
  )
}

export default ContentBlock
