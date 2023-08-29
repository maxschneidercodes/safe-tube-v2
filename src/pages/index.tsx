export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}
import Link from 'next/link'
import Hero from '@/components/hero'
import Header from '@/components/ui/header'

export default function Home() {
  return <>
    <Header extraCSS="" title="SafeTube.eu" titleCSS="text-gray-600" >
      <li>
        <Link className="btn-sm text-sm inline-flex items-center text-white bg-red-500 hover:bg-red-600 group shadow-sm" href="/feed">
          zum Feed
          <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
            <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
            </svg>
          </span>
        </Link>
      </li>
    </Header>
    <Hero />
  </>
}
