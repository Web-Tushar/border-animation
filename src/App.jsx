import React from 'react'

const App = () => {
  return (
    <>
      <div className='bg-black'>
      <div className="flex justify-center items-center h-screen bg-[#380404]">

        <div className="
        relative
        w-[200px] h-[200px] rounded-[10px]
        shadow-[16px_16px_20px_#1e0101]
        overflow-hidden
        before:absolute
        before:top-[-50%]
        before:right-[-50%]
        before:bottom-[-50%]
        before:left-[-50%]
        before:bg-[conic-gradient(transparent,transparent,#0ffcfc)]
        before:animate-spin-slow
        ">
      </div>
      <div className='flex absolute justify-center items-center w-[180px] h-[180px] bg-black
        '>
        <h2 className='text-white text-[30px]'>Tushar</h2>

      </div>
      </div>
      </div>
    </>
  )
}

export default App