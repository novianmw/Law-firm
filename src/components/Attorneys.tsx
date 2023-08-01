import { attorneys } from "../constant";

export default function Attorneys() {
    return (
        <div className="flex flex-col justify-center items-center w-full p-12">
            <div className="w-full text-center gap-5 mb-10">
                <p className="uppercase text-xl font-normal text-yellow-400">our attorneys</p>
                <h1 className="text-2xl font-semibold">We Have a Expert Attorneys to Support Our Clients</h1>
            </div>
            <div className="flex flex-row justify-center gap-10">
                {attorneys.map((attorney, index) => (
                    <div key={index} className="relative flex flex-col w-full">
                        <img className="h-[300px] gap-5" src={attorney.person} alt="" />
                        <div className="absolute bottom-10 mx-16 flex justify-center items-center border-2">
                            <h1 className="text-white font-semibold text-xl text-center">{attorney.name}</h1>
                        </div>
                </div>
                ))}
            </div>
        </div>
    )
}