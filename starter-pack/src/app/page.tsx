import Hero from "@/components/hero";
import ExperienceCard from "@/components/experience-card";

import { bio, experiences } from "@/app/data";
import { isMobile } from "react-device-detect";

export default function Home() {

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-transparent">
            <Hero />
            <ExperienceCard />
        </div>
    );
}
