import Image from 'next/image'
import HeroImage from '@/public/images/img2.png'
import Add from './add'

export default function Hero() {
  return <section className="relative pb-10 bg-slate-900">
    <div
      className="absolute inset-0 rounded-bl-[200px] md:mb-0 bg-slate-600 pointer-events-none z-0"
      aria-hidden="true"
    />
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="pt-10 pb-20 md:pt-20 md:pb-20">
        <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
          <div className="md:w-[600px]">
            <h1 className="h2 text-white text-left mb-6 mr-10" data-aos="fade-right" data-aos-delay="100">
              YouTube <span className="relative inline-flex text-red-500 ">
                <svg
                  className="absolute left-0 top-full -mt-4 max-w-full z-10"
                  width="220"
                  height="24"
                  viewBox="0 0 220 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </svg> sicher </span> und ohne <span className="relative inline-flex text-red-500">
                <svg
                  className="absolute left-0 top-full -mt-4 max-w-full z-0"
                  width="220"
                  height="24"
                  viewBox="0 0 220 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </svg>
                Ablenkung
              </span> ansehen
            </h1>
            <p className="text-md text-left text-white mt-10 mb-10 mr-10" data-aos="fade-right" data-aos-delay="200">
              <strong>Einfach</strong> und <strong>Kostenlos</strong>. Fügen Sie Ihre Lieblings YouTube-Kanäle hinzu und sehen Sie sich die Videos ohne Ablenkungen oder unangemessene Inhalte an.
            </p>
            <div
              className="max-w-2xl sm:max-w-none sm:flex sm:justify-start md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Add welcome={true} />
            </div>
          </div>
          <div className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[600px] md:top-0 -mb-12 md:-mt-12 md:mb-0">
            <div className="relative -ml-3 -mr-24 md:mx-0">
              <Image src={HeroImage} className="rounded md:max-w-none shadow-2xl shadow-red-600" width="920" height="545" alt="Credit card" data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
    </div >
  </section >
}
