import { Navbar } from '@/components/Navbar'
import { Layout } from '@/layout/layout'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>

  )
}
