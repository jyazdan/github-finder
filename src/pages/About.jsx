import React from 'react'

function About() {
  return (
    <>
      <h1 className='text-6xl mb-4 text-white'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see user profile details. This
        project was made to exercise the use of React Router and the Github API.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <br />
      {/* ADD GITHUB REPO HERE */}
      <p className='text-lg text-gray-400'>
        Developed by: <span className='text-white'>Jonathan Yazdanpanah</span>
      </p>
        <a className='text-white text-lg' href="https://github.com/jyazdan">
        GitHub Profile
        </a>
        <br />
        <a className='text-white text-lg' href='https://github.com/jyazdan'>
        GitHub Finder Repository
        </a>
        <br />
        <a className='text-white text-lg' href="https://www.linkedin.com/in/jonathan-yazdanpanah">
        LinkedIn
        </a>
    </>
  )
}


export default About