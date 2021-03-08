import {
	createClient,
	createImageUrlBuilder,
	createPortableTextComponent,
	createPreviewSubscriptionHook,
	createCurrentUserHook,
} from 'next-sanity'

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
		marks: {
			link: ({ children, mark }) =>
				mark.blank ? (
					<a href={mark.href} target='_blank' rel='noreferrer'>
						{children}
					</a>
				) : (
					<a href={mark.href}>{children}</a>
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
	token:
		'skhIFVmN2AUmFxzIh2guSUpEPBe9IXVYM7Az9YJz2ArScZzUBEanpyI1ScvzcxICHHxSAhOBrNwKn0gfYpDLe5KQp9OfSoG43jGIuRH0yBxvhKgHjB2CONNS5gDw874mGz28KbCfJqgY07HvsgWtNIBojRcxdceQHCf68I58qMFiRx3ZhVDQ',
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
	usePreview ? previewClient : sanityClient

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
