import React from 'react'
import { NavLink } from 'react-router-dom'
const Courses = () => {
    return (
        <div className='bg-gray-100'>
            <div className='py-4'>
                <h1 className='text-center text-lg font-bold'>Showing Result for Courses</h1>
            </div>

            <div className='w-1/2 mx-auto m-w-96'>
                <div className='flex my-2 shadow-2xl p-4 rounded-lg mobileSchoolDetail'>
                    <img src='{sampleImg}' width='150px' alt='schoolName' className='mobileSchoolImage' />
                    <div className='mx-4'>
                        <h2 className='text-xl py-2'>Courses Name</h2>
                        <p>Complete in 40 Hours</p>
                        <span>Teacher Name</span>
                        <div className='py-2 my-2'>
                            <NavLink exact to='/courses/course-name' className='mx-2  bg-green-400 px-2 py-1 rounded-lg hover:bg-green-100 '>Know More</NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex my-2 shadow-2xl p-4 rounded-lg mobileSchoolDetail'>
                    <img src='{sampleImg}' width='150px' alt='schoolName' className='mobileSchoolImage' />
                    <div className='mx-4'>
                        <h2 className='text-xl py-2'>Courses Name</h2>
                        <p>Complete in 40 Hours</p>
                        <span>Teacher Name</span>
                        <div className='py-2 my-2'>

                            <NavLink exact to='/courses/course-name' className='mx-2  bg-green-400 px-2 py-1 rounded-lg hover:bg-green-100 '>Know More</NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex my-2 shadow-2xl p-4 rounded-lg mobileSchoolDetail'>
                    <img src='{sampleImg}' width='150px' alt='schoolName' className='mobileSchoolImage' />
                    <div className='mx-4'>
                        <h2 className='text-xl py-2'>Courses Name</h2>
                        <p>Complete in 40 Hours</p>
                        <span>Teacher Name</span>
                        <div className='py-2 my-2'>

                            <NavLink exact to='/courses/course-name' className='mx-2  bg-green-400 px-2 py-1 rounded-lg hover:bg-green-100 '>Know More</NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex my-2 shadow-2xl p-4 rounded-lg mobileSchoolDetail'>
                    <img src='{sampleImg}' width='150px' alt='schoolName' className='mobileSchoolImage' />
                    <div className='mx-4'>
                        <h2 className='text-xl py-2'>Courses Name</h2>
                        <p>Complete in 40 Hours</p>
                        <span>Teacher Name</span>
                        <div className='py-2 my-2'>

                            <NavLink exact to='/courses/course-name' className='mx-2  bg-green-400 px-2 py-1 rounded-lg hover:bg-green-100 '>Know More</NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex my-2 shadow-2xl p-4 rounded-lg mobileSchoolDetail'>
                    <img src='{sampleImg} ' width='150px' alt='schoolName' className='mobileSchoolImage' />
                    <div className='mx-4'>
                        <h2 className='text-xl py-2'>Courses Name</h2>
                        <p>Complete in 40 Hours</p>
                        <span>Teacher Name</span>
                        <div className='py-2 my-2'>

                            <NavLink exact to='/courses/course-name' className='mx-2  bg-green-400 px-2 py-1 rounded-lg hover:bg-green-100 '>Know More</NavLink>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Courses
