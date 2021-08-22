import React from 'react'
import { NavLink } from 'react-router-dom'

export const Profile = () => {
    return (
        <div className='bg-gray-100'>
            <div className='py-4'>
                <h1 className='text-center text-lg font-bold'>Enrolled Courses</h1>
            </div>

            <div className='w-1/2 mx-auto m-w-96 pb-16'>
                <div className='flex my-2 shadow-2xl p-4 rounded-lg mobileSchoolDetail'>
                    <img src='{sampleImg}' width='150px' alt='schoolName' className='mobileSchoolImage' />
                    <div className='mx-4'>
                        <h2 className='text-xl py-2'>Courses Name</h2>
                        <p>Progress</p>

                    </div>
                </div>
                <div className='flex my-2 shadow-2xl p-4 rounded-lg mobileSchoolDetail'>
                    <img src='{sampleImg}' width='150px' alt='schoolName' className='mobileSchoolImage' />
                    <div className='mx-4'>
                        <h2 className='text-xl py-2'>Courses Name</h2>
                        <p>Progress</p>

                    </div>
                </div>
                <div className='flex my-2 shadow-2xl p-4 rounded-lg mobileSchoolDetail'>
                    <img src='{sampleImg}' width='150px' alt='schoolName' className='mobileSchoolImage' />
                    <div className='mx-4'>
                        <h2 className='text-xl py-2'>Courses Name</h2>
                        <p>Progress</p>

                    </div>
                </div>

            </div>



        </div>
    )
}
