'use client'
import React from 'react'
import Image from 'next/image'
import imageImg from '../assets/sh2.jpg'
import weatherapp from '../assets/projectAssets/weatherapp.jpeg'
import shoppingapp from '../assets/projectAssets/shoppingapp.jpg'
import  currencyapp from '../assets/projectAssets/currencyapp.png'
import  coffeshop from '../assets/projectAssets/coffeeshop.webp'
import  ecommerce from '../assets/projectAssets/ecommerce.jpg'
import  dataAnalysis from '../assets/projectAssets/data-analysis.jpg'


const Portfolio = () => {

    const projects =[
        {
            id: 1,
            scr: weatherapp,
            url: 'https://github.com/spyze002/Weather-Mobile-Application',
           
        },
        {
            id: 2,
            scr: shoppingapp,
            url: 'https://github.com/spyze002/shopping-app-mobile'
        },
        {
            id: 3,
            scr: currencyapp,
            url: 'https://github.com/spyze002/currency-converter'
        },
        {
            id: 4,
            scr: coffeshop,
            url: 'https://github.com/spyze002/Coffeshop-'
        },
        {
            id: 5,
            scr: ecommerce,
            url: 'https://github.com/spyze002/e-commerce-project'
        },
        {
            id: 6,
            scr: dataAnalysis,
            url: 'https://github.com/spyze002/Data-analysis-with-python'
        },
        
    ]

  return (
    <div data-name ="portfolio" id='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500  opacity-55'> Portfolio</p>
                <p className='py-6 opacity-55'> Check out some of my projects </p>
            </div> 

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-center'>
            {projects.map(({id, scr, url}) =>(
                 <div key={id} className=' shadow-md shadow-gray-600 rounded-lg' >
                 <Image src={scr} alt = '' width={200} height={100} className='rounded-md duration-200 hover:scale-105 m-auto' />
                 <div className='items-center flex justify-center'>
                     <button  className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 opacity-55'>Demo</button>
                     <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 opacity-55'> <a href={url} target='blank'>Code</a> </button>
                 </div>
             </div>
))}   
           
               
            </div>
        </div>
    </div>
  )
}

export default Portfolio