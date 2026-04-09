import { GitHubIcon } from "../../public/icons/github";
import { LinkedInIcon } from "../../public/icons/linkedin";
import { InstagramIcon } from "../../public/icons/instagram";
import {EmailIcon} from "../../public/icons/email";

export default function SocialLinks() {
    return (
        <div className="flex flex-row gap-2 items-center justify-start ">
            <a href="https://github.com/radityadias">
                <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-raditya-nur-aziz/">
               <LinkedInIcon/>
            </a>
            <a href="https://www.instagram.com/muhradityadias/">
                <InstagramIcon/>
            </a>
            <a href="mailto:radityadias24@gmail.com">
                <EmailIcon/>
            </a>
        </div>
    )
}