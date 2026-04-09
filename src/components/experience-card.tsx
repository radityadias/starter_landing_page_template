import {experiences} from "@/app/data";
import {isMobile} from "react-device-detect";

export default function ExperienceCard() {
    return (
        <div className="flex items-center md:items-start justify-center md:max-h-lvh overflow-y-auto md:overflow-y-scroll min-h-0 px-5 md:px-10 lg:px-20 lg:py-20">
            <div className="w-full flex flex-col items-start justify-center gap-3 md:gap-10 lg:gap-5 py-2 lg:py-0">
                {experiences.map((experience, index) => (
                    <a id="exp-list" key={index} href={experience.href} target="_blank" className="flex flex-col md:grid-cols-4 lg:p-4 gap-1 md:gap-0 hover:bg-foreground rounded-lg items-start">
                        <div className="col-span-1">
                            <p className="text-sm text-accent/60">{experience.start} &ndash; {experience.end}</p>
                        </div>
                        <div className="col-span-3 flex flex-col">
                            <p className="text-2xl font-bold md:font-semibold">{experience.name} - {experience.location}</p>
                            <p className="text-base font-light md:mt-2">{experience.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2 mb-5 md:mb-0">
                                {experience.skills.map((skill, index) => (
                                    <p className="px-2 py-1 text-xs bg-accent/10 rounded-full border border-bg-accent/20" key={index}>{skill}</p>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}