import { stats } from '../constant'

export default function Stats() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col md:flex-row justify-around item-center bg-indigo-950 px-6 py-12 md:p-6">
                {stats.map((stat) => {
                    return (
                        <div key={stat.id} className="flex flex-row items-center justify-center">
                            <div className="flex flex-col items-center justify-center w-full py-5">
                                <img className="text-white w-10 md:w-14 h-10 md:h-14" src={stat.img} alt="" />
                                <h3 className="text-xl md:text-2xl font-semibold text-white">{stat.value}</h3>
                                <p className="text-lg md:text-xl font-normal text-white">{stat.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
