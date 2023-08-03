import { RiGovernmentLine, RiLoginBoxLine, RiMenuLine, RiSearchLine, RiCloseLine, RiFileEditLine } from "react-icons/ri";
import Button from "./Button";
import { useState } from "react";

export default function Navbar() {
    const [toggle, setToggle] = useState(true)
    const handleClick = () => {
        setToggle((prev) => !prev)
    } 
    return (
        <div className="w-full flex flex-col justify-center items-start px-6 md:px-12 py-5 h-full border-b-2 bg-indigo-900">
            <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-5 md:w-1/3">
                    <RiGovernmentLine className="text-orange-300 w-6 h-6 md:w-10 md:h-10 "/>
                    <div className="flex flex-col items-start">
                        <h1 className="text-white font-bold text-[16px] md:text-[20px]">LAW-FIRM</h1>
                        <p className="text-white font-normal text-[8px] md:text-[10px]">Law and Attorney Service</p>
                    </div>
                </div>
                <nav className="md:flex hidden w-full justify-center items-center">
                    <ul className="flex justify-between list-none gap-5 lg:gap-10">
                        <a href=""><li className="text-white border-b border-transparent hover:border-white hover:text-yellow-300">Home</li></a>
                        <a href=""><li className="text-white border-b border-transparent hover:border-white hover:text-yellow-300">About</li></a>
                        <a href=""><li className="text-white border-b border-transparent hover:border-white hover:text-yellow-300">Attorneys</li></a>
                        <a href=""><li className="text-white border-b border-transparent hover:border-white hover:text-yellow-300">Practice Area</li></a>
                    </ul>
                </nav>
                <div className="flex justify-end items-center md:gap-2 md:w-1/3">
                    <Button className="hidden md:flex bg-yellow-600 text-[16px] md:text-[20px]">
                        <RiLoginBoxLine/>
                        Login
                    </Button>
                    <Button className="hidden md:flex bg-yellow-600 text-[16px] md:text-[20px]">
                        <RiFileEditLine/>
                        Register
                    </Button>
                    <Button className="md:flex hidden" onClick={handleClick}>
                        <RiSearchLine/>
                    </Button>
                    <Button className="md:hidden flex" onClick={handleClick}>
                        {toggle ? <RiMenuLine/> : <RiCloseLine/>}
                    </Button>
                </div>
            </div>
            <div className={`${toggle ? 'hidden' : 'md:flex hidden'} items-start justify-start md:justify-end pt-3 w-full`}>
                <form className="w-3/4 md:w-1/3" action="">
                    <label htmlFor="search" className="sr-only">search</label>
                    <input type="search" name="" id="" className="flex border rounded-lg py-1 md:py-2 pl-4 pr-5 w-full shadow-sm" placeholder="Search Documentation" />
                </form>
            </div>
            <nav className={`${toggle ? 'hidden' : 'flex md:hidden'} absolute left-0 top-[82px] z-10 w-full border-b-2 bg-indigo-900`}>
                <ul className="flex flex-col px-6 justify-between list-none py-5">
                    <a href=""><li className="text-white hover:underline underline-offset-4 decoration-white hover:text-yellow-300">Home</li></a>
                    <a href=""><li className="text-white hover:underline underline-offset-4 decoration-white hover:text-yellow-300">About</li></a>
                    <a href=""><li className="text-white hover:underline underline-offset-4 decoration-white hover:text-yellow-300">Attorneys</li></a>
                    <a href=""><li className="text-white hover:underline underline-offset-4 decoration-white hover:text-yellow-300">Practice Area</li></a>
                    <div className="flex flex-row justify-start items-center gap-5 py-5">
                        <Button className="flex bg-yellow-600 text-[16px] md:text-[20px]">
                            <RiLoginBoxLine/>
                            Login
                        </Button>
                        <Button className="flex bg-yellow-600 text-[16px] md:text-[20px]">
                            <RiFileEditLine/>
                            Register
                        </Button>
                    </div>
                </ul>
            </nav>
        </div>
    ) 
}
