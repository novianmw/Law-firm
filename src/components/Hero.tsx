import { HeroImage } from "../assets/images/list"
import { FiPhoneCall } from "react-icons/fi"
import Button from "./Button"

export default function Hero() {
    return (
        <div className="relative w-full flex flex-col items-center">
            <div className="absolute h-[600px] w-full object-cover bg-black/50"></div>
            <img className="-z-20 h-[600px] w-full object-cover object-top" src={HeroImage} alt="Law-Image" />
            <div className="absolute w-full flex items-center justify-between gap-32 px-24 py-32">
                <div className="flex flex-col items-start justify-center w-full gap-y-5">
                    <h1 className="text-5xl font-bold text-white">We Are Specialise</h1>
                    <h1 className="text-5xl font-bold text-white">in All Criminal Law.</h1>
                    <p className="text-xl font-normal text-white uppercase">with over 15 years of law practice in indonesia</p>
                    <div className="flex flex-row items-center gap-5">
                        <Button className="bg-yellow-600 uppercase px-10 h-16">
                            practice area
                        </Button>
                        <FiPhoneCall className="w-10 h-10 text-white"/>
                        <div className="flex flex-col items-start">
                            <p className="text-xl font-normal text-white">Call Us Now</p>
                            <p className="text-xl font-normal text-white">+62-812-123-4567</p>
                        </div>
                    </div>
                </div>
            <div className="flex flex-col items-start border-2 bg-white rounded w-[700px] h-[500px] p-10 mt-12">
                <div className="mb-5">
                    <h1 className="text-2xl font-bold ">Will Assist in Finding a Lawyer</h1>
                    <p className="text-xl font-normal ">a professional Lawyer available for you</p>
                </div>
                <form className="w-full">
                    <div className="mb-5">
                        <label htmlFor="name"/>
                        <input placeholder="Search Attorney Name " type="text" className="transition duration-300 w-full focus:outline-none focus:ring focus:border-blue-400 focus:ring-blue-300 h-10 px-5 rounded border-2 border-slate-300 shadow-sm" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="name"/>
                        <input placeholder="Practice Area " type="text" className="transition duration-300 w-full focus:outline-none focus:ring focus:border-blue-400 focus:ring-blue-300 h-10 px-5 rounded border-2 border-slate-300 shadow-sm" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="name"/>
                        <input placeholder="Find Location " type="text" className="transition duration-300 w-full focus:outline-none focus:ring focus:border-blue-400 focus:ring-blue-300 h-10 px-5 rounded border-2 border-slate-300 shadow-sm" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="name"/>
                        <input placeholder="Booking Date" type="date" className="transition duration-300 w-full focus:outline-none focus:ring focus:border-blue-400 focus:ring-blue-300 h-10 px-5 rounded border-2 border-slate-300 shadow-sm" />
                    </div>
                    <Button className=" uppercase bg-yellow-600">
                        search attorneys
                    </Button>
                </form>
            </div>
            </div>
        </div>
    )
}
