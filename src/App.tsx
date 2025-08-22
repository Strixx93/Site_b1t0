import './App.css';
import starLogo from './assets/starLogo.svg';
import ftc from  './assets/ftc.svg'
import spon from './assets/spon.svg'
import toxt from './assets/toxt.svg'

// The main App component that creates the full-page layout
function App() {
  return (
    <>
      {/* Fixed header container */}
      <div className='fixed top-0 left-0 right-0 z-50 px-5 backdrop-blur-sm'>
        {/* Nav bar without the extra margins */}
        <div className='text-white bg-transparent flex h-15 w-full justify-center items-center rounded-3xl border-3 border-solid border-violet-500/70'>
          <div className='bg-transparent flex w-full h-full justify-start items-center'>
            <p className='text-xl mx-4'>Star B1T0 Robotics</p>
          </div>
          <div className='bg-transparent flex w-full h-full justify-center items-center'>
            <button className='bg-violet-500/70 py-2 px-4 rounded-full'>Donate</button>
          </div>
          <div className='bg-transparent flex w-full h-full justify-end items-center'>
            <button className='bg-zinc-900 py-2 px-4 mx-2 rounded-full'>Home</button>
            <button className='bg-zinc-900 py-2 px-4 mx-2 rounded-full'>Resources</button>
            <button className='bg-zinc-900 py-2 px-4 mx-2 rounded-full'>Contact</button>
          </div>
        </div>
      </div>

      {/* First section with padding-top to account for fixed header */}
      <div className='flex flex-col h-screen w-screen pt-20 bg-zinc-950'>
        <div className='flex flex-row flex-1'>
          <div className='bg-zinc-950 flex-1 flex flex-row justify-center items-start'>
            <img className='w-90 mt-15 md:mt-15 lg:mt-15' src={ftc} alt="" />
          </div>

          <div className='bg-zinc-950 flex-1 flex flex-row justify-center items-start'>
            <img className="w-100 -mt-20 md:-mt-20 lg:-mt-20 " src={starLogo} alt="" />
          </div>

          <div className='bg-zinc-950 flex-1 flex flex-row justify-center items-start'>
            <img className='w-70' src={spon} alt="" />
          </div>
        </div>

        <div className='bg-zinc-950 w-full h-100 md:h-100 lg:h-200 flex flex-row justify-center items-center'>
          <img className='w-220' src={toxt} alt="" />
        </div>
      </div>
      
      {/* Green section */}
      <div className='flex flex-col h-screen w-screen bg-green-300'>
        <div className='w-screen h-20 bg-zinc-950'>
        </div>
        <div className='w-full h-10 bg-zinc-950'></div>
        <div className='flex flex-row w-fscreen h-15 bg-yellow-200'>
          <div className='flex justify-center items-center bg-zinc-950 w-full'>
            <p className='text-white text-4xl tracking-widest'>Our Mission</p>
          </div>
          <div className='w-full bg-zinc-950'></div>
        </div>
        <div className='flex flex-row w-fscreen h-17 bg-yellow-200'>
          <div className='flex justify-center items-center bg-zinc-950 w-full'>
          </div>
          <div className='w-full bg-zinc-950 flex justify-center items-center'>
            <p className='text-white text-4xl tracking-widest'>Worldwide</p>
          </div>
        </div>
        <div className='flex flex-row flex-1 bg-red-600'>
          <div className='flex flex-row flex-3 bg-zinc-950 justify-end items-start'>
            <div className='w-170 h-80 p-2 flex bg-gradient-to-r from-violet-700 to-zinc-950 justify-center items-center rounded-4xl'>
              <div className='w-full h-full p-4 bg-zinc-950 flex justify-start items-start rounded-4xl'>
                <p className='text-white text-xl tracking-wide'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-2 bg-zinc-950'></div>
        </div>
      </div>

      {/* Orange section */}
      <div className='w-screen h-screen bg-orange-300'>
        <div className='w-full h-20 bg-red-300'>
        </div>
        <div className='w-full h-10 bg-blue-300'>
        </div>
        <div className='w-full h-10 bg-green-300'>
        </div>
      </div>
    </>
  );
}

export default App;