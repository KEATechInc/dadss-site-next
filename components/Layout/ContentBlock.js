import { Container, styled, Typography } from '@material-ui/core'
import React from 'react'
import theme from '../../src/theme'
import Divider from './Divider'

const ContentBlock = ({
  children,
  background,
  borderTop,
  borderBottom,
  header,
  headerColor,
  divider,
  dividerColor,
  fontColor,
  linkColor,
  sidebar,
  sticky,
  noPadding,
  shadow,
  fullHeight,
}) => {
  const SectionWrapper = styled('section')({
    display: 'flex',
    background: background,
    borderTop: borderTop ? `3px solid ${borderTop}` : null,
    borderBottom: borderBottom ? `3px solid ${borderBottom}` : null,
    width: '100%',
    height: fullHeight ? '100%' : null,
    position: sticky ? 'sticky' : null,
    top: sticky ? 74 : null,
    boxShadow: shadow ? theme.shadows[3] : null,
  })
  const HeadText = styled(Typography)({
    color: headerColor ? headerColor : theme.palette.primary.main,
  })
  const ContentContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: noPadding ? 0 : sidebar ? 0 : theme.spacing(4),
    paddingBottom: noPadding ? 0 : theme.spacing(4),
    paddingRight: sidebar ? 0 : null,
    color: fontColor ? fontColor : theme.palette.text.primary,
    '& a': {
      color: linkColor ? linkColor : null,
    },
  })

  return (
    <SectionWrapper>
      <ContentContainer>
        {header ? (
          <HeadText
            variant='h3'
            align='center'
            gutterBottom
            style={{ textTransform: 'capitalize' }}>
            {header}
          </HeadText>
        ) : null}
        {divider ? <Divider color={dividerColor} /> : null}
        {children ? children : null}
      </ContentContainer>
    </SectionWrapper>
  )
}

export default ContentBlock
