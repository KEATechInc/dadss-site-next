import '../styles/globals.css'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
	const router = useRouter()

	useEffect(() => {
		router.events?.on('routeChangeComplete', () => {
			window.scrollTo(0, 0)
		})
	}, [])

	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
