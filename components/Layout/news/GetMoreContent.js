import React from 'react'
import { Divider, Grid, Paper, Typography } from '@mui/material'
import UrlCheck from './UrlCheck'
import { Box, styled } from '@mui/system'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import theme from '../../../src/theme'

const GetMoreContent = ({ postLinks, currentPost, postTitles }) => {
  if (postLinks) {
    return (
      <div>
        <Box pt={3} pb={1}>
          <Divider />
        </Box>
        <DirectoryWrap container>
          <Grid item xs={12}>
            <Typography variant='h4' color='primary' gutterBottom>
              More Updates About DADSS
            </Typography>
          </Grid>

          <Grid container item spacing={2} mt={2}>
            <Grid item md={6}>
              {currentPost < postLinks.length ? (
                <UrlCheck link={postLinks[currentPost + 1]}>
                  <GoToButton>
                    <ArrowBackIcon className='left' />
                    <Typography
                      sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                      {postTitles[currentPost + 1]}
                    </Typography>
                  </GoToButton>
                </UrlCheck>
              ) : null}
            </Grid>

            <Grid item md={6}>
              {currentPost > 0 ? (
                <UrlCheck link={postLinks[currentPost - 1]}>
                  <GoToButton>
                    <Typography
                      sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                      {postTitles[currentPost - 1]}
                    </Typography>
                    <ArrowForwardIcon className='right' />
                  </GoToButton>
                </UrlCheck>
              ) : null}
            </Grid>
          </Grid>
        </DirectoryWrap>
      </div>
    )
  }
  return null
}

export default GetMoreContent

const DirectoryWrap = styled(Grid)({
  marginTop: 16,
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
})
const GoToButton = styled(Paper)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: 16,
  cursor: 'pointer',
  height: '100%',
  transition: `.2s ease`,
  '&:hover': {
    boxShadow: theme.shadows[3],
    color: theme.palette.primary.main,
  },
  '& svg.left': {
    marginRight: 8,
    marginBottom: 8,
  },
  '& svg.right': {
    marginLeft: 8,
    marginBottom: 8,
  },
})
