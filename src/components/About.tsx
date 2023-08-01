import { person4 } from "../assets/images/list";

export default function About() {
  return (
    <div className="flex justify-between flex-row h-[100vh] w-full p-12">
        <div className="w-1/3">
            <img className="w-[400px]" src={person4} alt="" />
        </div>
        <div className="w-[500px]">
            <div className="mt-24 mb-12">
                <p className="text-xl font-normal uppercase text-orange-300">
                    about lawyer
                </p>
                <h1 className="text-4xl">
                    Istvan Cocron
                </h1>
                <p className="text-lg font-normal uppercase">
                    CLLB Lawyers Cocron, Liebl,Leitz, Braun
                </p>
            </div>
            <div className="mb-8">
                <p className=""> the firm was established in 2007 in Jakarta, Indonesia As intellectual property law. Our exposure to the complexities in ambit of intellectual property law give us the impetus spriration to diversity Into other streams. We are experienced in handling international legal matters with empanelled with U.S consulate British Deputy High Commission.</p>
            </div>
            <div className="flex flex-row justify-between items-start">
                <div className="flex flex-col items-start">
                    <h3 className="text-2xl">Istvan Cocron</h3>
                    <p className="text-lg">Chairman & CEO</p>
                </div>
            </div>
        </div>
    </div>
  )
}