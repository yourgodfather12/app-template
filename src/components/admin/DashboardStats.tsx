import { FiUsers, FiShoppingBag, FiDollarSign, FiTrendingUp } from 'react-icons/fi'

const stats = [
  {
    label: 'Total Users',
    value: '1,234',
    change: '+12.5%',
    icon: FiUsers,
    trend: 'up',
  },
  {
    label: 'Total Orders',
    value: '845',
    change: '+8.2%',
    icon: FiShoppingBag,
    trend: 'up',
  },
  {
    label: 'Revenue',
    value: '$12,345',
    change: '+23.1%',
    icon: FiDollarSign,
    trend: 'up',
  },
  {
    label: 'Growth',
    value: '89.2%',
    change: '+4.3%',
    icon: FiTrendingUp,
    trend: 'up',
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-sm text-gray-600 ml-2">from last month</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}