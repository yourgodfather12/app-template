'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FiHome, FiUsers, FiSettings, FiBox, FiPieChart } from 'react-icons/fi'

const menuItems = [
  { icon: FiHome, label: 'Dashboard', href: '/admin' },
  { icon: FiUsers, label: 'Users', href: '/admin/users' },
  { icon: FiBox, label: 'Products', href: '/admin/products' },
  { icon: FiPieChart, label: 'Analytics', href: '/admin/analytics' },
  { icon: FiSettings, label: 'Settings', href: '/admin/settings' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}