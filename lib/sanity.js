import {
	createClient,
	createImageUrlBuilder,
	createPortableTextComponent,
	createPreviewSubscriptionHook,
	createCurrentUserHook,
} from 'next-sanity'

const config = {
	dataset: 'production',
	projectId: '9i9p7w70',
	useCdn: true,
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the live preview subsscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
	...config,
	// Serializers passed to @sanity/block-content-to-react
	// (https://github.com/sanity-io/block-content-to-react)
	serializers: {
		types: {
			image: (props) => (
				<figure>
					<div className='FigWrapper'>
						<img
							src={urlFor(props.node.asset).url()}
							alt={props.node.alt}></img>
						<p>{props.node.caption}</p>
					</div>
				</figure>
			),
		},
	},
})

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)
// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
	...config,
	useCdn: false,
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
	usePreview ? previewClient : sanityClient

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
