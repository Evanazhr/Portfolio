import Navbar from "./components/Navbar"
import RoutesIndex from "./routes/Routes.jsx"

function App() {
    return (
        <main className="m-auto flex w-full flex-row bg-dark-background font-inter lg:max-w-5xl">
            <Navbar />
            <div className="flex w-full flex-col">
                <RoutesIndex />
            </div>
        </main>
    )
}

export default App
