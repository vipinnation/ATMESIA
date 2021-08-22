import { NavLink } from 'react-router-dom'

const CourseName = () => {
    return (
        <div className='w-96 rounded mx-auto bg-home px-16 py-16 my-2 m-px-4'>
            <div>
                <h1 className='text-3xl font-bold '>Python For Everybody</h1>
                <p className='py-2 text-indigo-400'>Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze, and visualize data.</p>
            </div>

            <div>
                <NavLink exact to='/enroll'>
                    <button type='button' className='px-8 py-4 rounded bg-gray-400  hover:bg-gray-600 hover:text-white'>Enroll Now</button>
                </NavLink>
            </div>

            <div className='py-4'>
                <h2 className='text-2xl font-bold py-1'>About This Course</h2>
                <p>This course aims to teach everyone the basics of programming computers using Python.
                    We cover the basics of how one constructs a program from a series of simple instructions in Python.
                    The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should
                    be able to master the materials in this course. This course will cover Chapters 1-5 of the textbook “Python for Everybody”.
                    Once a student completes this course, they will be ready to take more advanced programming courses. This course covers Python 3.
                </p>
            </div>
            <div className='py-4'>
                <h2 className='text-2xl font-bold py-1'>WHAT YOU WILL LEARN</h2>
                <p>
                    <ol className='list-decimal px-4'>
                        <li>Install Python and write your first program </li>
                        <li>  Describe the basics of the Python programming language </li>
                        <li> Use variables to store, retrieve and calculate information </li>
                        <li>  Utilize core programming tools such as functions and loops</li>
                    </ol>
                </p>
            </div>
            <div className='py-4'>
                <h2 className='text-2xl font-bold py-1'>SKILLS YOU WILL GAIN</h2>
                <p>
                    <ol className='list-decimal px-4'>
                        <li>Python Syntax And Semantics    </li>
                        <li>  Basic Programming Language</li>
                        <li> Computer Programming   </li>
                        <li>  Python Programming </li>
                    </ol>
                </p>
            </div>
            <div>
                <NavLink exact to='/enroll'>
                    <button type='button' className='px-8 py-4 rounded bg-gray-400  hover:bg-gray-600 hover:text-white'>Enroll Now</button>
                </NavLink>
            </div>
        </div>
    )
}

export default CourseName
