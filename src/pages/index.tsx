export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Header from '@/components/ui/header'

export default function Home() {
  return <>
    <Header />
    <Hero />
  </>
}
