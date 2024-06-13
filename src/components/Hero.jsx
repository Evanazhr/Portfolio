import HeroPhoto from "../assets/hero-photo.jpg"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
    return (
        <div className="mb-6 animate-fadeUp border-b border-secondary-dark pb-6">
            <div className="flex flex-row items-center justify-start gap-4">
                <div className="my-3 h-16 w-16 animate-scaleUp overflow-hidden rounded-full shadow-xl md:hidden">
                    <img
                        src={HeroPhoto}
                        alt="photo"
                        className="bg-cover bg-center"
                    />
                </div>

                <TypeAnimation
                    sequence={[
                        "Hi, i am Evan!",
                        3000,
                        "Welcome to my website 👋",
                        3000,
                    ]}
                    wrapper="span"
                    className="text-2xl font-bold text-light-color"
                    speed={40}
                    repeat={Infinity}
                />
            </div>
            <div className="py-3">
                <ul>
                    <li>
                        <p>- Front End Developer (one day)</p>
                    </li>
                </ul>
                <p className="pt-1">
                    i'm always eager to expand my skills and knowlege, embracing
                    new challenges and technologies.
                </p>
            </div>
        </div>
    )
}
