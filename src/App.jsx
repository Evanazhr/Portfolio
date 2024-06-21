import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import RoutesIndex from "./routes/Routes.jsx"

function App() {
    return (
        <main className="scroll-smooth flex w-full flex-row bg-dark-background font-inter lg:m-auto lg:max-w-5xl">
                <Navbar />
                <div className="flex w-full flex-col">
                    <RoutesIndex />
                </div>
        </main>
    )
}

export default App
