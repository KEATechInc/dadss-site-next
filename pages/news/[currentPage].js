import NewsUpdates, { getStaticProps } from './'
import { sanityClient } from '../../lib/sanity'
import { newsQuery } from '../../lib/queries'

export default NewsUpdates
export { getStaticProps }

export const getStaticPaths = async () => {
	const newsUpdates = await sanityClient.fetch(newsQuery)
	const totalPosts = newsUpdates.length
	const pageCount = Math.ceil(totalPosts / 5)

	const paths = Array(pageCount)
		.fill('')
		.map((_, index) => {
			return { params: { currentPage: (index + 1).toString() } }
		})

	return {
		paths: paths,
		fallback: false,
	}
}
