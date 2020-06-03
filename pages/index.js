import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MUHAMMAD RAFLY RAMADHAN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white h-full my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm  shadow-2xl mx-auto">
        <div className="relative h-40">
          <img className="absolute h-full w-full object-cover" src="https://cdn.pixabay.com/photo/2016/01/19/14/47/laptop-work-1148958_960_720.jpg" />
        </div>
        <div className="relative shadow mx-auto h-48 w-48 -my-12 border-white rounded-full overflow-hidden border-4">
          <img className="object-cover w-full h-full" src="/me2.jpeg" />
        </div>
        <div className="mt-16">
          <h1 className="text-lg text-center font-semibold">
            MUHAMMAD RAFLY RAMADHAN 
          </h1>
          <p className="text-sm text-gray-600 text-center">
            FULL STACK DEVELOPER
          </p>
        </div>
        <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t justify-center">
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-red-600 border-red-600 hover:bg-red-600 hover:text-red-100 cursor-default">
            CodeIgniter
          </div>
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-blue-100 cursor-default">
            Bootstrap
          </div>
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-orange-100 cursor-default">
            HTML
          </div>
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
            CSS
          </div>
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-yellow-100 cursor-default">
            JavaScript
          </div>
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-blue-100 cursor-default">
            jQuery
          </div>
        </div>
      </div>
    </div>
  )
}
