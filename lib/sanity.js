import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
} from 'next-sanity'

import { Box, Paper, styled, Typography } from '@material-ui/core'
import { dadssGradient } from '../src/theme'

import Image from 'next/image'
import Video from '../components/Layout/Video'

const config = {
  dataset: process.env.dataset,
  projectId: process.env.project_id,
  useCdn: process.env.use_cdn,
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    types: {
      image: function imageHandler(props) {
        return (
          <Figure>
            <Paper className='FigWrapper' style={{ background: dadssGradient }}>
              <Image
                src={urlFor(props.node.asset).url()}
                alt={props.node.alt}
                layout='intrinsic'
                width={1920}
                height={1080}
                objectFit='cover'
                objectPosition='center'
              />
              {props.node.caption && (
                <Box p={1}>
                  <Typography color='textSecondary' variant='subtitle2'>
                    {props.node.caption}
                  </Typography>
                </Box>
              )}
            </Paper>
          </Figure>
        )
      },
      youtube: function youtubeHandler({ node }) {
        const { url } = node
        return <Video videoUrl={url} />
      },
    },
    marks: {
      link: function linkHandler({ children, mark }) {
        return mark.blank ? (
          <Atag href={mark.href} target='_blank' rel='noreferrer'>
            {children}
          </Atag>
        ) : (
          <Atag href={mark.href}>{children}</Atag>
        )
      },
    },
  },
})

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

const Atag = styled('a')({
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
})
const Figure = styled('figure')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  '& .FigWrapper': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
})
