import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-10 items-center justify-center gap-7'>
        <div className='md:col-span-4 grid grid-cols-2 h-80 items-end'>
            <div className=' p-7 flex flex-col justify-around items-center'>
                <h1 className='text-3xl'>WOODEN MINIMALISTC CHAIRS</h1>
                <h4 className='text-2xl'>SALE UP TO</h4>
                <h2 className='text-green-600 text-3xl'>40% OFF</h2>
            </div>
            <img src="imgs/chair.png" alt="" />
        </div>
        <div className=' md:col-span-3 flex flex-col items-around items-center '>
            <h1 >PACK 5 T-SHIRTS FOR SUMMER</h1>
            <h3 className='my-9'>Starting at <span className='text-orange-600'>$99.99</span></h3>
            <img src="/imgs/tShirts.png" alt="" />
        </div>

    </div>
  )
}

export default Hero