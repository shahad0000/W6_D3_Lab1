import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-wrap items-end justify-center gap-7 bg-white'>
        <div className='w-100 grid grid-cols-2 h-80 items-end'>
            <div className=' p-7 flex flex-col  items-around'>
                <h1 className='text-3xl'>WOODEN MINIMALISTC CHAIRS</h1>
                <h4 className='text-2xl my-6'>SALE UP TO</h4>
                <h2 className='text-green-600 text-3xl'>40% OFF</h2>
            </div>
            <img src="imgs/chair.png" alt="" />
        </div>
        <div className='w-100 flex flex-col mt-4 items-center justify-end h-80'>
            <h1 >PACK 5 T-SHIRTS FOR SUMMER</h1>
            <h3 className='my-3'>Starting at <span className='text-orange-600'>$99.99</span></h3>
            <img src="/imgs/tShirts.png" alt="" />
        </div>

    </div>
  )
}

export default Hero