import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div className='bg-orange'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='lg-pr-10 grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form
              className='rounded bg-white p-10 shadow-sm'
              onSubmit={onSubmit}
            >
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-600'>
                  Email không hợp lệ
                </div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password'
                  autoComplete='on'
                />
              </div>
              <div className='mt-1 min-h-[1rem] text-sm text-red-600'>
                Password không hợp lệ
              </div>
              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600
'
                >
                  Đăng nhập
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center text-center'>
                <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
