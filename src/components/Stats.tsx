import { stats } from "../constant"

export default function Stats() {
    return (
        <div className="flex item-center h-[50vh] bg-indigo-950">
            {stats.map((stat) => {
                return (
                    <div key={stat.id} className="flex flex-row items-center justify-center w-1/4 text-center text-white">
                        <div className="flex flex-col items-center justify-center w-full">
                            <img className="text-white" src={stat.img} alt="" />
                            <h3 className="font-semibold text-2xl">{stat.value}</h3>
                            <p className="font-normal text-xl">{stat.title}</p>
                        </div>
                    </div>
                )
            })}
        </div>
  ) 
}