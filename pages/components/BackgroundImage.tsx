import Image from 'next/image'

import backgroundImage from '../../public/assets/black_cross.png'
import circle from '../../public/assets/circle-scatter-haikei(2).svg'

export default function BackgroundLayout({ children }:any) {
  return (
    <>
      <div className=" relative flex min-h-screen justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
          <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            {children}
          </div>
        </div>
        <div className="hidden bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 sm:contents lg:relative lg:block lg:flex-1">
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            src={backgroundImage}
            alt=""
            unoptimized
          />
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-50"
            src={circle}
            alt=""
            unoptimized
          />
          {/* <div className='absolute inset-0 w-full h-full opacity-30'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L60,213.3C120,235,240,277,360,266.7C480,256,600,192,720,186.7C840,181,960,235,1080,224C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

          </div> */}
        </div>
      </div>
    </>
  )
}