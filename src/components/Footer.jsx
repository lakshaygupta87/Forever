import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='w-full bg-white mt-20'>
            <div className='max-w-screen-xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32'>

                <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm py-10'>

                    <div>
                        <img src={assets.logo} alt="Logo" className='mb-5 w-32' />
                        <p className='w-full md:w-2/3 text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex quibusdam sapiente adipisci consequatur corrupti non nihil culpa. Dolores nostrum ipsam nam voluptas sit.
                        </p>
                    </div>

                    <div>
                        <p className='text-xl font-medium mb-5'>COMPANY</p>
                        <ul className='flex flex-col gap-1 text-gray-600'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                        <ul className='flex flex-col gap-1 text-gray-600'>
                            <li>+1-212-456-7890</li>
                            <li>contact@foreveryou.com</li>
                        </ul>
                    </div>
                </div>

                <hr className='border-gray-300' />
                <p className='py-5 text-sm text-center text-gray-500'>
                    © 2024 Forever.com — All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default Footer
