"use client"
import React, {useState} from 'react'

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/blogs", label: "Blogs" },
        { href: "/contact", label: "Contact" },
    ];    
  return (
    <nav className = 'fixed w-full bg-dark/80 backdrop-blur-sm z-50'>
        <div className='container max-w-7xl mx-auto px-4'>
            {/* Desktop Menu */}
            <div>
                
            </div>


            {/* Mobile Menu */}
        </div>
    </nav>
  )
}

export default Navbar;