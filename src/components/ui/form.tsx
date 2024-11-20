'use client'

import { useFormContext } from 'react-hook-form'
import { cn } from '@/lib/utils'

interface FormFieldProps {
  name: string
  label: string
  type?: string
  placeholder?: string
  className?: string
  error?: string
}

export function FormField({
  name,
  label,
  type = 'text',
  placeholder,
  className,
  error,
}: FormFieldProps) {
  const { register } = useFormContext()

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        id={name}
        placeholder={placeholder}
        className={cn(
          'block w-full rounded-md border-gray-300 shadow-sm',
          'focus:border-blue-500 focus:ring-blue-500',
          error && 'border-red-300 focus:border-red-500 focus:ring-red-500',
          className
        )}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}