import { useState } from 'react'
import { content1, content2, content3, content4, content5, icon4, icon5 } from '../assets/images/list'
import { practiceAreas, services } from '../constant'
import Button from './Button'

export default function PracticeArea() {
    const [currentContent, setCurrentContent] = useState(0)

    const clickContent = (index: any) => {
        setCurrentContent(index)
    }
    return (
        <div className="flex flex-col justify-center items-center w-full px-6 py-12 md:p-12">
            <div className="flex flex-col items-center py-6">
                <h1 className="pb-3 text-xl md:text-2xl font-normal text-orange-300 uppercase">practice area</h1>
                <h1 className="text-4xl md:text-5xl font-semibold text-black text-center">Law Solutions to Solve Your Problems</h1>
            </div>
            <div className="w-full flex justify-center items-center">
                {services.map((service, index) => {
                    return (
                        <Button key={service.id} className={`h-32 mb-12 flex flex-col items-center justify-center w-[250px] border ${currentContent === index ? 'bg-indigo-900 text-yellow-500' : 'bg-slate-300 hover:bg-slate-500 hover:text-yellow-600'} transition transition-300`} 
                        onClick={() => clickContent(index)}>
                            <img className="w-6 h-6 md:w-10 md:h-10" src={service.img} alt="" />
                            <h3 className="text-lg md:text-xl">{service.title}</h3>
                        </Button>
                    )
                })}
            </div>
            <div className="w-full h-[75vh] relative flex flex-col justify-center items-center">
                {practiceAreas.map((area, index) => {
                    return (
                        <div key={index} className={`absolute flex flex-row justify-center items-start gap-10 ${index === currentContent ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="flex flex-col items-start w-[600px] px-6">
                                <h1 className="pb-3 text-4xl font-semibold text-black">{area.title}</h1>
                                <p className="pb-3 text-lg font-normal text-slate-600 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit molestias laboriosam! Saepe asperiores amet quas atque consequatur, recusandae aut accusamus, minus incidunt alias laborum neque excepturi ut ducimus inventore.
                                Eaque earum illo, repudiandae maxime delectus sit voluptatum? Fugit maxime fugiat recusandae aliquid non natus laborum labore, nesciunt beatae! Distinctio nemo laudantium minus nulla est illo quia placeat assumenda excepturi.</p>
                                <Button className="py-3 flex bg-yellow-600 text-[16px] md:text-[20px]">
                                    Learn More
                                </Button>
                            </div>
                            <div className="relative flex flex-col items-start px-6">
                                <img src={area.image} alt="" className='w-[600px]' />
                                <img src={area.icon} alt="" className='absolute top-32 border-4 p-5 bg-yellow-600 -left-10'/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>



        // <div className="flex flex-col items-center w-full p-12">
        //     <div className="w-full text-center gap-5 mb-10">
        //         <p className="uppercase text-xl font-normal text-yellow-400">practice area</p>
        //         <h1 className="text-2xl text-center font-semibold">Law Solutions to Solve Your Problems</h1>
        //     </div>
        //     <div className="flex w-full mx-12">
        //         {services.map((service) => {
        //             return (
        //                 <Button key={service.id} className="h-32 mb-12 flex flex-col items-center justify-center w-1/2 border bg-slate-300 ">
        //                     <img className="text-white" src={service.img} alt="" />
        //                     <h3 className="font-normal text-xl">{service.title}</h3>
        //                 </Button>
        //             )
        //         })}
        //     </div>
        //     <div className="w-full flex flex-row items-center justify-between gap-32 p-12">
        //         <div className="flex flex-col gap-5 w-[700px]">
        //             <h1 className="font-semibold text-2xl">Criminal Law</h1>
        //             <p className="font-normal text-xl">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, velit quos molestias optio possimus hic qui tempora
        //                 consectetur obcaecati ab officiis illo, unde iure esse eum? Ullam, sapiente sunt!
        //             </p>
        //             <div className="">
        //                 <Button className="bg-yellow-400">Read More</Button>
        //             </div>
        //         </div>
        //         <div className="relative flex flex-col gap-5">
        //             <img className="w-[1000px] h-[500px] object-cover object-right" src={content1} alt="" />
        //             <img className="absolute border-4 p-5 bg-yellow-600 -left-10 top-[200px]" src={icon4} alt="" />
        //         </div>
        //     </div>
        //     <div className="w-full flex flex-row items-center justify-between gap-32 p-12">
        //         <div className="flex flex-col gap-5 w-[700px]">
        //             <h1 className="font-semibold text-2xl">Criminal Law</h1>
        //             <p className="font-normal text-xl">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, velit quos molestias optio possimus hic qui tempora
        //                 consectetur obcaecati ab officiis illo, unde iure esse eum? Ullam, sapiente sunt!
        //             </p>
        //             <div className="">
        //                 <Button className="bg-yellow-400">Read More</Button>
        //             </div>
        //         </div>
        //         <div className="relative flex flex-col gap-5">
        //             <img className="w-[1000px] h-[500px] object-cover object-right" src={content2} alt="" />
        //             <img className="absolute border-4 p-5 bg-yellow-600 -left-10 top-[200px]" src={icon4} alt="" />
        //         </div>
        //     </div>
        //     <div className="w-full flex flex-row items-center justify-between gap-32 p-12">
        //         <div className="flex flex-col gap-5 w-[700px]">
        //             <h1 className="font-semibold text-2xl">Criminal Law</h1>
        //             <p className="font-normal text-xl">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, velit quos molestias optio possimus hic qui tempora
        //                 consectetur obcaecati ab officiis illo, unde iure esse eum? Ullam, sapiente sunt!
        //             </p>
        //             <div className="">
        //                 <Button className="bg-yellow-400">Read More</Button>
        //             </div>
        //         </div>
        //         <div className="relative flex flex-col gap-5">
        //             <img className="w-[1000px] h-[500px] object-cover object-right" src={content3} alt="" />
        //             <img className="absolute border-4 p-5 bg-yellow-600 -left-10 top-[200px]" src={icon4} alt="" />
        //         </div>
        //     </div>
        //     <div className="w-full flex flex-row items-center justify-between gap-32 p-12">
        //         <div className="flex flex-col gap-5 w-[700px]">
        //             <h1 className="font-semibold text-2xl">Criminal Law</h1>
        //             <p className="font-normal text-xl">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, velit quos molestias optio possimus hic qui tempora
        //                 consectetur obcaecati ab officiis illo, unde iure esse eum? Ullam, sapiente sunt!
        //             </p>
        //             <div className="">
        //                 <Button className="bg-yellow-400">Read More</Button>
        //             </div>
        //         </div>
        //         <div className="relative flex flex-col gap-5">
        //             <img className="w-[1000px] h-[500px] object-cover object-right" src={content4} alt="" />
        //             <img className="absolute border-4 p-5 bg-yellow-600 -left-10 top-[200px]" src={icon4} alt="" />
        //         </div>
        //     </div>
        //     <div className="w-full flex flex-row items-center justify-between gap-32 p-12">
        //         <div className="flex flex-col gap-5 w-[700px]">
        //             <h1 className="font-semibold text-2xl">Criminal Law</h1>
        //             <p className="font-normal text-xl">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, velit quos molestias optio possimus hic qui tempora
        //                 consectetur obcaecati ab officiis illo, unde iure esse eum? Ullam, sapiente sunt!
        //             </p>
        //             <div className="">
        //                 <Button className="bg-yellow-400">Read More</Button>
        //             </div>
        //         </div>
        //         <div className="relative flex flex-col gap-5">
        //             <img className="w-[1000px] h-[500px] object-cover object-right" src={content5} alt="" />
        //             <img className="absolute border-4 p-5 bg-yellow-600 -left-10 top-[200px]" src={icon5} alt="" />
        //         </div>
        //     </div>
        // </div>
    )
}
