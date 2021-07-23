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
    borderTop: border ? `3px solid ${border}` : null,
    borderBottom: border ? `3px solid ${border}` : null,
    width: '100%',
  })
  const HeadText = styled(Typography)({
    color: headerColor ? headerColor : theme.palette.primary.dark,
  })
  const ContentContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
