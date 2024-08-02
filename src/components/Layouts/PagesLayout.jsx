import Footer from "../Fragments/Footer"
import Navbar from "../Fragments/Navbar"

const PagesLayout = (props) => {
    return (
        <div className="mx-auto w-full max-w-7xl text-white">
            <div className="flex flex-row">
                <Navbar />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default PagesLayout
