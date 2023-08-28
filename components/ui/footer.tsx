import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {

  return (
    <footer className="relative ">
      <div className="absolute inset-0  -z-10" aria-hidden="true" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 p-10 ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 py-8 ">
          <div className="mb-10 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-center text-lg text-blue-400 font-bold mb-3"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 text-center">Seiten</span></h6>
            <ul className="text-center text-sm font-[450] space-y-2">
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="/impressum">
                  Impressum
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="/datenschutzerklaerung">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-lg text-blue-400 font-bold mb-3 text-center"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Kontakt</span></h6>
            <ul className="text-center text-sm font-[450] space-y-2">
              <li>
                <a href="https://wa.me/491782828880/?text=Hallo," className=" text-slate-400 hover:text-blue-900 hover:underline transition duration-150 ease-in-out text-sm ">WhatsApp</a>
              </li>
              <li>
                <a href="mailto:info@maxschneidercodes.de" className=" text-slate-400 hover:text-blue-900 hover:underline transition duration-150 ease-in-out text-sm ">info@maxschneidercodes.de</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="pt-10 md:pb-8">
          <div className="text-xs text-slate-500 text-center ">
            <div className="flex justify-center mr-4" >
              <Link href="https://maxschneidercodes.de" className="block mt-2" aria-label="maxschneidercodes" >
                <Image unoptimized={true} alt="" src={"/images/logo2.png"} width={320} height={100} />
              </Link>
            </div>
            <p className="font-medium">
              &copy; 2023 Max Schneider. Alle Rechte vorbehalten.
            </p>{' '}
          </div>
        </div>
      </div>
    </footer >
  )
}
