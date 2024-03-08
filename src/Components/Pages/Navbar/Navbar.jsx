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

                            {/* services  */}
                            <li className="group">
                                <NavLink className="flex items-center relative  cursor-pointer">Services
                                    <span><FaCaretDown className="text-xl transition-all duration-200 group-hover:rotate-180" /></span>
                                </NavLink>
                                {/* services dropdown full wide */}
                                <div className="absolute hidden rounded-b-3xl w-full z-[9999] left-0 top-[71px] p-2 bg-white text-black shadow-md group-hover:block">
                                    <div className="grid grid-cols-3 gap-5 ">

                                        <div className="overflow-hidden">
                                            <img className="max-h-[300px] w-full object-fill rounded-b-3xl " src="https://images.unsplash.com/photo-1709668158989-ca9f67bb9bb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        </div>
                                        <div className="col-span-2">
                                            <h1 className="text-2xl font-semibold">Best Selling</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae omnis nostrum ratione maiores doloremque assumenda fugiat porro quod ducimus sint blanditiis, eius ipsam doloribus quas. Suscipit veniam unde sequi aperiam!</p>

                                            <div className="grid grid-cols-3 mt-5">
                                                <div>
                                                    <h1 className="text-xl font-semibold">Development</h1>
                                                    <ul className="space-y-3">
                                                        <li className="cursor-pointer font-semibold text-primary hover:bg-violet-200 rounded-md p-2 m-1">Web Development</li>
                                                        <li className="cursor-pointer font-semibold text-primary hover:bg-violet-200 rounded-md p-2 m-1">Mobile Development</li>
                                                        <li className="cursor-pointer font-semibold text-primary hover:bg-violet-200 rounded-md p-2 m-1">Software Development</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h1 className="text-xl font-semibold">Other Services</h1>
                                                    <ul className="space-y-3">
                                                        <li className="cursor-pointer font-semibold text-primary hover:bg-violet-200 rounded-md p-2 m-1">Cloud Services</li>
                                                        <li className="cursor-pointer font-semibold text-primary hover:bg-violet-200 rounded-md p-2 m-1">Mobile App</li>
                                                        <li className="cursor-pointer font-semibold text-primary hover:bg-violet-200 rounded-md p-2 m-1">App Development</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <img className="h-[200px] w-[250px]" src="https://images.unsplash.com/photo-1709593491550-1f92cda74017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* services dropdown full wide */}
                            </li>
                            {/* services dropdown */}

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