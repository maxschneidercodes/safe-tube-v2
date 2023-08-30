export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}
import Link from 'next/link'
import Hero from '@/components/hero'
import Header from '@/components/ui/header'

export default function Home() {
  return <>
    <Header extraCSS="" title="SafeTube.eu" titleCSS="text-white">
      <li>
        <Link className="btn-sm text-sm inline-flex items-center text-white bg-red-500 hover:bg-red-600 group shadow-sm" href="/feed">
          zum Feed
        </Link>
      </li>
    </Header>
    <Hero />
  </>
}
