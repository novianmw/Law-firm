import { HeroImage } from '../assets/images/list'
import { FiPhoneCall } from 'react-icons/fi'
import Button from './Button'

export default function Hero() {
    return (
        <div
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImage})`, backgroundSize: 'cover' }}
            className="w-full h-full">
            <div className="flex flex-col md:flex-row justify-between md:justify-around items-center px-6 py-12 md:p-12">
                <div className="flex flex-col items-center md:items-start py-6">
                    <h1 className="w-[450px] pb-3 text-3xl md:text-5xl font-bold text-white text-center md:text-start">We are Specialised</h1>
                    <h1 className="w-[450px] pb-3 text-3xl md:text-5xl font-bold text-white text-center md:text-start">in All Criminal Law</h1>
                    <p className="pb-5 text-lg md:text-xl text-white text-center md:text-start uppercase">
                        with over 15 years of law practice in indonesia
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <Button className="text-md bg-yellow-600 uppercase px-10 h-16">practice area</Button>
                        <div className="flex flex-row items-center gap-5">
                            <FiPhoneCall className="w-10 h-10 text-white" />
                            <div className="flex flex-col items-start">
                                <p className="text-lg md:text-xl font-normal text-white">Call Us Now</p>
                                <p className="text-lg md:text-xl font-normal text-white">+62-812-123-4567</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start py-6">
                    <div className="flex flex-col items-start border-2 bg-white rounded p-12">
                        <div className="mb-5">
                            <h1 className="pb-1 text-xl md:text-2xl font-bold text-black text-center md:text-start">Will Assist in Finding a Lawyer</h1>
                            <p className="pb-1 text-lg md:text-xl font-normal text-black text-center md:text-start">a professional Lawyer available for you</p>
                        </div>
                        <form className="w-full">
                            <div className="my-5">
                                <label htmlFor="name" />
                                <input
                                    placeholder="Search Attorney Name "
                                    type="text"
                                    className="transition duration-300 w-full focus:outline-none focus:ring focus:border-blue-400 focus:ring-blue-300 h-10 px-5 rounded border-2 border-slate-300 shadow-sm"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="name" />
                                <input
                                    placeholder="Practice Area "
                                    type="text"
                                    className="transition duration-300 w-full focus:outline-none focus:ring focus:border-blue-400 focus:ring-blue-300 h-10 px-5 rounded border-2 border-slate-300 shadow-sm"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="name" />
                                <input
                                    placeholder="Find Location "
                                    type="text"
                                    className="transition duration-300 w-full focus:outline-none focus:ring focus:border-blue-400 focus:ring-blue-300 h-10 px-5 rounded border-2 border-slate-300 shadow-sm"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="name" />
                                <input
                                    placeholder="Booking Date"
                                    type="date"
                                    className="transition duration-300 w-full focus:outline-none focus:ring focus:border-blue-400 focus:ring-blue-300 h-10 px-5 rounded border-2 border-slate-300 shadow-sm"
                                />
                            </div>
                            <div className="flex justify-center md:justify-start items-center">
                                <Button className="mt-6 text-md bg-yellow-600 uppercase ">search attorneys</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
