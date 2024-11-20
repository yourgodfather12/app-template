import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to Full-stack App</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-lg mb-4">
            This is a full-stack application template using Next.js and Django.
          </p>
          <Link href="/login">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}