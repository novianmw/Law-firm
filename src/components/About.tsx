import { person4 } from "../assets/images/list";

export default function About() {
  return (
    <div className="w-full h-full">
        <div className="flex flex-col md:flex-row justify-between md:justify-around items-center px-6 py-12 md:p-12">
            <div className="w-full flex flex-col items-center">
                <img src={person4} alt="CEO" className="w-full md:w-[400px] border-2 border-white rounded" />
            </div>
            <div className="w-full flex flex-col items-start">
                <h1 className="py-3 text-xl md:text-2xl font-normal text-orange-300 text-center md:text-start uppercase">About Lawyer</h1>
                <h1 className="pb-1 text-4xl md:text-5xl font-semibold text-black text-center md:text-start">Istan Cocron</h1>
                <p className="pb-5 text-xl md:text-2xl text-slate-500 text-start uppercase">CLLB Lawyers Cocron, Liebl,Leitz, Braun</p>
                <p className="pb-5 md:pr-14 text-lg md:text-xl text-black text-justify md:text-start"> the firm was established in 2007 in Jakarta, Indonesia As intellectual property law. Our exposure to the complexities in ambit of intellectual property law give us the impetus spriration to diversity Into other streams. We are experienced in handling international legal matters with empanelled with U.S consulate British Deputy High Commission.</p>
            </div>
        </div>
    </div>
  )
}