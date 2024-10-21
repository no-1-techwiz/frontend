'use client'

import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Admin = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const adminName = 'Admin'

    return (
        <>
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 text-md no-underline font-semibold leading-6 text-gray-900 ">
                        Welcome, {adminName}
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/admin/location" className="text-sm font-semibold leading-6 text-gray-900">Manage Locations</Link>
                    <Link to="/admin/currency" className="text-sm font-semibold leading-6 text-gray-900">Edit Currencies</Link>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Manage Categories</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Go Back<span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
        </header>
          { children }
    <Outlet />
    </>
  )
}