// @ts-nocheck
import { useState } from 'react'
import { Bitcoin, X, Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false); // Close menu after navigation
    };

    return (
        <nav className="bg-gray-800 sticky top-0 z-10">
            <div className="flex justify-between items-center py-6 px-8 mx-auto">
                {/* Logo */}
                <div>
                    <h1 className="text-white font-bold cursor-pointer" onClick={() => handleNavigation('/')}>
                        CryptoTracker <Bitcoin className='inline' size={28} />
                    </h1>
                </div>

                {/* Desktop Links - Hidden on mobile, shown on large screens */}
                <div className='hidden lg:flex gap-4'>
                    <h1 className='text-white font-bold cursor-pointer hover:bg-white hover:text-gray-800 py-2 px-3 rounded-md border border-white transition' 
                        onClick={() => handleNavigation('/')}>
                        Home
                    </h1>
                    <h1 className='text-white font-bold cursor-pointer hover:bg-white hover:text-gray-800 py-2 px-3 rounded-md border border-white transition' 
                        onClick={() => handleNavigation('/gainers')}>
                        Gainers
                    </h1>
                    <h1 className='text-white font-bold cursor-pointer hover:bg-white hover:text-gray-800 py-2 px-3 rounded-md border border-white transition' 
                        onClick={() => handleNavigation('/losers')}>
                        Losers
                    </h1>
                </div>

                {/* Hamburger Icon - Only on mobile */}
                <div className="lg:hidden">
                    <button 
                        className='transition duration-300 bg-white rounded-sm p-2' 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Dropdown below navbar */}
            {isOpen && (
                <div className="lg:hidden bg-gray-700 px-8 py-4">
                    <div className="flex flex-col gap-3">
                        <h1 className='text-white font-bold cursor-pointer hover:bg-white hover:text-gray-800 py-2 px-3 rounded-md border border-white transition' 
                            onClick={() => handleNavigation('/')}>
                            Home
                        </h1>
                        <h1 className='text-white font-bold cursor-pointer hover:bg-white hover:text-gray-800 py-2 px-3 rounded-md border border-white transition' 
                            onClick={() => handleNavigation('/gainers')}>
                            Gainers
                        </h1>
                        <h1 className='text-white font-bold cursor-pointer hover:bg-white hover:text-gray-800 py-2 px-3 rounded-md border border-white transition' 
                            onClick={() => handleNavigation('/losers')}>
                            Losers
                        </h1>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar