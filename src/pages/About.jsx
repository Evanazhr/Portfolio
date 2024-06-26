import Footer from "../components/Footer"
import photo from "../assets/evan-photo-2.jpg"

export default function About() {
    document.title = "About | Evan Azhar Hartana"

    return (
        <>
            <div className="w-full animate-fadeUp px-5 py-5 text-light-color">
                <h1 className="text-3xl font-bold">About</h1>
                <p className="mt-1">Who am i?</p>
                <div className="mt-3 border-b border-secondary-dark pb-6">
                    <p className="text-wrap mb-6">
                        My name is Evan Azhar Hartana, you can call me Evan, i
                        am student of pamulang university, computer systems
                        major. 
                    </p>
                    <div className="w-auto h-[60vh] rounded-lg overflow-hidden">
                    <img src={photo} alt="photo" className="bg-center bg-cover -translate-y-1/4 sm:-translate-y-1/2 "  />

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
