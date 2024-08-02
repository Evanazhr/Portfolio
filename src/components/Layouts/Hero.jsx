import HeroPhoto from "../../../public/evan-photo.jpg"
import { TypeAnimation } from "react-type-animation"

import SkillList from "../Fragments/SkillList"
import ContactList from "../Fragments/ContactList"
export default function Hero() {
    return (
        <div className="mb-6 w-full animate-fadeUp border-b border-secondary-dark pb-6">
            <div className="mb-6 flex flex-col items-center justify-start gap-4 md:flex-row">
                <TypeAnimation
                    sequence={[
                        "Hello, i am Evan!",
                        3000,
                        "Welcome to my website 👋",
                        3000,
                    ]}
                    wrapper="span"
                    className="text-2xl font-bold text-light-color sm:text-3xl"
                    speed={40}
                    repeat={Infinity}
                />
                <div className="my-3 h-24 w-24 animate-scaleUp overflow-hidden rounded-full shadow-xl md:hidden">
                    <img
                        src={HeroPhoto}
                        alt="photo"
                        className="bg-cover bg-center transition-all hover:scale-125"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center py-3 text-center md:items-start md:justify-start md:text-start">
                <h2 className="mb-1 text-2xl font-bold">Evan Azhar</h2>
                <p className="mb-3 font-bold line-through">Web Developer</p>
                <p className="pt-1">
                    I love to learn new things. I am always curious and
                    motivated to expand my skills and knowledge.
                </p>
            </div>
            <div className="my-6 flex w-full flex-row items-center justify-center gap-6 md:justify-start">
                <ContactList />
            </div>
            <div className="flex w-full">
                <SkillList />
            </div>
        </div>
    )
}
