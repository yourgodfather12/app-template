'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { authApi } from '@/services/api'

interface User {
  email: string
  id: string
  username: string
}

interface AuthContextType {
  user: User | null
  login: (credentials: { email: string; password: string }) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await authApi.getProfile()
        setUser(userData)
      } catch (error) {
        console.error('Auth check failed:', error)
        setUser(null)
      }
    }

    checkAuth()
  }, [])

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await authApi.login(credentials)
      setUser(response.user)
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await authApi.logout()
      setUser(null)
    } catch (error) {
      console.error('Logout failed:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}