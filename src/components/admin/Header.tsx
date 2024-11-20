'use client'

import { useAuth } from '@/providers/auth-provider'
import { FiBell, FiUser } from 'react-icons/fi'
import { Button } from '../ui/button'

export function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold text-gray-800">Welcome back, {user?.username}</h2>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <FiBell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <FiUser className="h-5 w-5 text-gray-600" />
          </div>
          <Button variant="outline" size="sm" onClick={logout}>
            Sign out
          </Button>
        </div>
      </div>
    </header>
  )
}