import ContactLists from "../Fragments/ContactList"
export default function Footer() {
    return (
        <footer className="flex w-full animate-fadeUp flex-col items-center justify-between px-5 text-light-color">
            <div className="flex w-full flex-row justify-center border-b border-dashed border-secondary-dark pb-6">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="my-3 text-lg font-bold">Find me on</h2>
                    <div className="flex w-full flex-row items-center justify-center gap-6 sm:justify-start">
                        <ContactLists variant="shadow-none animate-none" />
                    </div>
                </div>
            </div>
            <div className="py-6 pb-32 md:pb-6">
                <h2 className="text-sm">evanazh@2024</h2>
            </div>
        </footer>
    )
}
