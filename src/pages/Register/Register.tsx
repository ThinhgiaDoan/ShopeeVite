import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from 'src/utils/rules'
import Input from 'src/components/Input'

interface FormData {
  email: string
  password: string
  confirm_password: string
}
function Register() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules(getValues)

  const onSubmit = handleSubmit(
    (data) => {
      // console.log(data)
    },
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )
  // console.log('erros', errors)

  return (
    <div className='bg-orange'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='lg-pr-10 grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form
              className='rounded bg-white p-10 shadow-sm'
              onSubmit={onSubmit}
            >
              <div className='text-2xl'>Đăng ký</div>
              <Input
                type='email'
                register={register}
                name='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeHolder='Email'
                rules={rules.email}
              />
              <Input
                type='password'
                register={register}
                name='password'
                className='mt-2'
                errorMessage={errors.password?.message}
                placeHolder='Password'
                rules={rules.password}
                autoComplete='on'
              />
              <Input
                type='password'
                register={register}
                name='confirm_password'
                className='mt-2'
                errorMessage={errors.confirm_password?.message}
                placeHolder='Confirm Password'
                rules={rules.confirm_password}
                autoComplete='on'
              />
              <div className='mt-2'>
                <button className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center text-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
