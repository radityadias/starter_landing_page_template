import {bio} from "@/app/data";
import SocialLinks from "./social-links";
import {RightArrowIcon} from "../../public/icons/right-arrow";

export default function Hero() {
    return (
        <div className="flex flex-col items-start justify-between space-y-4 px-5 py-10 md:px-10 md:py-10 lg:px-20 lg:py-20">
            <div className="space-y-3">
                <h1>{bio.name}</h1>
                <p className="text-xl md:text-2xl font-semibold">{bio.role}</p>
                <p className="text-base md:text-md ld:text-lg">{bio.description}</p>
                <a href="mailto:radityadias24@gmail.com"
                   className="flex items-center justify-center space-x-2 w-fit bg-accent px-4 py-2 rounded-full text-foreground cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95">
                    <p className="text-base md:text-sm">Contact Me</p>
                    <RightArrowIcon/>
                </a>
            </div>
            <SocialLinks/>
        </div>
    )
}
