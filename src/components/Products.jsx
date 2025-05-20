import React from 'react'

const products = [
    {
        img: "/imgs/tv.png",
        title: "ELECTRONICS",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa rem dolore suscipit"
    }, 
    {
        img: "/imgs/tShirt.png",
        title: "Clothing",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa rem dolore suscipit"
    }, 
    {
        img: "/imgs/labtop.png",
        title: "ELECTRONICS",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa rem dolore suscipit"
    }, 
    {
        img: "/imgs/armChair.png",
        title: "Health and Beauty",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa rem dolore suscipit"
    }, 
    {
        img: "/imgs/care.png",
        title: "ELECTRONICS",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa rem dolore suscipit"
    }, 
    {
        img: "/imgs/watch.png",
        title: "ELECTRONICS",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa rem dolore suscipit"
    }

]



const Products = () => {
  return (
    <div>
        <h1 className='text-3xl m-5'>Top Categories of the Month</h1>
        <hr className='text-gray-400 mb-5'/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {products.map((items, index) => (
                <div key={index} className='flex border border-gray-200'>
                    <img width={100} src={items.img} alt="" />
                    <div className='flex flex-col justify-around'>
                        <div>{items.title}</div>
                        <div>{items.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products