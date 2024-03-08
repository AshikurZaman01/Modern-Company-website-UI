import { NavLink } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {

    return (
        <div>

            <header className="bg-navbar border-b-[1px] border-primary/50">
                <nav className="container flex justify-between items-center h-[70px] py-2 ">

                    {/* logo */}
                    <div className="text-2xl md:text-3xl text-white">
                        <NavLink>Coz<span className="inline-block font-bold text-primary ">Web</span></NavLink>
                    </div>
                    {/* logo */}

                    {/* desktop menu section */}
                    <div>
                        <ul className="flex items-center gap-4 text-white">

                            {/* home section */}
                            <li className="group">
                                <NavLink className="flex items-center relative  cursor-pointer">Home
                                    <span><FaCaretDown className="text-xl transition-all duration-200 group-hover:rotate-180" /></span>
                                </NavLink>
                                {/* home dropdown */}
                                <div className="absolute  hidden z-[9999]  w-[150px] bg-white text-black group-hover:block rounded-md shadow-md">
                                    <ul className="space-y-3">
                                        <li className="cursor-pointer hover:bg-violet-200 rounded-md p-2 m-1">Services</li>
                                        <li className="cursor-pointer hover:bg-violet-200 rounded-md p-2 m-1">About us</li>
                                        <li className="cursor-pointer hover:bg-violet-200 rounded-md p-2 m-1">Privacy Policy</li>
                                    </ul>
                                </div>
                                {/* home dropdown */}
                            </li>
                            {/* home section */}


                            <li><NavLink className="flex items-center relative group cursor-pointer">Services
                                <span><FaCaretDown className="text-xl transition-all duration-200 group-hover:rotate-180" /></span>
                            </NavLink></li>

                            <li><NavLink>Contact Us</NavLink></li>

                            {/* call on us */}
                            <li className="flex items-center gap-4">
                                <div>
                                    <BiPhoneCall className="text-2xl  h-[40px] w-[40px] bg-primary rounded-md p-2 hover:bg-primary/90" />
                                </div>

                                <div>
                                    <div>
                                        <p>Call us on</p>
                                        <p className="text-xl">
                                            <a href="+91132423">+91 132423</a>
                                        </p>
                                    </div>

                                    <div>

                                    </div>
                                </div>
                            </li>
                            {/* call on us */}

                            {/* dark and light mood */}
                            <li>
                                <div className="text-2xl ml-5 cursor-pointer">
                                    <FaMoon />
                                    <FaSun />
                                </div>
                            </li>
                            {/* dark and light mood */}

                        </ul>
                    </div>
                    {/* desktop menu section */}
                </nav>
            </header>

        </div>
    );
};

export default Navbar;