import Home from './home'
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Home />
    </>
  )
}

export default index
