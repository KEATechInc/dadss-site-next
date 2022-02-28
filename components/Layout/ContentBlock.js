import { Container, styled, Typography } from '@mui/material'
import React from 'react'
import theme, { darkOrange } from '../../src/theme'
import Divider from './Divider'
import { urlFor } from '../../lib/sanity'
import Image from 'next/image'

const ContentBlock = ({
  children,
  background,
  borderTop,
  borderBottom,
  header,
  headerImage,
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
    borderTop: borderTop ? `2px solid ${borderTop}` : null,
    borderBottom: borderBottom ? `2px solid ${borderBottom}` : null,
    width: '100%',
    height: fullHeight ? '100%' : null,
    position: sticky ? 'sticky' : null,
    top: sticky ? 74 : null,
    boxShadow: shadow ? theme.shadows[3] : null,
    '& .btnWrap:hover': {
      textDecoration: 'none',
    },
  })
  const HeadText = styled(Typography)({
    color: headerColor ? headerColor : theme.palette.primary.main,
  })
  const ContentContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: noPadding ? 0 : sidebar ? 0 : theme.spacing(5),
    paddingBottom: noPadding ? 0 : theme.spacing(5),
    paddingRight: `${sidebar ? 0 : null} !important`,
    color: fontColor ? fontColor : theme.palette.text.primary,
    '& a': {
      color: linkColor ? linkColor : darkOrange,
      fontWeight: 'bold',
    },
  })

  return (
    <SectionWrapper>
      <ContentContainer>
        {headerImage && (
          <Image
            style={{ marginBottom: 16 }}
            src={urlFor(headerImage)}
            alt=''
            height={150}
            width={250}
          />
        )}
        {header && (
          <HeadText
            variant='h2'
            align='center'
            gutterBottom
            style={{ textTransform: 'capitalize' }}>
            {header}
          </HeadText>
        )}
        {divider ? <Divider color={dividerColor} /> : null}
        {children ? children : null}
      </ContentContainer>
    </SectionWrapper>
  )
}

export default ContentBlock
