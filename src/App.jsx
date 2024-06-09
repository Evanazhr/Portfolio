import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import RoutesIndex from "./routes"
import "./App.css"

function App() {
    return (
        <>
            <div className="flex w-full flex-row bg-dark-background font-inter lg:m-auto lg:max-w-5xl">
                <Navbar />
                <div className="flex w-full flex-col">
                    <RoutesIndex />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default App
