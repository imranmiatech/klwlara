
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; 
import logo from "../assets/Images/logo.png";
import { FiX } from "react-icons/fi";


const Navbar = () => {
    const sideMenuRef = useRef<HTMLUListElement>(null);

    // ✅ State for search bar
    const [showSearch, setShowSearch] = useState(false);
    const [searchText, setSearchText] = useState("");

    // const openMenu = () => {
    //     if (sideMenuRef.current) {
    //         sideMenuRef.current.style.transform = "translateX(0)";
    //     }
    // };

    // const closeMenu = () => {
    //     if (sideMenuRef.current) {
    //         sideMenuRef.current.style.transform = "translateX(100%)";
    //     }
    // };
    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.classList.remove("translate-x-full");
            sideMenuRef.current.classList.add("translate-x-0");
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.classList.remove("translate-x-0");
            sideMenuRef.current.classList.add("translate-x-full");
        }
    };

    const toggleSearch = () => setShowSearch(!showSearch);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Searching: ${searchText}`);
        setSearchText("");
    };

    return (
        <div >
            {/* Desktop Navbar */}
            <div className="pt-6 pb-6 px-5 md:px-18 lg:px-18 flex justify-between items-center">
                {/* Logo */}
                <div className="w-14.5 h-14.5">
                    <img className="w-full h-full cursor-pointer" src={logo} alt="Logo" />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-x-8 items-center">
                    <ul className="flex gap-x-8 font-normal text-lg mt-4 font-sans cursor-pointer">
                        <li className="hover:text-[#636B2F]">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-[#636B2F]">
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li className="hover:text-[#636B2F]">
                            <Link to="/community">Community</Link>
                        </li>
                        <li className="hover:text-[#636B2F]">
                            <Link to="/service">Service</Link>
                        </li>
                        <li className="hover:text-[#636B2F]">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:text-[#636B2F]">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>

                    {/* Search Icon */}


                    {/* Login Button */}

                </div>
                <div className=" gap-x-8 items-center hidden md:flex">
                    <div className="relative">
                        <FiSearch
                            className="cursor-pointer text-xl text-gray-700 hover:text-gray-900"
                            onClick={toggleSearch}
                        />

                        {/* Search Bar */}
                        {showSearch && (
                            <form
                                onSubmit={handleSearch}
                                className="absolute top-10 right-0 flex bg-white border border-gray-300 rounded-md shadow-md overflow-hidden"
                            >
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="px-4 py-2 outline-none"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="px-4 bg-gray-200 hover:bg-gray-300 cursor-pointer"
                                >
                                    Go
                                </button>
                            </form>
                        )}
                    </div>
                    <button className="text-[#3A0E1F] hover:bg-[#3a0e1f] hover:text-amber-50 px-6 rounded-[60px] py-2.5 font-normal text-lg font-sans border border-[#3A0E1F] cursor-pointer">
                        Login
                    </button>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <FiSearch
                        className="cursor-pointer text-xl text-gray-700"
                        onClick={toggleSearch}
                    />
                    <button onClick={openMenu} className="cursor-pointer text-2xl">
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Search Bar */}
            {showSearch && (
                <form
                    onSubmit={handleSearch}
                    className="md:hidden flex mx-5 mt-2 border border-gray-300 rounded-md overflow-hidden"
                >
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 flex-1 outline-none"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button type="submit" className="px-4 bg-gray-200 hover:bg-gray-300">
                        Go
                    </button>
                </form>
            )}

            {/* Mobile Menu */}
            <ul
                ref={sideMenuRef}
                className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 w-64 h-screen z-50 bg-white transition-transform duration-500 transform translate-x-full"
            >
                <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
                     <FiX className="text-2xl text-gray-700 hover:text-gray-900" />
                </div>

                <li className="hover:text-[#636B2F]">
                    <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li className="hover:text-[#636B2F]">
                    <Link to="/shop" onClick={closeMenu}>Shop</Link>
                </li>
                <li className="hover:text-[#636B2F]">
                    <Link to="/community" onClick={closeMenu}>Community</Link>
                </li>
                <li className="hover:text-[#636B2F]">
                    <Link to="/service" onClick={closeMenu}>Service</Link>
                </li>
                <li className="hover:text-[#636B2F]">
                    <Link to="/about" onClick={closeMenu}>About</Link>
                </li>
                <li className="hover:text-[#636B2F]">
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
