import React from 'react'
import { useRouter } from 'next/router'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({ children }) => {
  const router = useRouter()

	router.events?.on('routeChangeComplete', () => {
		window.scrollTo(0, 0)
	})

	return (
		<>
			<Navbar></Navbar>
			{children}
			<Footer></Footer>
		</>
	)
}

export default Layout
