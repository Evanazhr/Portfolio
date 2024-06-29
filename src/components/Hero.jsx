import HeroPhoto from "../assets/evan-photo.jpg"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
    return (
        <div className="mb-6 animate-fadeUp border-b border-secondary-dark pb-6">
            <div className="mb-6 flex flex-col items-center justify-start gap-4 md:flex-row">
                <div className="my-3 h-24 w-24 animate-scaleUp overflow-hidden rounded-full shadow-xl md:hidden">
                    <img
                        src={HeroPhoto}
                        alt="photo"
                        className="bg-cover bg-center transition-all hover:scale-125"
                    />
                </div>

                <TypeAnimation
                    sequence={[
                        "Hello friend, i am Evan!",
                        3000,
                        "Welcome to my website 👋",
                        3000,
                    ]}
                    wrapper="span"
                    className="text-3xl font-bold text-light-color"
                    speed={40}
                    repeat={Infinity}
                />
            </div>
            <div className="flex flex-col items-center justify-center py-3 text-center md:items-start md:justify-start md:text-start">
                <p className="pt-1">
                My name is Evan Azhar Hartana, you can call me Evan, i
                        am student of pamulang university, computer systems
                        major.
                    I am always eager to expand my skills and knowlege,
                    embracing new challenges and technologies.
                </p>
            </div>
        </div>
    )
}
