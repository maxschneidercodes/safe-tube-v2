import Link from 'next/link'

export default function Header(props: any) {

  const { title, titleCSS, extraCSS, buttonTitle } = props

  return (
    <header className={`relative bg-gray-800 w-full z-30 ` + props.extraCSS}>
      <div className="max-w-8xl mx-auto ">
        <div className="flex flex-wrap items-center justify-between p-4">
          <div id="headerLink" className="">
            <Link className={`text-3xl font-bold ${titleCSS}`} href="/" aria-label="SafeTube.eu" >
              {title}
            </Link>
          </div>
          <nav id="headerButton" className=" flex flex-wrap">
            <ul className="flex flex-wrap items-center">
              {props.children}
            </ul>
          </nav>
        </div>
      </div>
    </header >
  )
}
