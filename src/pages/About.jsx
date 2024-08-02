import Footer from "../components/Fragments/Footer"
import photo from "../../public/evan-photo-2.jpg"
import Navbar from "../components/Fragments/Navbar"

import { useEffect } from "react"
export default function About() {
    useEffect(() => {
        document.title = "About | Evan Azhar Hartana"
    }, [])

    return (
        <div className="mx-auto flex max-w-7xl flex-row">
            <Navbar />
            <div className="w-full animate-fadeUp px-5 py-5 text-light-color">
                <h1 className="text-3xl font-bold">About</h1>
                <p className="mt-1">Who am i?</p>
                <div className="mt-3 grid grid-cols-1 gap-4 border-b border-secondary-dark pb-6 sm:grid-cols-2">
                    <p className="mb-6 text-wrap">
                        My name is Evan Azhar Hartana, you can call me Evan, i
                        am student of pamulang university, computer systems
                        major.
                    </p>
                    <div className="aspect-square w-full overflow-hidden rounded">
                        <img
                            src={photo}
                            alt="photo"
                            className="-translate-y-1/4 object-cover object-center transition-all hover:scale-125"
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
