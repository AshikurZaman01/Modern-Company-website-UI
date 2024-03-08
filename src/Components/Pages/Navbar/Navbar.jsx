import { NavLink } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import { FaMoon, FaSun, FaCaretDown } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [theme, setTheme] = useState('dark');
    const element = document.documentElement;

    // Check localStorage for theme preference on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // Update theme and save to localStorage when theme changes
    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            element.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.add('light');
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme, element.classList]);

    // Toggle between dark and light theme
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    return (
        <div>
            <header className="bg-navbar border-b-[1px] border-primary/50">
                <nav className="container flex justify-between items-center h-[70px] py-2 ">
                    {/* Logo */}
                    <div className="text-2xl md:text-3xl text-white">
                        <NavLink to="/">Coz<span className="inline-block font-bold text-primary">Web</span></NavLink>
                    </div>

                    {/* Desktop menu section */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-4 text-white">
                            {/* Home section with dropdown */}
                            <li className="group">
                                <NavLink to="/" className="flex items-center relative cursor-pointer">Home
                                    <span><FaCaretDown className="text-xl transition-all duration-200 group-hover:rotate-180" /></span>
                                </NavLink>
                                {/* Home dropdown */}
                                <div className="absolute hidden z-[9999] w-[150px] bg-white text-black group-hover:block rounded-md shadow-md">
                                    <ul className="space-y-3">
                                        <li className="cursor-pointer hover:bg-violet-200 rounded-md p-2 m-1">Services</li>
                                        <li className="cursor-pointer hover:bg-violet-200 rounded-md p-2 m-1">About us</li>
                                        <li className="cursor-pointer hover:bg-violet-200 rounded-md p-2 m-1">Privacy Policy</li>
                                    </ul>
                                </div>
                                {/* Home dropdown */}
                            </li>

                            {/* Services section with full width dropdown */}
                            <li className="group">
                                <NavLink to="/services" className="flex items-center relative cursor-pointer">Services
                                    <span><FaCaretDown className="text-xl transition-all duration-200 group-hover:rotate-180" /></span>
                                </NavLink>
                                {/* Services dropdown full width */}
                                <div className="absolute hidden rounded-b-3xl w-full z-[9999] left-0 top-[71px] p-2 bg-white text-black shadow-md group-hover:block">
                                    <div className="grid grid-cols-3 gap-5">
                                        {/* Content */}
                                    </div>
                                </div>
                                {/* Services dropdown full width */}
                            </li>

                            {/* Contact Us */}
                            <li><NavLink to="/contact">Contact Us</NavLink></li>

                            {/* Call Us */}
                            <li className="flex items-center gap-4">
                                <div>
                                    <BiPhoneCall className="text-2xl h-[40px] w-[40px] bg-primary rounded-md p-2 hover:bg-primary/90" />
                                </div>
                                <div>
                                    <div>
                                        <p>Call us on</p>
                                        <p className="text-xl">
                                            <a href="+91132423">+91 132423</a>
                                        </p>
                                    </div>
                                </div>
                            </li>

                            {/* Dark and Light Mode */}
                            <li className="block">
                                <div className="flex gap-10 text-2xl ml-5 cursor-pointer">
                                    {theme === 'dark' ?
                                        <FaMoon onClick={toggleTheme} /> :
                                        <FaSun onClick={toggleTheme} />
                                    }
                                </div>
                            </li>
                            {/* Dark and Light Mode */}
                        </ul>
                    </div>
                    {/* Desktop menu section */}

                    {/* Mobile menu section */}
                    <div className="flex items-center gap-4 md:hidden">
                        {/* Mobile menu button */}
                        {showMenu ?
                            <AiOutlineClose
                                onClick={() => setShowMenu(!showMenu)}
                                className="text-3xl text-white cursor-pointer"
                            /> :
                            <RiMenu3Fill
                                onClick={() => setShowMenu(!showMenu)}
                                className="text-3xl text-white cursor-pointer"
                            />
                        }
                    </div>
                    {/* Mobile menu section */}
                </nav>
            </header>
            {/* Mobile menu content */}
            {
                showMenu ? (
                    <div className="md:hidden bg-black text-white">
                        {/* Mobile menu items */}
                        <ul className="py-4">
                            <li className="py-2 pl-4">Home</li>
                            <li className="py-2 pl-4">Services</li>
                            <li className="py-2 pl-4">Contact Us</li>
                            {/* Add more mobile menu items as needed */}
                        </ul>
                        {/* Mobile menu items */}
                    </div>
                ) : ""
            }
            {/* Mobile menu content */}
        </div>
    );
};

export default Navbar;
