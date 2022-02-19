import React from 'react'
import Head from 'next/head'
const login = () => {
  return (<>
   <Head>
        <title>Netflix clone</title>        
        <link rel="icon" href="/icon.png" />
      </Head>
  
  <div
    className="min-h-screen"
    style={{
      background:
        'linear-gradient(rgb(9 9 9 / 60%), rgb(8 7 8 / 90%)), url(/hero-bg.jpg)',
    }}>
 <div className=' px-20 pt-10'>
          <svg
            viewBox="0.238 0.034 919.406 248.488"            
            xmlns="http://www.w3.org/2000/svg"
            className="w-60"
          >
            <path
              d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
              fill="#e50914"
            />
          </svg>
        </div>

        <div className="bg-[rgba(0,0,0,.50)] text-white  max-w-fit  m-auto p-20">
            <h1 className='mb-8 text-5xl'>Sign In</h1>
            <input  placeholder='Email or phone number' type='email' name='email' className='block  outline-none mb-4 text-white w-80 h-12 p-2 mt-16 bg-[#645555d2]'/>
            <input className='block outline-none p-2 mb-4 text-white h-12 w-80 bg-[#645555d2]' name='password' type='password' placeholder='Password' />
            <a href="/"> <button className='w-80 h-12 mt-8 text-xl bg-[#e50914]  hover:bg-[#ff0c0cfd]'>Sign In </button></a>
            <p className='w-80 mt-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a className='text-blue-500' href="/">learm more</a></p>
        </div>

    </div>
    </> )
}

export default login