import { RiFacebookFill, RiGovernmentLine, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri'
import Button from './Button'

export default function Footer() {
    return (
        <div className="flex justify-between items-center p-12 bg-indigo-900">
            <div className="flex flex-col items-start">
                <div className="flex items-center gap-5">
                    <RiGovernmentLine className="text-orange-500 w-10 h-10 " />
                    <h1 className="text-white font-bold">LAW-FIRM</h1>
                </div>
                <div className="flex items-start w-[300px]">
                    <h3 className="">In case where the user has any legal issue, he/she in all cases must seek independent legal advice provider.</h3>
                </div>
                <div className="flex items-center gap-5">
                    <Button className="border-2 rounded-full bg-yellow-600 border-yellow-600">
                        <RiFacebookFill />
                    </Button>
                    <Button className="border-2 rounded-full bg-yellow-600 border-yellow-600">
                        <RiTwitterFill />
                    </Button>
                    <Button className="border-2 rounded-full bg-yellow-600 border-yellow-600">
                        <RiInstagramFill />
                    </Button>
                    <Button className="border-2 rounded-full bg-yellow-600 border-yellow-600">
                        <RiLinkedinFill />
                    </Button>
                </div>
                <div className="flex flex-col items-start">
                    <h1 className="">Open Hour</h1>
                    <p className="">Monday to Friday. 08.00 AM - 15.00 PM</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-5">
                <div className="">
                    <h2 className="">Practice Area</h2>
                    <p className="">Crime Law</p>
                    <p className="">Business Law</p>
                    <p className="">Accident WorkPlace</p>
                    <p className="">Real Estate Law</p>
                </div>
                <div className="">
                    <h2 className="">Contact Us</h2>
                    <p className="">+62 812123123</p>
                    <p className="">meong@gmail.com</p>
                    <p className="">Jakarta, Indonesia</p>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}
