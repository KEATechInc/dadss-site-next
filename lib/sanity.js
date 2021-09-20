import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity'

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
          <figure>
            <div className='FigWrapper'>
              <Image
                src={urlFor(props.node.asset).url()}
                alt={props.node.alt}
                height={450}
                width={800}
                layout='intrinsic'
              />
              <p>{props.node.caption}</p>
            </div>
          </figure>
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
          <a href={mark.href} target='_blank' rel='noreferrer'>
            {children}
          </a>
        ) : (
          <a href={mark.href}>{children}</a>
        )
      },
    },
  },
})

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

