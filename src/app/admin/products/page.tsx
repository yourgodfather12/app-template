import { DataTable } from '@/components/admin/DataTable'
import { Button } from '@/components/ui/button'
import { FiPlus, FiMoreVertical } from 'react-icons/fi'

const products = [
  {
    id: 1,
    name: 'Product A',
    price: '$99.99',
    stock: 150,
    category: 'Electronics',
    status: 'In Stock',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$49.99',
    stock: 0,
    category: 'Clothing',
    status: 'Out of Stock',
  },
  {
    id: 3,
    name: 'Product C',
    price: '$199.99',
    stock: 25,
    category: 'Electronics',
    status: 'Low Stock',
  },
]

const columns = [
  {
    accessorKey: 'name',
    header: 'Product Name',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'stock',
    header: 'Stock',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }: any) => {
      const status = row.original.status
      const colors = {
        'In Stock': 'bg-green-100 text-green-800',
        'Out of Stock': 'bg-red-100 text-red-800',
        'Low Stock': 'bg-yellow-100 text-yellow-800',
      }[status]

      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors}`}>
          {status}
        </span>
      )
    },
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

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
        <Button>
          <FiPlus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <DataTable data={products} columns={columns} />
      </div>
    </div>
  )
}