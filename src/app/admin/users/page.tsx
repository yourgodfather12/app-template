import { DataTable } from '@/components/admin/DataTable'
import { Button } from '@/components/ui/button'
import { FiUserPlus, FiMoreVertical } from 'react-icons/fi'

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2023-11-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'Active',
    lastLogin: '2023-11-14',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'User',
    status: 'Inactive',
    lastLogin: '2023-11-10',
  },
]

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }: any) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium
        ${row.original.role === 'Admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
        {row.original.role}
      </span>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }: any) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium
        ${row.original.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: 'lastLogin',
    header: 'Last Login',
  },
  {
    id: 'actions',
    header: '',
    cell: () => (
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <FiMoreVertical className="h-4 w-4 text-gray-500" />
      </button>
    ),
  },
]

const filterOptions = {
  field: 'role',
  options: [
    { value: 'Admin', label: 'Admin' },
    { value: 'User', label: 'User' },
  ],
}

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
        <Button>
          <FiUserPlus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <DataTable
        data={users}
        columns={columns}
        searchable
        filterable
        filterOptions={filterOptions}
      />
    </div>
  )
}