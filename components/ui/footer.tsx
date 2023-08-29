import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return <footer className="bg-gray-700">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
        <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
          <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
            <div className="mb-4 sm:mb-0">
              <div className="">
                <Link className="block" href="https://maxschneidercodes.de" aria-label="Cruip">
                  <Image src="/images/logo2.png" width={300} height={150} priority alt="Stellar" />
                </Link>
              </div>

              <ul className="text-xs ml-8 space-y-2 ">
                <li>
                  <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="DVJ228DZDZJEA" />
                    <input type="image" src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Spenden mit dem PayPal-Button" />
                    <img alt="" src="https://www.paypal.com/de_DE/i/scr/pixel.gif" width="1" height="1" />
                  </form>

                </li>
                <li>
                  <a className="text-slate-500 hover:text-blue-500 transition duration-150 ease-in-out" href="/impressum">
                    Impressum
                  </a>
                </li>
                <li>
                  <a className="text-slate-500 hover:text-blue-500 transition duration-150 ease-in-out" href="/datenschutzerklaerung">
                    Datenschutzerklärung
                  </a>
                </li>
              </ul>
              <div className="text-xs ml-8 text-slate-500 mt-4">© 2023 Max Schneider. <span className="text-slate-500">-</span> Alle Rechte vorbehalten.</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
}
