import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { person1 } from "../assets/images/list";
import Button from "./Button";

export default function Testimonials() {
    return (
        <div className="flex flex-row justify-between w-full p-12">
            <div className="max-w-[500px]">
                <div className="m-12">
                    <div className="mb-3">
                        <p className="text-xl font-normal uppercase text-orange-300">
                            testimonials
                        </p>
                    </div>
                    <div className="mb-3">
                        <h1 className="text-4xl">
                            Our Clients Say About Our Services.
                        </h1>
                    </div>
                    <div className="mb-5">
                        <p className="text-lg font-normal uppercase">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam praesentium error omnis impedit commodi, dolores fugiat repudiandae voluptate accusantium molestiae nobis possimus vero mollitia rerum ut ea aliquid earum?
                        </p>
                    </div>
                    <div className="">
                        <Button className="bg-yellow-600">Testimonials</Button>
                     </div>
                </div>
            </div>
            <div className="max-w-[500px]">
                <div className="">
                    <img className="w-[300px]" src={person1} alt="" />
                </div>
            </div>
            <div className="max-w-[500px]">
                <div className="m-12">
                    <div className="mb-3">
                        <h1 className="text-2xl">
                            "Working with the law firm was an outstanding experience. Their team of skilled attorneys displayed exceptional professionalism, deep legal knowledge, and unwavering dedication to my case."
                        </h1>
                    </div>
                    <div className="mb-5">
                        <p className="text-lg font-normal uppercase">
                            - John Doe
                        </p>
                    </div>
                    <div className="flex gap-5">
                        <Button className="bg-yellow-600">
                            <RiArrowLeftLine/>
                        </Button>
                        <Button className="bg-yellow-600">
                            <RiArrowRightLine/>
                        </Button>
                     </div>
                </div>
            </div>
        </div>
    )
}
