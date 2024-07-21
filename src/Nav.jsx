import { Fragment, useState } from 'react'
import style from './Nav.module.css'


 const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const buttonClasses = 'text-gray-100 font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-800 hover:text-gray-100 rounded-lg transition duration-300'
    const buttons = (
        <>

        <button className={buttonClasses}>About</button>
        <button className={buttonClasses}>Work</button>
        <button className={buttonClasses}>Experience</button>
        <button className={buttonClasses}>Contact</button>

        </>
    )
    return(
        // Navbar
        <nav class= "bg-gray-900">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex flex-row w-full justify-between'>
                        <div className='text-gray-100 text-xl font-bold'>
                        Aryan Barot
                        </div>

                        <div className='hidden md:block'>
                            <div className='flex ml-10 items-baseline space-x-2'>
                                {buttons}
                            </div>

                        </div>

                    </div>

                    <div className='md:hidden'>
                        <button onClick = {()=>{setIsOpen(!isOpen)}} type='button' className='fill-gray-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='currentColor'>
                            <path></path>

                        </svg>
                        </button>

                    </div>

                </div>
            </div>
            {
                isOpen && (
                    <div className='flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2'>
                        {buttons}
                    </div>
                )
            }
        </nav>

    )
   
}

export default Header 

