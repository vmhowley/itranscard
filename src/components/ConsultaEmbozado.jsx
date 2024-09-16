import React from 'react'
import BreadCrumb from './BreadCrumb'

function ConsultaEmbozado() {
    const crumbsData = [
        {
            id:"1",
            name:"Sistema de Embozado",
        },
        {
            id:"2",
            name:"Consultas",
        }
    ]
  return (
    <div className=''>
            <BreadCrumb crumbsData={crumbsData}/>
    <div className='justify-center h-[800px] w-full sm:place-content-center '>
      <section className='justify-center max-w-4xl p-6 mx-auto border rounded-md shadow-md bg-card'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
          Account settings
        </h2>

        <form>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='username'
                >
                Username
              </label>
              <input
                id='username'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='emailAddress'
                >
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='password'
                >
                Password
              </label>
              <input
                id='password'
                type='password'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='passwordConfirmation'
                >
                Password Confirmation
              </label>
              <input
                id='passwordConfirmation'
                type='password'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                />
            </div>
          </div>

          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
                </div>
  )
}

export default ConsultaEmbozado
