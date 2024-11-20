'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FiSave } from 'react-icons/fi'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: 'My Admin Panel',
    emailNotifications: true,
    darkMode: false,
    language: 'en',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle settings update
    console.log('Settings updated:', settings)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Site Name
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="emailNotifications"
                checked={settings.emailNotifications}
                onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="emailNotifications" className="text-sm font-medium text-gray-700">
                Enable Email Notifications
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="darkMode"
                checked={settings.darkMode}
                onChange={(e) => setSettings({ ...settings, darkMode: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="darkMode" className="text-sm font-medium text-gray-700">
                Enable Dark Mode
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit">
              <FiSave className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}