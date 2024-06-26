import Link from 'next/link'
import { useState } from 'react'

export default function Header(props: any) {

  const { title, titleCSS } = props

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`relative bg-slate-100 w-full z-30 ` + props.extraCSS}>
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className={`text-3xl font-bold ${titleCSS} text-[#0f172a]`} href="/" aria-label="SafeTube.eu" >
          {title}
        </Link>
        <button onClick={() => {
          setIsOpen(!isOpen)
        }} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col  p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {props.children}
          </ul>
        </div>
      </div>
    </header >
  )
}
