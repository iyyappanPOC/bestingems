'use client'
import Image from "next/image";
import diamond from './diamond.png'
import image1 from './Homepage/review_image/Rectangle 47.png'
import image2 from './Homepage/review_image/Rectangle 48.png'
import image3 from './Homepage/review_image/Rectangle 49.png'
import image4 from './Homepage/review_image/Rectangle 50.png'
import image5 from './Homepage/review_image/Rectangle 51.png'
import image6 from './Homepage/review_image/Rectangle 52.png'
import image7 from './Homepage/review_image/Rectangle 53.png'
import image8 from './Homepage/review_image/Rectangle 54.png'
import image9 from './Homepage/review_image/Rectangle 55.png'

import location from './Homepage/location.png'

import email_img from './Homepage/Vector.png'
import gem_prod from './Homepage/Rectangle 95.png'
import cretegem from './Homepage/creategem.png'

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {data} from './data'

// const data = [
//     {
//         id:1,
//         img : image1
//     }
// ]


export default function Home() {

    const sliderLeft = () =>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideright = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
    <>
        {/* Birthstone Section */}
        <section className=" relative isolate overflow-hidden px-6 py-5 sm:py-2 lg:px-4 ">
            <div className="mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl capitalize text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Know more about your Birthstone
                </p>
                <p className="mt-6 px-14 text-lg leading-8 text-center text-gray-600">Dive into our Informative Guide and discover the fascinating stories behind your Birthstone</p>
            </div>

            <div className="p-1 flex flex-wrap justify-center mx-auto max-w-xl px-2 py-16 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8"> 
                <div className="w-100">
                    <Image src={diamond} alt="" />
                </div>
                <div className="flex flex-col space-y-4 flex-auto w-96">
                    
                    <div className="relative mt-2 ml-2 flex justify-center">
                        <MdChevronLeft className="text-zinc-500 opacity-50 cursor-pointer hover:opacity-100" onClick={sliderLeft} size={40} />
                        <div id='slider'
                         className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">

                            {data.map((item) =>(
                                // <img  src={item.img} alt="No image" />
                                <Image
                                    className="w-auto h-[50px] inline-block pl-4 cursor-pointer hover:scale-105 ease-in-out duration-300"
                                    src={item.img}
                                    alt="Picture of the author"
                                />
                            ))}
                        </div> 
                        <MdChevronRight className="text-zinc-500 opacity-50 cursor-pointer hover:opacity-100" onClick={slideright} size={40} />
                    </div>

                    <div className="mx-1">
                        <div className="mx-auto max-w-3xl lg:text-center">
                            <p className="mt-2 text-3xl capitalize text-center font-bold tracking-tight text-gray-900 sm:text-3xl">Aquamarine - March
                            </p>
                            <p className="mt-2 px-5 lg:text-lg  leading-8 text-left text-wrap text-gray-600 sm:text-sm">March's birthstone, Aquamarine, is a beautiful Gemstone known for its serene and soothing blue-green hues. It has long been associated with the calming qualities of the ocean, making it a symbol of tranquility and clarity. Aquamarine is often used in Jewelry, and its subtle yet captivating color is reminiscent of the clear waters of a tropical paradise. This gemstone is believed to bring harmony and balance to its wearer, promoting a sense of inner peace. </p>
                        </div>
                    </div>

                    <div className="flex p-5 flex-wrap justify-around ">
                        <div className="mt-2 pt-4 h-14 text-center border border-slate-500 text-zinc-900 font-semibold w-64">
                            Read more
                        </div>
                        <div className="mt-2 pt-4 h-14 text-center border border-red-500 text-red-500 font-semibold w-64">
                            View products
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Explore Gemshows Section */}

        <section className="relative isolate overflow-hidden px-6 py-5 sm:py-2 lg:px-4">
            
            <div className="mx-auto max-w-xl px-2 py-5 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8 h-auto">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <div className="mx-auto max-w-3xl lg:text-center">
                            <p className="mt-2 text-3xl capitalize text-left font-bold text-gray-900 sm:text-3xl w-80">Explore Gemshows
                            </p>
                            <p className="mt-6 lg:text-base text-left text-wrap text-gray-600 sm:text-sm">Join us at our Dazzling Gemshows across the USA, where each stone tells a unique story of Beauty and Rarity. From mesmerizing Sapphires to enchanting Emeralds, BestInGems invites you to explore a world of breathtaking Gemstones, Gemstone Jewelry & Semi-Mount Collections.</p>

                            <div className="flex p-3 flex-wrap justify-around">
                                <div className="mt-6 p-4 h-14 text-center border border-zinc-300 text-zinc-900 font-semibold w-80">
                                Explore All Gemshows
                                </div>
                            </div>

                        </div>                    
                    </div>

                    <div className="group relative">
                        <div className="aspect-h-1  aspect-w-1 w-[297] overflow-hidden rounded-t-lg border border-slate-200  lg:aspect-none ">
                            <div className="bg-red-500 p-1 rounded-t-lg">
                                <div className="flex justify-end  ">
                                    <p className="text-xs p-2 m-2 rounded bg-white text-zinc-800"> Wholesale & Retail
                                    </p>                                
                                </div>
                                <div className="flex justify-center p-2 m-2">
                                    <p className="text-lg text-white"> 
                                        Feb 16, 2024 - Feb 18, 2024
                                    </p>                                
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-zinc-900 text-center p-2">
                                    Chantilly, VA
                                </div>
                                <div className="mt-2 text-center  m-2 ">
                                    <p className="bg-zinc-100 text-base text-zinc-800 font-bold p-2 rounded-md">Booth #162 & 136</p>
                                </div>
                            </div>
                            <div className="mt-4 m-2 p-2 flex flex-nowrap justify-center">
                                <div className="mt-1">
                                    <Image src={location} alt="" />
                                </div>
                                <div className="w-72">
                                    <p className="text-zinc-800 text-sm ml-2">
                                    Dulles Expo Center ( South Hall), 4320 Chantilly Shopping Center, Chantilly VA 20151
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="">
                                    <div className="mt-2 text-center  m-2 ">
                                        <p className="bg-zinc-800 text-base text-white font-bold p-2 rounded-md">Get show ticket</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-zinc-900 text-center p-2">
                                    Promoter: Intergem
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="aspect-h-1  aspect-w-1 w-[297] overflow-hidden rounded-t-lg border border-slate-200  lg:aspect-none ">
                            <div className="bg-red-500 p-1 rounded-t-lg">
                                <div className="flex justify-end  ">
                                    <p className="text-xs p-2 m-2 rounded bg-white text-zinc-800"> Wholesale & Retail
                                    </p>                                
                                </div>
                                <div className="flex justify-center p-2 m-2">
                                    <p className="text-lg text-white"> 
                                        Feb 16, 2024 - Feb 18, 2024
                                    </p>                                
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-zinc-900 text-center p-2">
                                    Chantilly, VA
                                </div>
                                <div className="mt-2 text-center  m-2 ">
                                    <p className="bg-zinc-100 text-base text-zinc-800 font-bold p-2 rounded-md">Booth #162 & 136</p>
                                </div>
                            </div>
                            <div className="mt-4 m-2 p-2 flex flex-nowrap justify-center">
                                <div className="mt-1">
                                    <Image src={location} alt="" />
                                </div>
                                <div className="w-72">
                                    <p className="text-zinc-800 text-sm ml-2">
                                    Dulles Expo Center ( South Hall), 4320 Chantilly Shopping Center, Chantilly VA 20151
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="">
                                    <div className="mt-2 text-center  m-2 ">
                                        <p className="bg-zinc-800 text-base text-white font-bold p-2 rounded-md">Get show ticket</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-zinc-900 text-center p-2">
                                    Promoter: Intergem
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="aspect-h-1  aspect-w-1 w-[297] overflow-hidden rounded-t-lg border border-slate-200  lg:aspect-none ">
                            <div className="bg-red-500 p-1 rounded-t-lg">
                                <div className="flex justify-end  ">
                                    <p className="text-xs p-2 m-2 rounded bg-white text-zinc-800"> Wholesale & Retail
                                    </p>                                
                                </div>
                                <div className="flex justify-center p-2 m-2">
                                    <p className="text-lg text-white"> 
                                        Feb 16, 2024 - Feb 18, 2024
                                    </p>                                
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-zinc-900 text-center p-2">
                                    Chantilly, VA
                                </div>
                                <div className="mt-2 text-center  m-2 ">
                                    <p className="bg-zinc-100 text-base text-zinc-800 font-bold p-2 rounded-md">Booth #162 & 136</p>
                                </div>
                            </div>
                            <div className="mt-4 m-2 p-2 flex flex-nowrap justify-center">
                                <div className="mt-1">
                                    <Image src={location} alt="" />
                                </div>
                                <div className="w-72">
                                    <p className="text-zinc-800 text-sm ml-2">
                                    Dulles Expo Center ( South Hall), 4320 Chantilly Shopping Center, Chantilly VA 20151
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="">
                                    <div className="mt-2 text-center  m-2 ">
                                        <p className="bg-zinc-800 text-base text-white font-bold p-2 rounded-md">Get show ticket</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-zinc-900 text-center p-2">
                                    Promoter: Intergem
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </section>

        {/* Happy Customer Section */}

        <section className="bg-gray-100 relative isolate overflow-hidden px-6 py-10 sm:py-2 lg:px-4 ">
            <div className="mt-14 mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl capitalize text-center font-bold tracking-tight text-gray-900 sm:text-4xl">2500+ Happy Customers
                </p>
                <p className="mt-6 px-14 text-lg leading-8 text-center text-gray-600">Discover why our clients trust us to deliver Quality, Beauty, and Satisfaction with every purchase.</p>
            </div>

            <div className=" mt-10 mb-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                <div className="group relative rounded bg-white shadow-2xl ">
                    <div className="flex flex-col space-y-4 ">
                        
                        <div className="mt-8 flex justify-center">
                                
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                                      
                        </div>                         
                       

                        <div className="flex pt-5 px-9 text-sm text-balance  text-gray-600">
                            March's birthstone, aquamarine, is a beautiful gemstone known for its serene and soothing blue-green hues. It has long been associated with the calming qualities of the ocean, making it a symbol of tranquility and clarity. Aquamarine is often used in jewelry inner peace.
                        </div>

                        <div className="p-8">
                            <p className="font-semibold text-gray-900">
                            Jane Cooper
                            </p>
                            <div className="mt-2 flex flex-wrap space-x-1">
                                <Image className="w-20" src={image1} alt="" />
                                <Image className="w-20" src={image2} alt=""/>
                                <Image className="w-20" src={image3} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group relative rounded bg-white shadow-2xl ">
                    <div className="flex flex-col space-y-4 ">
                        
                        <div className="mt-8 flex justify-center">
                                
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                                      
                        </div>                         
                       

                        <div className="flex pt-5 px-9 text-sm text-balance  text-gray-600">
                            March's birthstone, aquamarine, is a beautiful gemstone known for its serene and soothing blue-green hues. It has long been associated with the calming qualities of the ocean, making it a symbol of tranquility and clarity. Aquamarine is often used in jewelry inner peace.
                        </div>

                        <div className="p-8">
                            <p className="font-semibold text-gray-900">
                            Ralph Edwards
                            </p>
                            <div className="mt-2 flex flex-wrap space-x-1">
                                <Image className="w-20" src={image4} alt="" />
                                {/* <Image className="w-20" src={image2} alt=""/>
                                <Image className="w-20" src={image3} alt=""/> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group relative rounded bg-white shadow-2xl ">
                    <div className="flex flex-col space-y-4 ">
                        
                        <div className="mt-8 flex justify-center">
                                
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                                      
                        </div>                         
                       

                        <div className="flex pt-5 px-9 text-sm text-balance  text-gray-600">
                            March's birthstone, aquamarine, is a beautiful gemstone known for its serene and soothing blue-green hues. It has long been associated with the calming qualities of the ocean, making it a symbol of tranquility and clarity. Aquamarine is often used in jewelry inner peace.
                        </div>

                        <div className="p-8">
                            <p className="font-semibold text-gray-900">
                            Annette Black
                            </p>
                            <div className="mt-2 flex flex-wrap space-x-1">
                                <Image className="w-20" src={image5} alt="" />
                                <Image className="w-20" src={image6} alt=""/>
                                {/* <Image className="w-20" src={image3} alt=""/> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group relative rounded bg-white shadow-2xl ">
                    <div className="flex flex-col space-y-4 ">
                        
                        <div className="mt-8 flex justify-center">
                                
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                                      
                        </div>                         
                       

                        <div className="flex pt-5 px-9 text-sm text-balance  text-gray-600">
                            March's birthstone, aquamarine, is a beautiful gemstone known for its serene and soothing blue-green hues. It has long been associated with the calming qualities of the ocean, making it a symbol of tranquility and clarity. Aquamarine is often used in jewelry inner peace.
                        </div>

                        <div className="p-8">
                            <p className="font-semibold text-gray-900">
                            Floyd Miles
                            </p>
                            <div className="mt-2 flex flex-wrap space-x-1">
                                <Image className="w-20" src={image7} alt="" />
                                <Image className="w-20" src={image8} alt=""/>
                                <Image className="w-20" src={image9} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="group relative rounded bg-white shadow-2xl ">
                    <div className="flex flex-col space-y-4 ">
                        
                        <div className="mt-8 flex justify-center">
                                
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg className="text-yellow-500 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                                      
                        </div>                         
                       

                        <div className="flex pt-5 px-9 text-sm text-balance  text-gray-600">
                            March's birthstone, aquamarine, is a beautiful gemstone known for its serene and soothing blue-green hues. It has long been associated with the calming qualities of the ocean, making it a symbol of tranquility and clarity. Aquamarine is often used in jewelry inner peace.
                        </div>

                        <div className="p-8">
                            <p className="font-semibold text-gray-900">
                            Annette Black
                            </p>
                            <div className="mt-2 flex flex-wrap space-x-1">
                                <Image className="w-20" src={image5} alt="" />
                                <Image className="w-20" src={image6} alt=""/>
                                
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </section>

        {/* Create your Custom Jewelry  Section */}

        <section className="relative grid justify-items-center isolate overflow-hidden px-6 py-5 sm:py-2 lg:px-4 ">
            <div className="flex flex-wrap justify-center w-[1245px] h-[396px] rounded bg-red-500">
                <div className="w-100 ">
                    <Image className="" src={cretegem} alt="/" />
                </div>
                <div className="w-100 ">
                    <div className="w-100">
                        <p className="mt-4 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">2500+ Create your Custom Jewelry 
                        </p>
                        {/* <p className=" mt-2 text-left p-2 text-base tracking-tigh text-gray-900">
                        Dive into our 'Custom Gemstone Jewelry' section, where your unique vision takes center stage. Design personalized masterpieces that tell your story, blending style and sentiment in every handpicked Gemstone.
                        </p> */}
                    </div>
                </div>
            </div>
        </section>


        {/* BestInGems - Online Gemstone Store */}

        <section className=" relative isolate overflow-hidden px-6 py-10 sm:py-2 lg:px-4">
            <div className="mx-auto flex flex-wrap justify-center max-w-xl py-5 sm:py-15 lg:max-w-7xl h-aut">
                <div className="">
                    <Image className="mx-auto " src={gem_prod} alt="" />
                </div>
                <div className="w-[620px] h-auto flex flex-col bg-green-500">
                    <div className="">
                        <h2 className="mt-5 text-center text-3xl underline underline-offset-4 font-bold leading-9 tracking-tigh text-gray-900">
                        BestInGems - Online Gemstone Store
                        </h2>
                        <p className="mt-2 text-center text-base font-bold leading-9 tracking-tigh text-gray-900">
                            Get in touch with us for a complete Jewelry shopping experience!
                        </p>
                        <p className="whitespace-pre-line leading-loose mt-2 text-left p-2 text-base tracking-tigh text-gray-900">
                            Welcome to BestInGems, Inc., your premier destination for exquisite Gemstones, Beads, Drops, Gemstone Jewelry, and Semi-Mounts. Since our establishment in March 1999, we have been curating a stunning collection of Natural Gemstones sourced from around the globe. More than just a Gemstone retailer, we are dedicated to both providing you with unparalleled Gemstone offerings and educating you on the quality and unique characteristics of each Gemstone in our inventory.
                        </p>
                        <p className="whitespace-pre-line leading-loose mt-2 text-left p-2 text-base tracking-tigh text-gray-900">
                            At Best In Gems, Inc., we pride ourselves on three core commitments that define our business – RELIABILITY, SERVICE, and DEPENDABILITY. When you choose us, you're not just making a transaction; you're making a commitment to quality and excellence.
                        </p>
                        <p className="whitespace-pre-line leading-loose mt-2 text-left p-2 text-base tracking-tigh text-gray-900">
                            We distinguish ourselves by steering clear of Artificial, Synthetic, or Simulated Gemstones. Our team of qualified experts traverses the world in search of rare and extraordinary Gemstones, ensuring that only the finest specimens make their way to our collection. To maximize the value for your money, we purchase rough Gemstones and process them in our state-of-the-art factory in Jaipur, India. With over 40 skilled artisans working around the clock, we meticulously cut and shape each Gemstone to perfection.
                        </p>
                    </div>           
                </div>
            </div>
        </section>


        {/* Subscribe Section */}

        <section >
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:max-w-3xl">
                    <Image className="mx-auto w-36 h-32" src={email_img} alt="Your Company" />
                    <h2 className="mt-5 text-center lg:text-4xl sm:text-4xl font-bold leading-9 tracking-tigh text-gray-900">Unlock Exclusive Savings and Updates:</h2>

                    <div className="flex flex-wrap w-90">
                        <p className="mt-6 px-14 lg:text-lg sm:text-sm leading-8 text-center text-gray-600">Subscribe now to 'Unlock Exclusive Savings and Updates.' Be the first to enjoy discounts and stay updated on our latest Gemstone arrivals, ensuring you never miss out on the allure of exclusive offers</p>
                    </div>
                </div>

                <div className="mt-2 p-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" placeholder="Enter your Name" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6" placeholder="Enter Your Email Address" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Subscribe</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>

        {/* Social Media Section */}

    </>

  );
}