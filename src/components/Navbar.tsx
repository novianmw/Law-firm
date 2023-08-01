import { RiGovernmentLine, RiLoginBoxLine, RiMenuLine, RiSearchLine } from "react-icons/ri";
import Button from "./Button";

export default function Navbar() {
    return (
        <div className="w-full flex justify-between items-center px-6 md:px-12 py-5 border-b-2 bg-indigo-900">
            <div className="flex items-center gap-5 md:w-1/3">
                <RiGovernmentLine className="text-orange-300 w-5 h-5 md:w-10 md:h-10 "/>
                <div className="flex flex-col items-start">
                    <h1 className="text-white font-bold text-[16px] md:text-[20px]">LAW-FIRM</h1>
                    <p className="text-white font-normal text-[8px] md:text-[10px]">Law and Attorney Service</p>
                </div>
            </div>
            <nav className="md:flex hidden">
                <ul className="flex justify-between list-none gap-5 lg:gap-10">
                    <a href=""><li className="text-white border-b border-transparent hover:border-white hover:text-yellow-300">Home</li></a>
                    <a href=""><li className="text-white border-b border-transparent hover:border-white hover:text-yellow-300">About</li></a>
                    <a href=""><li className="text-white border-b border-transparent hover:border-white hover:text-yellow-300">Attorneys</li></a>
                    <a href=""><li className="text-white border-b border-transparent hover:border-white hover:text-yellow-300">Practice Area</li></a>
                </ul>
            </nav>
            <div className="flex justify-end items-center md:gap-2 md:w-1/3">
                <Button className="bg-yellow-600 text-[16px] md:text-[20px]">
                    <RiLoginBoxLine/>
                    Login
                </Button>
                <Button>
                    <RiSearchLine/>
                </Button>
                <Button>
                    <RiMenuLine/>
                </Button>
            </div>
        </div>
    ) 
}
