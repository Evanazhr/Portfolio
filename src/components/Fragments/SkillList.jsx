import SkillLogo from "../Elements/SkillLogo"

import { IoLogoJavascript } from "react-icons/io5"
import { IoLogoHtml5 } from "react-icons/io"
import { IoLogoNodejs } from "react-icons/io"
import { RiTailwindCssFill } from "react-icons/ri"
import { IoLogoCss3 } from "react-icons/io"
import { RiNextjsFill } from "react-icons/ri"
import { FaReact } from "react-icons/fa"
const SkillList = () => {
    return (
        <div className="mt-6 flex w-full flex-row flex-wrap items-center justify-center gap-3 md:justify-start">
            <SkillLogo title="HTML">
                <IoLogoHtml5 className="text-3xl" />
            </SkillLogo>
            <SkillLogo title="CSS">
                <IoLogoCss3 className="text-3xl" />
            </SkillLogo>
            <SkillLogo title="Javascript">
                <IoLogoJavascript className="text-3xl" />
            </SkillLogo>
            <SkillLogo title="TailwindCSS">
                <RiTailwindCssFill className="text-3xl" />
            </SkillLogo>
            <SkillLogo title="ReactJs">
                <FaReact className="text-3xl" />
            </SkillLogo>
            <SkillLogo title="NodeJs">
                <IoLogoNodejs className="text-3xl" />
            </SkillLogo>
            <SkillLogo title="NextJs">
                <RiNextjsFill className="text-3xl" />
            </SkillLogo>
        </div>
    )
}

export default SkillList
