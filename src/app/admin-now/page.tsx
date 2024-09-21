
export default function Signup () {
  return (
    <div className="p-5">
      <div className="py-5 bg-red-300 rounded-3xl pt-14">
        <div className="w-full border-y-2 border-indigo-500 py-2">
          <div className="w-full border-y-2 border-indigo-500">
            <div className="flex justify-between max-w-7xl mx-auto  px-3 sm:px-10">        
              <div className="flex items-center">
                <span className="text-4xl">O</span>
                <span className="px-3 text-xl font-medium">Radiant</span>
                <span className="hidden lg:flex bg-red-500 rounded-lg px-3 text-white me-3">
                  Radiantraises $100M Series A from Tailwind Ventures
                </span>
              </div>
              <div className="lg:max-w-96 lg:w-full">
                <ul className="hidden lg:flex max-w-96 justify-between w-full py-5 text-lg font-medium">
                  <li>Pricing</li>
                  <li>Company</li>
                  <li>Blog</li>
                  <li>Login</li>
                </ul>
                <span className="lg:hidden">☰</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-3 sm:px-10 py-32">
          <h1 className="text-8xl font-semibold">Close every deal.</h1>
          <h5 className="max-w-md pe-12 text-xl font-medium my-10">Radiant you sell more by revealing sensitive information about your customers</h5>
          <div >
            <button 
              type="button" 
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Default
            </button>
            <button 
              type="button" 
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Green
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}