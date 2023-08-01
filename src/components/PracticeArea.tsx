import { content1, content2, content3, content4, content5, icon4, icon5 } from "../assets/images/list"
import { services } from "../constant"
import Button from "./Button"

export default function PracticeArea() {

    return (
        <div className="flex flex-col items-center w-full p-12">
            <div className="w-full text-center gap-5 mb-10">
                <p className="uppercase text-xl font-normal text-yellow-400">practice area</p>
                <h1 className="text-2xl text-center font-semibold">Law Solutions to Solve Your Problems</h1>
            </div>
            <div className="flex w-full mx-12">
                {services.map((service) => {
                    return (
                        <Button key={service.id} className="h-32 mb-12 flex flex-col items-center justify-center w-1/2 border bg-slate-300 ">
                            <img className="text-white" src={service.img} alt="" />
                            <h3 className="font-normal text-xl">{service.title}</h3>
                        </Button>
                    )
                })}
            </div>
            <div className="w-full flex flex-row items-center justify-between gap-32 p-12">
                <div className="flex flex-col gap-5 w-[700px]">
                    <h1 className="font-semibold text-2xl">Criminal Law</h1>
                    <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, velit quos molestias optio possimus hic qui tempora consectetur obcaecati ab officiis illo, unde iure esse eum? Ullam, sapiente sunt!</p>
                    <div className="">
                        <Button className="bg-yellow-400">Read More</Button>
                    </div>
                </div>
                <div className="relative flex flex-col gap-5">
                    <img className="w-[1000px] h-[500px] object-cover object-right" src={content1} alt="" />
                    <img className="absolute border-4 p-5 bg-yellow-600 -left-10 top-[200px]" src={icon4} alt="" />
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between gap-32 p-12">
                <div className="flex flex-col gap-5 w-[700px]">
                    <h1 className="font-semibold text-2xl">Criminal Law</h1>
                    <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, velit quos molestias optio possimus hic qui tempora consectetur obcaecati ab officiis illo, unde iure esse eum? Ullam, sapiente sunt!</p>
                    <div className="">
                        <Button className="bg-yellow-400">Read More</Button>
                    </div>
                </div>
                <div className="relative flex flex-col gap-5">
                    <img className="w-[1000px] h-[500px] object-cover object-right" src={content2} alt="" />
                    <img className="absolute border-4 p-5 bg-yellow-600 -left-10 top-[200px]" src={icon4} alt="" />
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between gap-32 p-12">
                <div className="flex flex-col gap-5 w-[700px]">
                    <h1 className="font-semibold text-2xl">Criminal Law</h1>
                    <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, velit quos molestias optio possimus hic qui tempora consectetur obcaecati ab officiis illo, unde iure esse eum? Ullam, sapiente sunt!</p>
                    <div className="">
                        <Button className="bg-yellow-400">Read More</Button>
                    </div>
                </div>
                <div className="relative flex flex-col gap-5">
                    <img className="w-[1000px] h-[500px] object-cover object-right" src={content3} alt="" />
                    <img className="absolute border-4 p-5 bg-yellow-600 -left-10 top-[200px]" src={icon4} alt="" />
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between gap-32 p-12">
                <div className="flex flex-col gap-5 w-[700px]">
                    <h1 className="font-semibold text-2xl">Criminal Law</h1>
                    <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, velit quos molestias optio possimus hic qui tempora consectetur obcaecati ab officiis illo, unde iure esse eum? Ullam, sapiente sunt!</p>
                    <div className="">
                        <Button className="bg-yellow-400">Read More</Button>
                    </div>
                </div>
                <div className="relative flex flex-col gap-5">
                    <img className="w-[1000px] h-[500px] object-cover object-right" src={content4} alt="" />
                    <img className="absolute border-4 p-5 bg-yellow-600 -left-10 top-[200px]" src={icon4} alt="" />
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between gap-32 p-12">
                <div className="flex flex-col gap-5 w-[700px]">
                    <h1 className="font-semibold text-2xl">Criminal Law</h1>
                    <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, velit quos molestias optio possimus hic qui tempora consectetur obcaecati ab officiis illo, unde iure esse eum? Ullam, sapiente sunt!</p>
                    <div className="">
                        <Button className="bg-yellow-400">Read More</Button>
                    </div>
                </div>
                <div className="relative flex flex-col gap-5">
                    <img className="w-[1000px] h-[500px] object-cover object-right" src={content5} alt="" />
                    <img className="absolute border-4 p-5 bg-yellow-600 -left-10 top-[200px]" src={icon5} alt="" />
                </div>
            </div>
        </div>
    )
}
