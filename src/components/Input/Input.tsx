import type { UseFormRegister, RegisterOptions } from 'react-hook-form'
import React from 'react'
interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeHolder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}
export default function Input({
  type,
  errorMessage,
  placeHolder,
  className,
  name,
  register,
  rules,
  autoComplete
}: Props) {
  return (
    <div className='mt-8'>
      <input
        type={type}
        className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
        placeholder={placeHolder}
        autoComplete={autoComplete}
        {...register(name, rules)}
      />
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>
        {errorMessage}
      </div>
    </div>
  )
}
