import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import RoutesIndex from "./routes/Routes.jsx"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
    return (
        <main className=" flex w-full flex-row bg-dark-background font-inter lg:m-auto lg:max-w-5xl">
                <Analytics/>
                <SpeedInsights/>
                
                <Navbar />
                <div className="flex w-full flex-col">
                    <RoutesIndex />
                </div>
        </main>
    )
}

export default App
