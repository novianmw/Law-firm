import { RiGovernmentLine, RiLoginBoxLine, RiMenuLine, RiSearchLine } from "react-icons/ri";
import Button from "./Button";

export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-12 py-5 border-b-2 bg-indigo-900">
            <div className="flex items-center gap-5">
                <h1 className="text-orange-300">
                    <RiGovernmentLine className="w-10 h-10 "/>
                </h1>
                <h1 className="text-white font-bold">LAW-FIRM</h1>
            </div>
            <nav className="w-1/3">
                <ul className="flex justify-between text-white">
                    <li>Home</li>
                    <li>About</li>
                    <li>Attorneys</li>
                    <li>Practice Area</li>
                </ul>
            </nav>
            <div className="flex items-center gap-5">
                <Button className="bg-yellow-600">
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
