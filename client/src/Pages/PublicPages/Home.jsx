import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="h-4/5 w-96 rounded mx-auto bg-home  m-w-96">
            <div className="w-2/4 mx-auto rounded-lg my-4 py-24  m-w-96">
                <h1 className="text-3xl font-medium mb-2">Let's Build: Your Future</h1>
                <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">Online Learning Platform</h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque,
                odit velit sint similique? Asperiores ratione aperiam tempora, alias corrupti deleniti quaerat molestiae.

                <div className='my-4'>
                    <NavLink exact to='courses'>
                        <button type='button' className='px-2 py-1 rounded-lg bg-green-400 hover:bg-green-800 hover:text-white'>Explore Courses</button>
                    </NavLink>
                </div>
                <div className='mb-2 px-4'>
                    <span className='text-2xl mb-4'>OR</span>
                </div>
                <div>
                    <form className=''>
                        <div>
                            <input type='text' placeholder='What do you want to learn ??' className='w-1/2 px-2 py-2 border-2 border-gray-600 rounded m-w-80' />
                        </div>

                        <button type='submit' className='px-2 py-1 rounded-lg bg-green-400 hover:bg-green-800 hover:text-white mt-1'>
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Home
