import Link from 'next/link'

export default function Header() {
  return (
    <header className="relative bg-gray-800 w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between h-16 md:h-20">
          <div id="headerLink" className="shrink-0 mr-4">
            <Link className="text-xl text-white font-bold" href="/" aria-label="SafeTube.eu" >
              SafeTube.eu
            </Link>
          </div>
          <nav id="headerButton" className="flex grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="ml-3">
                <Link className="btn-sm text-sm inline-flex items-center text-white bg-red-500 hover:bg-red-600 group shadow-sm" href="/feed">
                  zum Feed
                  <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                    <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header >
  )
}
