import { useEffect } from "react"

export default function NoPage() {
    useEffect(() => {
        document.title = "No Page Found"
    }, [])
    return (
        <>
            <div className="w-full px-5 py-5 text-light-color md:py-5">
                <h1 className="bg-main-color">NOT FOUND</h1>
            </div>
        </>
    )
}
