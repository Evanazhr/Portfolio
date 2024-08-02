import PagesLayout from "../components/Layouts/PagesLayout"
import ContactList from "../components/Fragments/ContactList"

import { useEffect } from "react"

export default function Contact() {
    useEffect(() => {
        document.title = "Contacts | Evan Azhar Hartana"
    }, [])

    return (
        <PagesLayout>
            <div className="w-full animate-fadeUp px-5 py-5 text-light-color md:py-5">
                <div className="border-b border-secondary-dark pb-6">
                    <h1 className="text-3xl">Contact</h1>
                    <p className="bg-main-color mt-1">Get in touch</p>
                    <div className="my-6 flex w-full flex-row items-center justify-center gap-6 sm:justify-start">
                        <ContactList />
                    </div>
                </div>
            </div>
        </PagesLayout>
    )
}
